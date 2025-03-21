import style from './Contact.module.css'
import {Link} from 'react-router'
const Contact=()=>{
  return(<div className={style.container}>
    <div className={style.h}>

        <h2 className={style.h2}>Contact Us - TravelWithUs</h2>
    </div>
    
    <form id="contactForm" action="">
      
        <label className={style.label} htmlFor="name">Your Name</label>
        <input className={style.input} type="text" id="name" name="name" placeholder="Enter your name" required/>
        <div id="nameError" className={style.error}></div>

        <label className={style.label} htmlFor="email">Your Email</label>
        <input className={style.input} type="email" id="email" name="email" placeholder="Enter your email" required/>
        <div id="emailError" className={style.error}></div>

        <label className={style.label} htmlFor="subject">Subject</label>
        <input className={style.input} type="text" id="subject" name="subject" placeholder="Enter subject" required/>
        <div id="subjectError" className={style.error}></div>

        <label className={style.label} htmlFor="message">Your Message</label>
        <textarea className={style.textarea} id="message" name="message" placeholder="Tell us about your trip or any inquiries" rows="6" required></textarea>
        <div id="messageError" className={style.error}></div>

        <input className={style.input} type="submit" value="Send Message"/>
        <div id="formSuccess" className={style.success}></div>
    </form>

    <div className={style.contact_info}>
        <p>If you prefer, you can also reach us at:</p>
        <p>Email: <Link to="mailto:travelwithus@gmail.com">travelwithus@gmail.com</Link></p>
        <p>Phone: +1 234 567 890</p>
    </div>
</div>)
}
export default Contact;