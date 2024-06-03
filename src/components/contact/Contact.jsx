import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
                Feel free to reach out through the contact form or find my contact information
                below. Your feedback, questions, and suggestions are important to me as I strive
                to provide exceptional service. 
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />elvisngerem@gmail.com</li>
                <li><img src={phone_icon} alt="" />+234-810-5814-138</li>
                <li><img src={location_icon} alt="" />Army Estate, Kubwa <br /> FCT, Nigeria.</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>

                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required />

                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>

                <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact