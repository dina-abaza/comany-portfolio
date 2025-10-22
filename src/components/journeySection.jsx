"use client";
import {
  Search,        // العدسة
  PencilRuler,   // للتصميم والتخطيط
  Code2,         // كود </>
  ClipboardCheck, // النوتة بالعدسة الصغيرة
  Rocket,        // الصاروخ
  Palette,       // أيقونة بالألوان للرسم
} from "lucide-react";


export default function JourneySection() {
  const steps = [
    {
      title: "DISCOVERY",
      text: "A SESSION TO UNDERSTAND YOUR IDEA, THE GOALS OF YOUR PROJECT, AND THE NEEDS OF YOUR AUDIENCE. WE IDENTIFY THE CHALLENGES AND OUTLINE A CLEAR PLAN.",
      icon: <Search className="text-[#FFAE42] w-[80px] h-[80px]" />,
      align: "left",
    },
    {
      title: "PLANNING & DESIGN",
      text: "Drawing User Flow and Wireframes. UI/UX design reflects the identity of your project and delivers an easy experience for the user.",
      icon: <Palette className="text-[#00bfff] w-[80px] h-[80px]" />, // ← أيقونة الرسم الملونة
      align: "right",
    },
    {
      title: "DEVELOPMENT",
      text: "Frontend and Backend programming. Flutter app development. Clean and scalable code.",
      icon: <Code2 className="text-gray-100 w-[80px] h-[80px]" />,
      align: "left",
    },
    {
      title: "TESTING & QA",
      text: "We test all the details: user experience, performance, compatibility with devices. We fix any issues before launch.",
      icon: <ClipboardCheck className="text-[#FF6F91] w-[80px] h-[80px]" />,
      align: "right",
    },
    {
      title: "LAUNCH",
      text: "The live project is launched. Monitoring performance during the initial period to ensure smoothness.",
      icon: <Rocket className="text-[#6C63FF] w-[80px] h-[80px]" />,
      align: "left",
    },
  ];

  return (
    <div className="relative w-[1440px] mx-auto flex flex-col items-center justify-between py-10 overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0 bg-transparent -z-10" 
       style={{
    backgroundImage: "url('/imgHome5.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
      />

      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-full flex mb-[60px] ${
            step.align === "left"
              ? "justify-start pl-[86px]"
              : "justify-end pr-[86px]"
          }`}
        >
          {/* ديف الجلاس */}
          <div className="w-[951px] h-[360px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center gap-[40px] p-[40px] shadow-lg">
            {/* الأيقونة */}
            <div className="w-[152px] h-[160px] flex items-center justify-center text-[80px] drop-shadow-lg">
              {step.icon}
            </div>

            {/* المحتوى */}
            <div className="w-[634px] h-[280px] flex flex-col justify-center text-white">
              <h3 className="text-[40px] font-bold mb-4">{step.title}</h3>
              <h4 className="text-[24px] leading-[28px] normal-case font-normal">{step.text}</h4>
            </div>
          </div>
        </div>
      ))}
    

    </div>
  );
}
