import React, { useEffect } from "react";
import Image from "./Image";
import { motion } from "framer-motion";

//variants

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  //   // make setLoading to false after 4s, that means the intro will last for 4s
  //   return () => clearTimeout(timer); //cleanup function
  // });

  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        // instead of using useEffect and pass a set timeout we can also use onAnimationComplete to setLoading to false
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div className="transition-image" variants={itemMain}>
          <motion.img
            layoutId="main-image-1"
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt="random alt"
            // this is the main big image
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
        {/* ImageBlock are small images that will animate w.r to the big image */}
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div
      className={`image-block ${id}`}
      // //images shrink to 0.5 scale in 1s
      // animate={{
      //   scale: 0.5,
      //   transition: {
      //     duration: 1,
      //   },
      // }}
      variants={variants}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
