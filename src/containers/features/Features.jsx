import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import { motion } from 'framer-motion';

const featuresData = [
  {
    title: 'Améliorer instantanément les méfiances',
    text: 'De leurs bons John, il donne des riches. Ils vieillissent et dessinent comme Mme. L’amélioration de la méfiance pourrait instantanément être saluée par la famille.',
  },
  {
    title: 'Devenez l’actif soigné',
    text: 'Considéré comme sympathisant avec dix aides exceptionnellement occasionnelles, cela ne suffit pas. Lettre de le devenir, il avait tendance à permettre activement.',
  },
  {
    title: 'Message ou je ne suis rien',
    text: 'Led demander une éventuelle relation de maîtresse avec l élégance manger également en débattant. Par message ou je ne suis rien parmi les principales adresses.',
  },
  {
    title: 'Vraiment un comté de droit des garçons',
    text: 'Vraiment le comté de droit des garçons, elle n a pas pu sa sœur. Vous vous enlevez, c est comme six heures. Parmi les sexes, la loi sur les congés est en vigueur. Dans la table construite dans un rougissement rapide..',
  },
];



const Features = () => {
  
  return(
  <div className="gpt3__features section__padding" id="features">
    <motion.div
                  initial={{opacity: 0, x: 100}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, x: 0, filter: ["blur(5px)", "blur(0px)",]}}
                  transition={{
                    delay: 0.2,
                      type: "spring",
                        stiffness: 120,
                        damping: 10,
                        duration: 1,
                        ease: "easeInOut",
                      }}
    className="gpt3__features-heading">
      <h1 className="gradient__text">L’avenir est maintenant et il vous suffit de le réaliser. Entrez dans le futur aujourd’hui. & Arangez-vous pour que cela arrive.</h1>
      <p>Demandez un accès anticipé pour commencer</p>
    </motion.div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <motion.div
        initial={{ x: -50, opacity: 0 }}
        viewport={{once: true}}
        whileInView={{opacity: 1, x: 0, filter: ["blur(3px)", "blur(0px)",]}}
        transition={{ 
          delay: index * 0.2, 
          duration: 0.5,
          type: "spring",
          stiffness: 120,
          damping: 10,
          ease: "easeInOut",
        }}
        key={item.title + index}
        ><Feature title={item.title} text={item.text} key={item.title + index} /></motion.div>
        
      ))}
    </div>
  </div>
);
}

export default Features;
