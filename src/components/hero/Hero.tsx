"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import washingpowder from "../../assets/images/washingpowder.png"

const Hero = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: -1000 }} // Initial position off-screen to the left
        animate={{ x: 0 }} // Animating to position 0
        transition={{ type: "spring", stiffness: 120, duration: 1 }} // Spring animation
        className={styles.textContainer}
      >
        <p className={styles.heading}>Delicious & Affordable</p>
        <p className={styles.subHeading}>Meals Near You.</p>
        <p className={styles.headingText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }} // Initial position off-screen to the bottom and opacity set to 0
        animate={{ y: 0, opacity: 1 }} // Animating to position 0 and opacity 1
        transition={{ type: "tween", duration: 1, delay: 0.5 }} // Linear animation with delay for the fade effect
        className={styles.imageContainer}
      >

        <Image src="https://lh3.googleusercontent.com/p/AF1QipOrYdN0YFENxlto6lqgjiyGUbkJelv6A37JTBCL=s0" alt="no image" width={400} height={300} className={styles.image} />

      </motion.div>
    </div>
  );
};

export default Hero;
