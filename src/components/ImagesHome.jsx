
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect} from "react";

export default function ImagesHome() {
  const images = [
    "/imghome1.png",
    "/imghome2.png",
    "/imghome3.png",
    "/imghome4.png",
  ];

  const animations = [
    {
      initial: { opacity: 0, scale: 1.1, x: 60 },
      animate: { opacity: 1, scale: 1, x: 0 },
      exit: { opacity: 0, scale: 0.95, x: -60 },
    },
    {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: -90, opacity: 0 },
    },
    {
      initial: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
      animate: { clipPath: "inset(0 0% 0 0%)", opacity: 1 },
      exit: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
    },
  ];

  const [index, setIndex] = useState(0);
  const [animIndex, setAnimIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setAnimIndex(Math.floor(Math.random() * animations.length)); // حركة عشوائية كل مرة
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

const currentAnimation = animations[animIndex];


  return (
    <section className="relative w-full h-[250px] md:h-[512px] overflow-hidden mx-auto">
      {/* الصور */}
      <div className="relative w-full h-full perspective-[1200px]">
        <AnimatePresence mode="sync">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover "
            initial={currentAnimation.initial}
            animate={currentAnimation.animate}
            exit={currentAnimation.exit}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
          />
        </AnimatePresence>
      </div>

      {/* النصوص */}
      <div className="absolute inset-0 mih-h[78px] flex flex-col justify-center items-center p-8 bg-black/30 backdrop-blur-[2px]">
        <h1 className="text-[16px] md:text-[30px] font-bold text-white text-center max-w-[874px] drop-shadow-lg">
          "websites that elevate your business"
        </h1>
        <h3 className="text-[14px] md:text-[20px] text-gray-200 font-semibold mt-5 text-center max-w-[1000px] drop-shadow-md ">
          we craft modern, fast and user friendly websites that make your
          <span className="block text-center">brand stand out</span>
        </h3>
      </div>
    </section>
  );
}
