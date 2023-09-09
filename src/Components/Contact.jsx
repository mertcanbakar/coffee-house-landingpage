import logo from '../img/logo.png'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-us">
        <h3 className='contact-header'>Contact Us</h3>
        <p className='contact-p'>Send us a message</p>
        <input type="text" placeholder="Your Name" className="text"/>
        <input type="text" placeholder="Your Email" className="text"/>
        <textarea placeholder="Your Message" className="message-text" />
        <button>Submit</button>
      </div>
      <div className="contacts">
        <img src={logo} alt="Logo"  width='50px'/>
        <p><AiFillPhone className='icons' /> (08) 400 2000</p>
        <p><AiOutlineMail className='icons'/> coffeehouse@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact