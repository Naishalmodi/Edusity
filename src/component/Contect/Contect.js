import React from 'react'
import './Contect.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contect = () => {
    // this is web 3 code
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c9f50440-66c3-4636-88e8-5906d25ab6c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
//   till now
  return (
    <div className='contect'>
        <div className='contect-col'>
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <ul>
                <li><img src={mail_icon} alt=''/>gls@gmail.com</li>
                <li><img src={phone_icon} alt=''/>+91 741236985</li>
                <li><img src={location_icon} alt=''/>Netaji Rd, Opp.Law Garden,<br/> Ellisbridge, Ahmedabad, Gujarat 380006</li>
            </ul>
        </div>
        <div className='contect-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your Name' required/>

                <label>Phone Number</label>
                <input type='text' name='Phone' placeholder='Enter your Phone Number' required/>

                <label>Write your message here</label>
                <textarea type='text' name='message' placeholder='Enter your message' rows='7' required/>

                <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contect;