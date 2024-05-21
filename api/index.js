const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require ('jsonwebtoken');
const { error } = require('console');
const cookieParser = require('cookie-parser');
require('dotenv').config();
import http from 'http';

const salt = bcrypt.genSalt(10);
const secret = "asdsdfhj342wedfnmsb2194uejkfdsndfbsdf";


// Middleware
app.use(cors({credentials:true, origin:'http://localhost:5173'})); 
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser());



// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
   ;
    process.exit(error); 
}

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB:', err));


// Route for user signup
app.post('/signup', async (req, res) => {
    // Extract user data from request body
    const { username, number, email, ward, password } = req.body;
   
    try {
        // Generate salt and hash password
        
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create user document in MongoDB
        const userDoc = await User.create({
            username,
            number,
            email,
            ward,
            password: hashedPassword // Store hashed password
        });

        // Respond with the created user document
        res.status(201).json(userDoc);
    } catch (error) {
        // Handle errors
        console.error('Error during user signup:', error);
        res.status(400).json({ error: 'Registration failed', details: error.message });
    }
});


// Route for login
app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        //logged in
        jwt.sign({username, id:userDoc._id},secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');  
        });
    }else{
        res.status(400).json('Wrong credential');
    }
});

app.get('/UserProfilePage', (req,res)=>{
    const{token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info)=>{
    if (err) throw err;
    res.json(info);
    });
});


// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
