"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(null);

  const links = [
    "HOME",
    "SERVICES",
    "OUR WORK",
    "PROJECTS",
    "ABOUT US",
    "CONTACT US",
  ];

  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-24 py-6 border-b border-[#1E1E1E] relative z-10">
      {/* الشعار */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Aurora Logo" width={101} height={20} />
      </div>

      {/* الروابط */}
      <ul className="flex items-center gap-6 text-[14px] font-medium tracking-wider">
        {links.map((item, i) => (
          <li key={i} className="relative">
            <button
              onClick={() => setActive(i)}
              className={`
                relative inline-flex items-center justify-center px-5 py-2 rounded-full overflow-hidden 
                transition-all duration-300 font-medium text-white
              `}
            >
              {/* البوردر المتدرج */}
              <span
                className="absolute inset-0 rounded-full p-[1px] bg-[linear-gradient(145deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(0,0,0,0)_100%)]"
              >
                {/* الخلفية الداخلية */}
                <span
                  className={`absolute inset-[1px] rounded-full transition-all duration-300 ${
                    active === i
                      ? "bg-gradient-to-r from-[#BBFF00] to-[#10A700]" // الخلفية المتدرجة عند الضغط
                      : "bg-black"
                  }`}
                ></span>
              </span>

              {/* النص */}
              <span className="relative z-10">{item}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
