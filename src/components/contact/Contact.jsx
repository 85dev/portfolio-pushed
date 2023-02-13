import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_q39plla', 'template_nbnwwbx', form.current, 'gbxC09ngkBCrGdevf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container  contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>mercier.ncls@gmail.com</h5>
                        <a href="mailto:mercier.ncls@gmail.com">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <AiFillLinkedin/>
                        <h4>LinkedIn</h4>
                        <h5>Nicolas Mercier</h5>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >Go To Profile</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="text" name="email" placeholder="Your Email" required/>
                    <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact