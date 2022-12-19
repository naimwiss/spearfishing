import React, { useRef, useState } from 'react';
import './index.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();

  // console.log(send);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tfz62sx',
        'template_4f72iug',
        form.current,
        'PRvuFVk9JU7jEWY10'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [sendS, SetSendS] = useState('Send a message ');

  function handleClick() {
    SetSendS('Send Successfully');
  }

  return (
    <div className="con">
      <div id="footer" className="f_container">
        <form ref={form} onSubmit={sendEmail} className="left">
          <input
            type="text"
            className="input small_box"
            id="username"
            name="username"
          />
          <label htmlFor="username">Your full name</label>
          <input
            type="email"
            className="input small_box"
            name="email"
            id="email"
          />
          <label htmlFor="email">Email Address</label>
          <textarea
            name="message"
            className="input"
            id="message"
            cols="50"
            rows="10"
            placeholder="Write a Message!"
          ></textarea>
          <div className="send" onClick={handleClick}>
            <input type="submit" className="send_email" value={sendS} />
          </div>
        </form>
        <div className="f_right">
          <img
            src="https://cdn.shopify.com/s/files/1/0277/9670/1287/products/Team_3_1024x.jpg?v=1578958790"
            alt="fish_photo"
          />
        </div>
      </div>
      <div className="cpyr">
        <span>
          Copy Right <strong>2022</strong>
        </span>
        <span>
          Rabat, <strong>Morocco</strong>
        </span>
      </div>
    </div>
  );
};

export default Footer;
