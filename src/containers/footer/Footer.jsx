import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';
import { motion } from 'framer-motion';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <motion.h1
              initial={{opacity: 0, scale:0.8}}
              viewport={{once: true}}
              whileInView={{opacity: 1, scale:1}}
              transition={{
                delay: 0.2,
                  type: "spring",
                    stiffness: 120,
                    damping: 8,
                    duration: 1,
                    ease: "easeInOut",
                  }}
      className="gradient__text">Voulez-vous entrer dans le futur avant les autres</motion.h1>
    </div>

    <div className="gpt3__footer-btn">
      <motion.p
                  initial={{opacity: 0}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1}}
                  transition={{
                    delay: 0.2,
                      type: "spring",
                        stiffness: 120,
                        damping: 8,
                        duration: 1,
                        ease: "easeInOut",
                      }}
      >Demander un accès anticipé</motion.p>
    </div>

    <motion.div
                initial={{opacity: 0}}
                viewport={{once: true}}
                whileInView={{opacity: 1}}
                transition={{
                  delay: 0.2,
                    type: "spring",
                      stiffness: 120,
                      damping: 8,
                      duration: 1,
                      ease: "easeInOut",
                    }}
    className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Liens</h4>
        <p>Overons</p>
        <p>Réseaux sociaux</p>
        <p>Compteurs</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entreprise</h4>
        <p>termes et conditions </p>
        <p>politique de confidentialité</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Restons en contact</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>(+226)51 54 25 86</p>
        <p>info@zast.net</p>
      </div>
    </motion.div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
      <p>Stéphane ZAKANE Exo React JS</p>
    </div>
  </div>
);

export default Footer;
