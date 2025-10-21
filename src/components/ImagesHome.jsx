
"use client";

import { useState, useEffect } from "react";


export default function ImagesHome() {
  const images = [
    "/imghome1.png",
    "/imghome2.png",
    "/imghome3.png",
    "/imghome4.png",
  ];

  const title = 'websites that elevate your business';
  const description =
    "we craft modern, fast and user friendly websites that make your";

  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setNext((prev) => (prev + 1) % images.length);
        setFlipping(false);
      }, 600);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-[1440px] h-[512px] relative mx-auto perspective-1000 overflow-hidden rounded-xl">
      {/* الصور */}
      <div className="relative w-full h-full">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className={`absolute w-full h-full object-cover rounded-xl transition-transform duration-600 ${
            flipping ? "rotateY-180" : "rotateY-0"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        />
        <img
          src={images[next]}
          alt={`Slide ${next + 1}`}
          className={`absolute w-full h-full object-cover rounded-xl transition-transform duration-600 ${
            flipping ? "rotateY-0" : "rotateY-180"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        />
      </div>

      {/* Overlay للعنوان والبراجراف */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8">
        <h1 className="w-[874px] h-[80px] text-[30px] font-bold text-white  truncate text-center">
          &quot;{title}&quot;
        </h1>
        <h3 className="w-[1282px] h-[116px] mt-4 text-[20px] text-gray-900 font-bold text-center">
          {description}{" "}
           <span className="block text-center"> brand stand out</span>
        </h3>
      </div>


    </section>
  );
}
