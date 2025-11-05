
"use client";
import {
  Search,
  Code2,
  ClipboardCheck,
  Rocket,
  Palette,
} from "lucide-react";

export default function JourneySection() {
  const steps = [
    {
      title: "DISCOVERY",
      text: "A session to understand your idea, the goals of your project, and the needs of your audience. We identify the challenges and outline a clear plan.",
      icon: <Search className="text-[#FFAE42] w-[80px] h-[80px]" />,
      align: "right",
    },
    {
      title: "PLANNING & DESIGN",
      text: "Drawing User Flow and Wireframes. UI/UX design reflects the identity of your project and delivers an easy experience for the user.",
      icon: <Palette className="text-[#00bfff] w-[80px] h-[80px]" />,
      align: "left",
    },
    {
      title: "DEVELOPMENT",
      text: "Frontend and Backend programming. Flutter app development. Clean and scalable code.",
      icon: <Code2 className="text-gray-100 w-[80px] h-[80px]" />,
      align: "right",
    },
    {
      title: "TESTING & QA",
      text: "We test all the details: user experience, performance, compatibility with devices. We fix any issues before launch.",
      icon: <ClipboardCheck className="text-[#FF6F91] w-[80px] h-[80px]" />,
      align: "left",
    },
    {
      title: "LAUNCH",
      text: "The live project is launched. Monitoring performance during the initial period to ensure smoothness.",
      icon: <Rocket className="text-[#6C63FF] w-[80px] h-[80px]" />,
      align: "right",
    },
  ];

  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-between py-5 overflow-hidden">
      {/* الخلفية */}
      <div
        className="absolute inset-0 bg-transparent -z-10"
        style={{
          backgroundImage: "url('/imghome5.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-full flex mb-[40px] justify-${
            step.align === "left" ? "start" : "end"
          }`}
        >
          <div
            className={`
              flex items-center gap-[20px] 
              w-[352px] h-[144px] 
              md:w-[90%] md:max-w-[951px] md:h-[360px] 
              rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg
              ${step.align === "left"
                ? "pl-[20px] pr-[20px] pt-[20px] pb-[20px] md:pl-[85px] md:pr-[40px] md:pt-[40px] md:pb-[40px]"
                : "pl-[20px] pr-[20px] pt-[20px] pb-[20px] md:pr-[85px] md:pl-[40px] md:pt-[40px] md:pb-[40px]"
              }
            `}
          >
            {step.align === "left" && (
              <div className="flex items-center justify-start w-[50px] md:w-[152px] h-[36px] md:h-[160px] drop-shadow-lg">
                {step.icon}
              </div>
            )}

            <div className="flex flex-col justify-center text-white max-w-[352px] md:max-w-[634px] min-h-[144px] md:min-h-[280px]">
              <h3 className="text-[16px] md:text-[40px] font-bold mb-2 md:mb-4">
                {step.title}
              </h3>
              <h4 className="text-[12px] md:text-[24px] leading-[16px] md:leading-[28px] font-normal !normal-case">
                {step.text}
              </h4>
            </div>

            {step.align === "right" && (
              <div className="flex items-center justify-end w-[50px] md:w-[152px] h-[36px] md:h-[160px] drop-shadow-lg">
                {step.icon}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
