import React from 'react';
import './index.css';
import Logo from '../../assets/img/logo1.png';
import { SiInstagram } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { BsYoutube, BsWhatsapp } from 'react-icons/bs';
import fImg from '../../assets/img/fish.png';
import { motion } from 'framer-motion';
import spear from '../../assets/img/srearfhisher.png';

const Hero = () => {
  return (
    <div id="hero" className="Hero_container">
      <motion.div
        animate={{
          y: 100,
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          delay: 1,
          damping: 7,
        }}
        className="logo"
      >
        <img src={fImg} alt="" />
      </motion.div>
      <motion.div
        animate={{
          y: 70,
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          delay: 1,
          damping: 7,
        }}
        className="logo2"
      >
        <img src={spear} alt="Logo" />
      </motion.div>
      <div className="socialId">
        <a
          href="http://instagram.com/na_im6775"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram />
        </a>
        <a
          href="http://facebook.com/nayemsany2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="http://youtube.com/@naimwiss7975"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          href="http://api.whatsapp.com/send?phone=+212714132949"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>

      <div className="left">
        <div className="title">
          <motion.span
            animate={{
              x: 10,
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              delay: 1.2,
              damping: 15,
            }}
          >
            Fishing With spear!
          </motion.span>
          <motion.span
            animate={{
              x: 10,
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              delay: 1.5,
              damping: 15,
            }}
          >
            Chatch Fish with Dynamic way.
          </motion.span>
          <motion.span
            animate={{
              x: 10,
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              delay: 1.8,
              damping: 15,
            }}
          >
            If you love so than join with us.
          </motion.span>
        </div>
      </div>
      <div className="right">
        <motion.div
          animate={{
            rotateY: 360,
            opacity: 1,
          }}
          transition={{
            duration: 5,
          }}
          className="img_container"
        >
          <img src={Logo} alt="hero_logo" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
