"use client";

export default function Header({ title, description }) {
  return (
    <div
      className="w-full max-w[360px] min-h-[160px] md:max-w-[1264px] md:min-h-[286px] mx-auto my-6
                 bg-black/50 backdrop-blur-xl rounded-lg
                 flex flex-col justify-center items-center p-6 shadow-2xl"
    >
         <h1 className="text-[20px] md:text-[40px] min-h-[60px] md:min-h-[170px] font-bold text-center 
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-[#10A700] via-[#88E600] to-[#B8FF00]">
        {title}
      </h1>



      <h4 className=" text-white mt-5 md:mt-10 text-[14px] md:text-[20px]  min-h-[80px]  text-center">
        {description}
      </h4>
    </div>
  );
}
