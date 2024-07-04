import React, { useState } from "react";
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {

  const TextTransition = ({ text }) => {
    const [words, setWords] = useState([]);

    const handleWordAdded = (word) => {
      setWords([...words, word]);

      // On ajoute un délai de 0,2 seconde entre chaque mot
      motion.update(words, {
        duration: 2,
        y: {
          from: -100,
          to: 0,
        },
        delay: 0.2,
      });
    };

    return (
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          {words.map((word) => (
            <motion.div
              key={word}
              transition={{
                duration: 2,
                y: {
                  from: -100,
                  to: 0,
                },
                delay: 0.2,
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <TextTransition text="Un lit de fortune, c'est toujours un lit de fortune. Toutes les pensées ne sont pas bénédictions. L'indulgence ne mène qu'à la dépendance. Fêtons nos années, mais prenons garde à ne pas demander trop."></TextTransition>
    </div>
  );
};

export default Header;






// import React, { useState } from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
// import './header.css';
// import { motion } from "framer-motion";

// const Header = () => {

//   const sentence = "Un lit de fortune, c'est toujours un lit de fortune. Toutes les pensées ne sont pas bénédictions. L'indulgence ne mène qu'à la dépendance. Fêtons nos années, mais prenons garde à ne pas demander trop.";
//   const words = sentence.split(" ");

// return (
//   <div className="gpt3__header section__padding" id="home">
//     <div className="gpt3__header-content">
//       <h1 className="gradient__text">GPT-3 OpenAI : un outil puissant pour la créativité</h1>
//       <div className='spanne'>
//         {words.map((word, i) => (
//         <motion.p className='gratdien-text-text'
//           key={word + "-" + i}
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{
//             delay: i * 0.1 + 3,
//             type: "spring",
//             stiffness: 120,
//             damping: 20,
//           }}
//         >
//           {word + (i !== words.length - 1 ? " " : "")}
//         </motion.p>
//       ))}
//       </div>
      

//       <div className="gpt3__header-content__input">
//         <input type="email" placeholder="Your Email Address" />
//         <button type="button">Commencer</button>
//       </div>

//       <div className="gpt3__header-content__people">
//         <img src={people} />
//         <p>1 600 personnes ont demandé accès à une visite au cours des dernières 24 heures</p>
//       </div>
//     </div>

//     <div className="gpt3__header-image">
//       <img src={ai} />
//     </div>
//   </div>
// );
// };

// export default Header;


// __________________________________Brand___________________________________________________________

// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import { useAnimation } from 'framer-motion';
// import { google, slack, atlassian, dropbox, shopify } from './imports';
// import './brand.css';

// const sources = [google, slack, atlassian, dropbox, shopify];

// const Brand = () => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView();

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <div className="gpt3__brand section__padding" ref={ref}>
//       {sources.map((src, i) => (
//         <motion.img
//           key={src + "-" + i}
//           src={src}
//           initial={{ y: -100, opacity: 0 }}
//           animate={controls}
//           variants={{
//             visible: { y: 0, opacity: 1 },
//             hidden: { y: -100, opacity: 0 }
//           }}
//           transition={{
//             delay: i * 0.1,
//             type: "spring",
//             stiffness: 120,
//             damping: 10,
//             ease: "easeIn",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Brand;

// ____________________________________Brandseconde__________________________
// import React, { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { useAnimation } from 'framer-motion';
// import { google, slack, atlassian, dropbox, shopify } from './imports';
// import './brand.css';

// const Brand = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
//   });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <div className="gpt3__brand section__padding" ref={ref}>
//       {[google, slack, atlassian, dropbox, shopify].map((src, i) => (
//         <motion.div
//           key={src}
//           custom={i}
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { opacity: 0, y: 100 },
//             visible: (i) => ({
//               opacity: 1,
//               y: 0,
//               transition: {
//                 delay: i * 0.2,
//               },
//             }),
//           }}
//         >
//           <img src={src} alt="" />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Brand;

