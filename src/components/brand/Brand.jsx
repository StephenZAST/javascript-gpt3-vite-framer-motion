import React from 'react';
import { motion } from 'framer-motion';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => {

  return(
    <div className="gpt3__brand section__padding">
      <motion.div
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{
        delay: 0.5,
        type: "spring",
            stiffness: 120,
            damping: 10,
            ease: "easeIn",
      }}
      
      >
        <img src={google} />
      </motion.div>
      <motion.div
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
              delay: 0.6,
              type: "spring",
                  stiffness: 120,
                  damping: 10,
                  ease: "easeIn",
            }}
            
      >
        <img src={slack} />
      </motion.div>
      <motion.div
            initial={{opacity: 0, y: 100}}
            iewport={{once: true}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
              delay: 0.7,
              type: "spring",
                  stiffness: 120,
                  damping: 10,
                  ease: "easeIn",
            }}
            
      >
        <img src={atlassian} />
      </motion.div>
      <motion.div
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
              delay: 0.8,
              type: "spring",
                  stiffness: 120,
                  damping: 10,
                  ease: "easeIn",
            }}
            
      >
        <img src={dropbox} />
      </motion.div>
      <motion.div
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
              delay: 0.9,
              type: "spring",
                  stiffness: 120,
                  damping: 10,
                  ease: "easeIn",
            }}
            
      >
        <img src={shopify} />
      </motion.div>
    </div>
  );
};

export default Brand;
