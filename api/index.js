const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();

const app = express();
const uploadMiddleware = multer({ dest: '/uploads/' });

const secret = process.env.JWT_SECRET || "default_secret"; // Use environment variable for JWT secret

// Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
    console.error('MongoDB URI is missing in environment variables.');
    process.exit(1);
}

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1);
    });

// Route for user signup
app.post('/signup', async (req, res) => {
    const { username, number, email, ward, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userDoc = await User.create({
            username,
            number,
            email,
            ward,
            password: hashedPassword // Store hashed password
        });

        res.status(201).json(userDoc);
    } catch (error) {
        console.error('Error during user signup:', error);
        res.status(400).json({ error: 'Registration failed', details: error.message });
    }
});

// Route for login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userDoc = await User.findOne({ username });
        if (!userDoc) {
            return res.status(400).json({ error: 'Wrong credentials' });
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) {
                    console.error('JWT sign error:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }
                res.cookie('token', token, { httpOnly: true }).json({
                    id: userDoc._id,
                    username,
                });
            });
        } else {
            res.status(400).json({ error: 'Wrong credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/UserProfilePage', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            console.error('JWT verify error:', err);
            return res.status(401).json({ error: 'Unauthorized' });
        }
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '', { httpOnly: true }).json('ok');
});

app.post('/UpcomingEvents', uploadMiddleware.single('file'), (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) {
            console.error('JWT verify error:', err);
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const { title, summary, content } = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(postDoc);
    });
});

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
