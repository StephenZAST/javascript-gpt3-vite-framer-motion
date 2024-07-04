import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import { motion } from 'framer-motion';


const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <motion.div 
          initial={{opacity: 0, x: -100}}
          viewport={{once: true}}
          whileInView={{opacity: 1, x: 0, filter: ["blur(5px)", "blur(0px)",]}}
          transition={{
            delay: 0.5,
              type: "spring",
                stiffness: 120,
                damping: 10,
                duration: 1,
                ease: "easeInOut",
              }}
    className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Nous sommes heureux de partager notre message avec nos amis. Tout le monde a entendu notre message, comme on pouvait s'y attendre. Notre résidence est propre, même si elle n'est pas luxueuse. La connexion Internet est excellente, ce qui rend nos appartements confortables et silencieux. Madame, la propriétaire, est une personne humaine et accueillante. Nos appartements sont adaptés aux célibataires." />
    </motion.div>
    <motion.div 
              initial={{opacity: 0, x: -100}}
              viewport={{once: true}}
              whileInView={{opacity: 1, x: 0, filter: ["blur(5px)", "blur(0px)",]}}
              transition={{
                delay: 0.6,
                  type: "spring",
                    stiffness: 120,
                    damping: 10,
                    duration: 1,
                    ease: "easeInOut",
                  }}
    className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Les possibilités dépassent votre imagination</h1>
      <p>Explorez la bibliothèque</p>
    </motion.div>
    <div className="gpt3__whatgpt3-container">
      <motion.div
                initial={{opacity: 0, x: -100}}
                viewport={{once: true}}
                whileInView={{opacity: 1, x: 0, filter: ["blur(4px)", "blur(0px)",]}}
                transition={{
                  delay: 0.7,
                    type: "spring",
                      stiffness: 120,
                      damping: 10,
                      duration: 1,
                      ease: "easeInOut",
                    }}
      ><Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." /></motion.div>
      <motion.div
                initial={{opacity: 0, x: -25}}
                viewport={{once: true}}
                whileInView={{opacity: 1, x: 0, filter: ["blur(2px)", "blur(0px)",]}}
                transition={{
                  delay: 0.8,
                    type: "spring",
                      stiffness: 120,
                      damping: 10,
                      duration: 1,
                      ease: "easeInOut",
                    }}
      ><Feature title="Knowledgebase" text="À la jointure madame, il a insisté sur l'humanité. Entrée conviviale pour célibataire. Comme il est impossible de posséder des appartements b" /></motion.div>
      <motion.div
                initial={{opacity: 0, x: -15}}
                viewport={{once: true}}
                whileInView={{opacity: 1, x: 0, filter: ["blur(1px)", "blur(0px)",]}}
                transition={{
                  delay: 0.9,
                    type: "spring",
                      stiffness: 120,
                      damping: 10,
                      duration: 1,
                      ease: "easeInOut",
                    }}
      ><Feature title="Education" text="À la jointure madame, il a insisté sur l'humanité. Entrée conviviale pour célibataire. Comme il est impossible de posséder des appartements b" />
      </motion.div>
    </div>
  </div>
);

export default WhatGPT3;
