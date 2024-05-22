import React from "react";
import "../../css/contact.css";
import image from "../../asset/contactus.png";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(this.state);
  };

  render() {
    return (
      <div className="contact-page">
        <div className="contact-info-column">
          <img src={image} alt="Contact" />
          <div>
            <h2>Contact Information</h2>
            <p>Address: Ward 17 Office, Dhobichaur</p>
            <p>City: Kathmandu-17</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@infoher.com</p>
          </div>
        </div>
        <div className="contact-form-column">
          <form onSubmit={this.handleSubmit}>
            <h2>Contact Form</h2>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
