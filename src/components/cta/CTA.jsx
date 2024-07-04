import React from 'react';
import './cta.css';
import { motion } from 'framer-motion';

const CTA = () => (
  <motion.div
  initial={{opacity: 0, y: 20, rotateX: 65}}
  viewport={{once: false}}
  whileInView={{opacity: 1, y: 0, rotateX: 0}}
  transition={{
    delay: 0.5,
      type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 1,
        ease: "easeInOut",
      }}
  className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Demandez un accès anticipé pour commencer</p>
      <h3>Inscrivez-vous aujourd'hui et commencez à explorer les possibilités infinies.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">Commencer</button>
    </div>
  </motion.div>
);

export default CTA;
