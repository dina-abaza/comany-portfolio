"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState(null);

  const links = [
    { name: "HOME" },
    {
      name: "SERVICES",
      dropdown: [
        "Website Development",
        "Mobile Application",
        "UI/UX Design",
        "Maintenance & Support",
      ],
    },
    { name: "OUR WORK" },
    { name: "PROJECTS" },
    { name: "ABOUT US" },
    { name: "CONTACT US" },
  ];

  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-24 py-6 border-b border-[#1E1E1E] relative z-10">
      {/* الشعار */}
      <div>
        <img src="/logo.png" alt="Aurora Logo" width={101} height={20} />
      </div>

      {/* الروابط */}
      <ul className="flex items-center gap-6 text-[14px] font-medium tracking-wider">
        {links.map((link, i) => (
          <li key={i} className="relative">
            {/* Wrapper لكل زر + dropdown */}
            <div className="relative group">
              {/* الزر الرئيسي */}
              <button
                onClick={() => setActive(i)}
                className={`relative items-center justify-center px-5 py-2 rounded-full transition-all duration-300 font-medium text-white`}
              >
                {/* البوردر المتدرج */}
                <span className="absolute inset-0 rounded-full p-[1px] bg-[linear-gradient(145deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(0,0,0,0)_100%)]">

                  <span
                    className={`absolute inset-[1px] rounded-full transition-all duration-300 ${
                      active === i
                        ? "bg-gradient-to-r from-[#88E600] to-[#10A700]"
                        : "bg-black"
                    }`}
                  ></span>
                </span>

                {/* النص + السهم */}
                <span className="relative z-10 flex items-center gap-1">
                  {link.name}
                  {link.dropdown && <FaChevronDown className="text-[10px]" />}
                </span>
              </button>

              {/* Dropdown */}
              {link.dropdown && (
         <div
             className="absolute top-full left-0 mt-2 w-56
             bg-black/20 backdrop-blur-md rounded-xl
             flex flex-col p-2 shadow-lg
             opacity-0 group-hover:opacity-100
             transition-all duration-300 z-20"
             >
            {link.dropdown.map((item, idx) => (
              <button key={idx}
                 className="relative px-4 py-2 mb-2 last:mb-0
                 rounded-full text-white font-medium
                 bg-white/5 backdrop-blur-sm border border-white/30
                 hover:bg-white/10 transition-colors duration-300" >
                   {item}
                </button>
              ))}
          </div>

              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
