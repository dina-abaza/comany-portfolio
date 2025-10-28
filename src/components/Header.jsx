"use client";

export default function Header({ title, description }) {
  return (
    <div
      className="w-full  min-h-[160px] max-w-[1264px] md:min-h-[286px] mx-auto my-6
                 bg-[#121111] backdrop-blur-xl rounded-lg
                 flex flex-col justify-center items-center p-6 shadow-2xl"
    >
         <h1 className="text-[20px] md:text-[40px] font-bold text-center 
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-[#10A700] via-[#88E600] to-[#B8FF00]">
        {title}
      </h1>



      <h4 className=" text-white mt-[32px] md:mt-[44px] text-[14px] md:text-[20px]  text-center">
        {description}
      </h4>
    </div>
  );
}
