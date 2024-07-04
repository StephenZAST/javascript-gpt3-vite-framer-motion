import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { motion } from 'framer-motion';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <motion.img
          initial={{opacity: 0, duration:2, x:100}}
          viewport={{once: true}}
          whileInView={{
            filter: ["blur(3px)", "blur(0px)",],
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: "easeInOut",
            damping: 6,
            stiffness: 120,
            type: "spring",}}
      src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <motion.h4
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
      >Demandez un accès anticipé pour commencer</motion.h4>
      <motion.h1
                      initial={{opacity: 0, x: -100}}
                      viewport={{once: true}}
                      whileInView={{opacity: 1, x: 0, filter: ["blur(4px)", "blur(0px)",]}}
                      transition={{
                        delay: 0.8,
                          type: "spring",
                            stiffness: 120,
                            damping: 10,
                            duration: 1,
                            ease: "easeInOut",
                          }}
      className="gradient__text">Les possibilités sont <br /> au-delà de votre imagination</motion.h1>
      <motion.p
                      initial={{opacity: 0, x: -100}}
                      viewport={{once: true}}
                      whileInView={{opacity: 1, x: 0, filter: ["blur(4px)", "blur(0px)",]}}
                      transition={{
                        delay: 0.9,
                          type: "spring",
                            stiffness: 120,
                            damping: 10,
                            duration: 1,
                            ease: "easeInOut",
                          }}
      >Pourtant, n'importe quel lit pour une aide au voyage est désagréable. Ce ne sont pas toutes les pensées qui exercent la bénédiction. Indulgence façon tout, la joie altère l'attachement bruyant. Fête nous années pour commander permettre demandé.</motion.p>
      <motion.h4
                      initial={{opacity: 0, x: -100}}
                      viewport={{once: true}}
                      whileInView={{opacity: 1, x: 0, filter: ["blur(4px)", "blur(0px)",]}}
                      transition={{
                        delay: 1,
                          type: "spring",
                            stiffness: 120,
                            damping: 10,
                            duration: 1,
                            ease: "easeInOut",
                          }}
      >Demandez un accès anticipé pour commencer</motion.h4>
    </div>
  </div>
);

export default Possibility;
