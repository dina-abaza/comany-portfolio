"use client";

export default function Header({ title, description }) {
  return (
    <div
      className="w-[1264px] h-[283px] mx-auto my-4 
                 bg-black/30 backdrop-blur-lg rounded-lg
                 flex flex-col justify-center items-center p-8"
    >
         <h1 className="text-[48px] font-bold text-center 
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-[#10A700] via-[#88E600] to-[#B8FF00]">
        {title}
      </h1>



      <h4 className=" text-white mt-4 text-[20px] text-center">
        {description}
      </h4>
    </div>
  );
}
