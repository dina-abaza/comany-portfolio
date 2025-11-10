"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { ourworkData } from "@/data/ourworkdata";
import { FaUsers, FaClock, FaPlay, FaPause } from "react-icons/fa";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { useState, useRef } from "react";

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
      {/* Showcase Section */}
      <section className="w-full flex justify-center bg-[#0C0C0C] py-[60px] px-[20px]">
        <div className="w-full lg:max-w-[1550px] mx-auto flex flex-col gap-[20px] md:gap-[44px]">

          {/* Row 1: Main Image & Video */}
          <div className="flex justify-between items-center gap-2 md:gap-6">
            {/* Main Image */}
            <div className="w-[190px] sm:w-[280px] md:w-[608px] h-[193px] sm:h-[300px] md:h-[500px] rounded-[16px] overflow-hidden">
              <Image
                src={project.mainImage}
                alt={project.title}
                width={608}
                height={626}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video */}
            <div className="w-[190px] sm:w-[280px] md:w-[608px] h-[193px] sm:h-[300px] md:h-[500px] rounded-[16px] overflow-hidden bg-black relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="https://www.w3schools.com/html/mov_bbb.mp4" // مؤقت للتجربة
                loop
                muted
                playsInline
              />
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

          {/* Row 2: Sub Images */}
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

          {/* Row 3: Project Info */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8 items-center px-4 py-8 mx-auto rounded-[16px]">
            
            {/* Title & Description */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-[6px] uppercase tracking-wide">
                {project.title}{" "}
                <span className="text-[12px] sm:text-[14px] md:text-[18px] font-extralight text-gray-200 ml-2">
                  (case study)
                </span>
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-extralight text-gray-200">
                {project.title}
              </p>
            </div>

            {/* Time & Team Members */}
            <div className="flex justify-center lg:justify-between items-center gap-6 lg:gap-8 w-full flex-nowrap flex-row">
              {/* Time */}
              <div className="bg-white rounded-[16px] px-6 py-4 flex flex-col items-center justify-center gap-2 w-[170px] sm:w-[200px] md:w-[250px] h-[120px] shadow-md">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] text-[#0C0C0C] font-medium mb-1 whitespace-nowrap">
                  Project time
                </h3>
                <div className="flex items-center gap-2 text-[#0C0C0C]">
                  <FaClock size={20} />
                  <p className="text-[12px] sm:text-[14px] md:text-[16px]">{project.time}</p>
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-white rounded-[16px] px-6 py-4 flex flex-col items-center justify-center gap-2 w-[170px] sm:w-[200px] md:w-[250px] h-[120px] shadow-md">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] text-[#0C0C0C] font-medium mb-1 whitespace-nowrap">
                  Team members
                </h3>
                <div className="flex items-center gap-2 text-[#0C0C0C]">
                  <FaUsers size={20} />
                  <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                    {project.members} Members
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
              <PrimaryButton href={"/contact"} text={"start your project now"}/>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="w-full flex justify-center bg-[#0C0C0C] py-[80px] px-[20px]">
        <div className="w-full  mx-auto flex flex-col md:flex-row justify-between items-stretch gap-[30px] md:gap-[44px]">

          {/* Problem Statement */}
          <div className="flex-1 bg-white rounded-[16px] flex flex-col p-[32px] min-h-[420px]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] mb-[20px]">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[73px] md:h-[73px] bg-[#E53935] rounded-full flex items-center justify-center">
                <span className="text-white text-[20px] md:text-[36px] font-bold">!</span>
              </div>
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#0C0C0C] leading-[1.2] whitespace-nowrap">
                Problem Statement
              </h3>
            </div>
            <p className="text-[20px] md:text-[24px] text-[#444] font-light leading-[32px] text-center max-w-[556px] mx-auto normal-case">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="flex-1 bg-white rounded-[16px] flex flex-col p-[32px] min-h-[420px]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] mb-[20px]">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[73px] md:h-[73px] bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[20px] md:text-[36px] font-bold">✓</span>
              </div>
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#0C0C0C] leading-[1.2] whitespace-nowrap">
                Solution
              </h3>
            </div>
            <p className="text-[20px] md:text-[24px] text-[#444] font-light leading-[32px] text-center max-w-[556px] mx-auto normal-case">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full flex justify-center bg-white py-[80px] px-[20px]">
        <div className="w-full mx-auto flex flex-col items-center">

          {/* Title */}
          <h2 className="text-[24px] md:text-[40px] font-semibold text-black text-center mb-[40px] md:mb-[72px]">
            {project.keyFeaturesTitle || "Key Features"}
          </h2>

          {/* Features Boxes */}
          <div className="w-full flex flex-col sm:flex-col md:flex-row justify-center md:justify-between items-center gap-[20px] md:gap-[10px] lg:gap-[40px]">
            {project.keyFeatures?.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="w-[250px] h-[85px] sm:w-[300px] sm:h-[100px] md:w-[400px] md:h-[140px] bg-[#0C0C0C] rounded-[12px] flex items-center px-[20px] md:px-[32px] gap-[20px] md:gap-[32px]"
              >
                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[48px] md:h-[48px] flex items-center justify-center text-white text-[24px] sm:text-[28px] md:text-[32px]">
                  {feature.icon}
                </div>
                <h4 className="text-white text-[14px] sm:text-[16px] md:text-[16px] font-medium text-center whitespace-nowrap">
                  {feature.text}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Used */}
      <section className="relative z-50 w-full mx-auto h-[286px] bg-white flex flex-col items-center justify-center px-[40px] md:px-[27px] py-[40px] md:py-[72px] mt-[40px] md:mt-[72px]">
        <h2 className="w-full text-[16px] sm:text-[24px] md:text-[24px] lg:text-[30px] font-bold text-center mb-[24px] sm:mb-[40px] md:mb-[72px] text-black">
          Technology Used
        </h2>

        <div className="flex items-center justify-center flex-wrap gap-[12px] sm:gap-[20px] md:gap-[40px] lg:gap-[44px]">
          {project.technologies.map((tech, index) => (
            <span key={index} className=" text-[14px] sm:text-[18px] md:text-[20px] font-extralight text-gray-800">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="my-[40px] md:my-[72px] flex flex-col sm:flex-row md:flex-row justify-center items-center gap-4">
        <PrimaryButton href={"/contact"} text={"start your project now"}/>
        <SecondaryButton href={"/ourwork"} text={"see all projects"}/>
      </div>
    </>
  );
}
