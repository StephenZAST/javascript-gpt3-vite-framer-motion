import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import { motion } from 'framer-motion';


const style = {
  backgroundColor: '#042C54',
 };
 
const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
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
      className="gradient__text">Il se passe beaucoup de choses,<br /> Nous bloguons à ce sujet.</motion.h1>
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
    className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2023" text="GPT-3 et Openai sont l'avenir. Explorons comment c'est ?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article  imgUrl={blog02} date="Sep 26, 2023" text="GPT-3 et Openai sont l'avenir. Explorons comment c'est ?" />
        <Article imgUrl={blog03} date="Sep 26, 2023" text="GPT-3 et Openai sont l'avenir. Explorons comment c'est ?" />
        <Article imgUrl={blog04} date="Sep 26, 2023" text="GPT-3 et Openai sont l'avenir. Explorons comment c'est ?" />
        <Article imgUrl={blog05} date="Sep 26, 2023" text="GPT-3 et Openai sont l'avenir. Explorons comment c'est ?" />
      </div>
    </motion.div>
  </div>
);

export default Blog;
