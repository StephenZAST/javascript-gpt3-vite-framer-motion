import React, { useState } from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import { motion } from "framer-motion";

const Header = () => {

  const sentence = "Un lit de fortune, c'est toujours un lit de fortune. Toutes les pensées ne sont pas bénédictions. L'indulgence ne mène qu'à la dépendance. Fêtons nos années, mais prenons garde à ne pas demander trop.";
  const words = sentence.split(" ");

return (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <motion.h1 
      initial={{opacity: 0, duration:2, x:-100}}
      animate={{
        filter: ["blur(5px)", "blur(0px)",],
        opacity: 1,
        x: 0
      }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
        damping: 6,
        stiffness: 120,
        type: "spring",
      }}
      className="gradient__text">GPT-3 OpenAI : un outil puissant pour la créativité</motion.h1>
      <div className='spanne'>
        {words.map((word, i) => (
        <motion.h2 className='gratdien-text-text'
          key={word + "-" + i}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.1+1.5,
            type: "spring",
            stiffness: 120,
            damping: 10,
            ease: "easeIn",
          }}
        >
          {word + (i !== words.length - 1 ? " " : "")}
        </motion.h2>
      ))}
      </div>
      

      <motion.div
      initial={{opacity: 0, duration:2, x:-100}}
      animate={{
        filter: ["blur(5px)", "blur(0px)",],
        opacity: 1,
        x: 0
      }}
      transition={{
        delay: 0.6,
        duration: 1,
        ease: "easeInOut",
        damping: 6,
        stiffness: 120,
        type: "spring",
      }}
      className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Commencer</button>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, duration:2, x:-100}}
      animate={{
        filter: ["blur(5px)", "blur(0px)",],
        opacity: 1,
        x: 0
      }}
      transition={{
        delay: 0.7,
        duration: 1,
        ease: "easeInOut",
        damping: 6,
        stiffness: 120,
        type: "spring",
      }}
      className="gpt3__header-content__people">
        <img src={people} />
        <p>1 600 personnes ont demandé accès à une visite au cours des dernières 24 heures</p>
      </motion.div>
    </div>

    <motion.div 
    initial={{opacity: 0, duration:2, x:100}}
    animate={{
      filter: ["blur(5px)", "blur(0px)",],
      opacity: 1,
      x: 0
    }}
    transition={{
      delay: 0.8,
      duration: 1,
      ease: "easeInOut",
      damping: 6,
      stiffness: 120,
      type: "spring",
    }}
    className="gpt3__header-image">
      <img src={ai} />
    </motion.div>
  </div>
);
};

export default Header;
