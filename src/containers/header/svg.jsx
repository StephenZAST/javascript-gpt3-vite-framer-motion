import React from 'react';
import { motion } from 'framer-motion';


const svgVariants = {
    hidden: {rotate: 0},
    visible: {
        rotate: 0,
        transition: { 
            duration: 1
         }
    }
}

const PathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const svg = () => {
    return (
        <>
            <motion.svg 
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            width="118" height="30" viewBox="0 0 118 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                <motion.path d="M30.003 13.3516V15.8242C30.003 20.1374 28.6474 23.5852 25.9362 26.1676C23.2527 28.7225 19.836 30 15.6862 30C11.1768 30 7.42813 28.5577 4.44028 25.6731C1.48009 22.7885 0 19.2445 0 15.0412C0 10.8379 1.46626 7.28022 4.39878 4.36813C7.35897 1.45604 10.9693 0 15.2297 0C17.9409 0 20.417 0.604396 22.6579 1.81319C24.9264 3.02198 26.6832 4.61538 27.9281 6.59341L22.2844 9.80769C21.6481 8.81868 20.6936 8.00824 19.421 7.37637C18.1761 6.74451 16.7652 6.42857 15.1882 6.42857C12.726 6.42857 10.6788 7.23901 9.04655 8.85989C7.44196 10.4808 6.63967 12.5549 6.63967 15.0824C6.63967 17.5824 7.46963 19.6291 9.12954 21.2225C10.7895 22.7885 13.0027 23.5714 15.7692 23.5714C19.6147 23.5714 22.0907 22.0879 23.1973 19.1209H15.4372V13.3516H30.003Z" fill="white"
                variants={PathVariants}
                />

                <motion.path d="M44.7432 0.576923C47.5927 0.576923 49.9996 1.53846 51.9638 3.46154C53.9281 5.38462 54.9102 7.71978 54.9102 10.467C54.9102 13.2143 53.9281 15.5495 51.9638 17.4725C49.9996 19.3956 47.5927 20.3571 44.7432 20.3571H40.3859V29.4231H33.7462V0.576923H44.7432ZM44.7432 14.1758C45.7668 14.1758 46.6106 13.8187 47.2746 13.1044C47.9385 12.3901 48.2705 11.511 48.2705 10.467C48.2705 9.42308 47.9385 8.54396 47.2746 7.82967C46.6106 7.11538 45.7668 6.75824 44.7432 6.75824H40.3859V14.1758H44.7432Z" fill="white"
                variants={PathVariants}
                />

                <motion.path d="M77.3223 0.576923V6.92308H69.8527V29.4231H63.213V6.92308H55.7434V0.576923H77.3223Z" fill="white"
                variants={PathVariants}
                />

                <motion.path d="M78.162 20.0687V14.1346H93.9312V20.0687H78.162Z" fill="white"
                variants={PathVariants}
                />

                <motion.path d="M111.817 12.2802C113.67 12.9121 115.164 13.9423 116.299 15.3709C117.433 16.772 118 18.4341 118 20.3571C118 23.3791 116.976 25.7418 114.929 27.4451C112.882 29.1484 110.378 30 107.418 30C105.122 30 103.061 29.478 101.235 28.4341C99.4366 27.3901 98.1087 25.8516 97.251 23.8187L102.978 20.522C103.697 22.5549 105.177 23.5714 107.418 23.5714C108.718 23.5714 109.7 23.2692 110.364 22.6648C111.028 22.0604 111.36 21.2912 111.36 20.3571C111.36 19.4231 111.028 18.6538 110.364 18.0495C109.7 17.4451 108.718 17.1429 107.418 17.1429H106.049L103.517 13.3929L108.787 6.75824H98.164V0.576923H116.838V5.93407L111.817 12.2802Z" fill="white"
                variants={PathVariants}
                />

            </motion.svg>
        </>
    );
};

export default svg;