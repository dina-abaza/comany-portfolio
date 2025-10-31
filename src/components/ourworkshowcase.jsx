"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ourworkData } from "@/data/ourworkdata";
import { FaUsers, FaClock, FaPlay, FaPause } from "react-icons/fa";
import PrimaryButton from "./buttons/PrimaryButton";
import { useState, useRef } from "react";
import SecondaryButton from "./buttons/SecondaryButton";

export default function OurWorkShowcase() {
  const { id } = useParams();
  const project = ourworkData.find((item) => item.id == id);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!project) {
    return (
      <div className="text-white text-center py-20">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <section className="w-full flex justify-center bg-[#0C0C0C] py-[60px] px-[20px]">
        <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[1269px] mx-auto flex flex-col gap-[20px]  md:gap-[44px]">
          {/* الصف الأول: الفيديو والصورة */}
          <div className="flex justify-between items-center gap-2  md:gap-6">
            {/* الصورة الرئيسية */}
            <div className="w-[190px] sm:w-[280px] md:w-[608px] h-[193px] sm:h-[300px] md:h-[500px] rounded-[16px] overflow-hidden">
              <Image
                src={project.mainImage}
                alt={project.title}
                width={608}
                height={626}
                className="w-full h-full object-cover"
              />
            </div>

            {/* الفيديو */}
            <div className="w-[190px] sm:w-[280px] md:w-[608px] h-[193px] sm:h-[300px] md:h-[500px]  rounded-[16px] overflow-hidden bg-black relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="https://www.w3schools.com/html/mov_bbb.mp4" // 🎬 فيديو مؤقت للتجربة
                loop
                muted
                playsInline
              />
              {/* زر التشغيل والإيقاف */}
              <button
                onClick={handleTogglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all"
              >
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  {isPlaying ? (
                    <FaPause size={12} className="text-black" />
                  ) : (
                    <FaPlay size={12} className="text-black ml-1" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* الصف الثاني: 3 صور */}
          <div className="flex justify-between gap-2 sm:gap-4 md:gap-6">
            {project.subImages.map((img, i) => (
              <div
                key={i}
                className="w-[121px] sm:w-[200px] md:w-[402px] h-[110px] sm:h-[180px] md:h-[300px] rounded-[16px] overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`sub-${i}`}
                  width={402}
                  height={365}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="w-full h-[2px] bg-white my-[20px] md:my-[40px]"></div>

          {/* الصف الثالث: معلومات المشروع */}
          <div className="w-full max-w-[400px] sm:max-w-[1100px] md:max-w-[1268px]  lg:max-w-[1440px] mx-auto h-[300px] sm:h-[280px] md:h-[300px] lg:h-[180px] rounded-[16px]  flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center py-2 gap-8 md:gap-[20px] ">
            {/* بيانات المشروع */}
            <div className="text-white">
              <h2 className="text-[16px] sm:text-[18px] md:text-[24px] font-semibold mb-[6px] uppercase tracking-wide">
                travel app{" "}
                <span className="text-[12px] sm:text-[14px] md:text-[18px] font-extralight text-gray-200 ml-5">
                  (case study)
                </span>
              </h2>
              <p className="text-[12px] sm:text-[14px] md:text-[18px] font-extralight text-gray-200">
                {project.title}
              </p>
            </div>

            {/* صناديق الوقت والميمبرز */}
            <div className="flex gap-[10px] sm:gap-[20px] md:gap-[20px] lg:gap-[20px] items-center">
              <div className="max-w-[200px] p-4 sm:max-w-[277px] md:max-w-[277px] lg:max-w-[300px] h-[90px] sm:h-[80px] md:h-[126px] lg:h-[126px] bg-white rounded-[16px] flex flex-col items-center justify-center gap-2 md:gap-[32px]">
                <h3 className="text-[16px] sm:text-[18px] md:text-[24px] text-[#0C0C0C]">project time</h3>
                <div className="flex gap-[20px] sm:gap-[15px] md:gap-[40px]">
                  <FaClock size={28} className="text-[#0C0C0C]" />
                  <p className="text-[#0C0C0C] text-[12px] sm:text-[14px] md:text-[16px]">{project.time}</p>
                </div>
              </div>

              <div className="max-w-[200px] p-4 sm:max-w-[277px] md:max-w-[277px] lg:max-w-[300px] h-[90px] sm:h-[80px] md:h-[126px] lg:h-[126px] bg-white rounded-[16px] flex flex-col items-center justify-center gap-2 md:gap-[32px]">
                <h3 className="text-[16px] sm:text-[18px] md:text-[24px] text-[#0C0C0C]">team members</h3>
                <div className="flex gap-[20px] sm:gap-[15px] md:gap-[40px]">
                  <FaUsers size={24} className="text-[#0C0C0C]" />
                  <p className="text-[#0C0C0C] text-[12px] sm:text-[14px] md:text-[16px]">
                    {project.members} Members
                  </p>
                </div>
              </div>

              {/* زر المشروع */}
            
            </div>
              <div className="flex justify-end">
                <PrimaryButton href={"/contact"} text= "SEE FULL PROJECT" />
              </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="w-full flex justify-center bg-[#0C0C0C] py-[80px] px-[20px]">
        <div className="w-full max-w-[1440px] mx-auto h-[409px] flex justify-between gap-[44px]">
          {/* Problem Statement */}
          <div className="w-[698px] h-[409px] bg-white rounded-[16px] flex flex-col justify-center p-[32px]">
            <div className="flex items-center gap-[20px] mb-[20px] self-center">
              <div className="w-[73px] h-[73px] bg-[#E53935] rounded-full flex items-center justify-center">
                <span className="text-white text-[36px] font-bold">!</span>
              </div>
              <h3 className="text-[32px] font-semibold text-[#0C0C0C] leading-[73px]">
                Problem Statement
              </h3>
            </div>

            <p className="text-[24px] text-[#444] font-light leading-[36px] text-center max-w-[556px] mx-auto normal-case ">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="w-[698px] h-[409px] bg-white rounded-[16px] flex flex-col justify-center p-[32px]">
            <div className="flex items-center gap-[20px] mb-[20px] self-center">
              <div className="w-[73px] h-[73px] bg-[#43A047] rounded-full flex items-center justify-center">
                <span className="text-white text-[28px] font-bold">✓</span>
              </div>
              <h3 className="text-[32px] font-semibold text-[#0C0C0C] leading-[73px]">
                Solution
              </h3>
            </div>

            <p className="text-[24px] text-[#444] font-light leading-[36px] text-center max-w-[556px] mx-auto normal-case ">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full flex justify-center bg-white py-[80px] px-[20px]">
        <div className="w-full max-w-[1440px] mx-auto h-[368px] flex flex-col items-center">
          {/* العنوان */}
          <h2 className="text-[40px] font-semibold text-black text-center">
            {project.keyFeaturesTitle || "Key Features"}
          </h2>

          {/* المسافة بين العنوان والمربعات */}
          <div className="h-[72px]"></div>

          {/* المربعات */}
          <div className="w-full h-[112px] flex justify-between">
            {project.keyFeatures?.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="w-[378px] h-[112px] bg-[#0C0C0C] rounded-[12px] flex items-center px-[32px] gap-[32px]"
              >
                {/* الأيقونة */}
                <div className="w-[48px] h-[48px] flex items-center justify-center text-white text-[32px]">
                  {feature.icon}
                </div>

                {/* النص */}
                <h4 className="text-white text-[16px] font-medium">{feature.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Used */}
      <section className="relative z-50 w-full max-w-[1268px] mx-auto h-[286px] bg-white flex flex-col items-center justify-center px-[27px] py-[72px] mt-[72px]">
        <h2 className="w-full h-[40px] text-[24px] font-bold text-center mb-[72px] text-black">
          Technology Used
        </h2>

        <div className="w-[852px] h-[30px] flex items-center justify-center gap-[44px]">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-[20px] font-extralight text-gray-800">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="my-[72px] flex justify-center items-center gap-4 ">
        <PrimaryButton href={"/contact"} text= "START YOUR PROJECT NOW" />
        <SecondaryButton href={"/ourwork"} text= "CONTUCT US"/>
      </div>
    </>
  );
}
