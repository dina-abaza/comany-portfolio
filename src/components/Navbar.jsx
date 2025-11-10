"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    {
      name: "SERVICES",
      path: "/services",
      dropdown: [
        { name: "Website Development", path: "/services?filter=website" },
        { name: "Mobile Application", path: "/services?filter=mobile" },
        { name: "UI/UX Design", path: "/services?filter=uiux" },
        { name: "Maintenance & Support", path: "/services?filter=maintenance" },
      ],
    },
    { name: "OUR WORK", path: "/ourwork" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ];

  // حذف HOME من نسخة التابلت
  const tabletLinks = links.filter((link) => link.name !== "HOME");

  return (
    <nav className="w-full flex flex-col items-center mt-10 relative z-10">
      {/* ===== Desktop Navbar (≥881px) ===== */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-[965px] px-4 py-2 rounded-full shadow-4xl bg-black/40 backdrop-blur-md border border-white/30">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={() => setActive(null)}>
            <img src="/logo/aurora.svg" alt="Aurora Logo" className="w-[130px] h-auto" />
          </Link>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-4 text-[14px] font-medium tracking-wider">
          {links.map((link, i) => (
            <li key={i} className="relative">
              <Link
                href={link.path || "#"}
                onClick={() => setActive(i)}
                className={`flex items-center justify-center gap-[8px] w-[140px] h-[44px] rounded-full transition-all duration-300 ${
                  active === i ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <FaChevronDown
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === i ? null : i);
                    }}
                    className={`text-[9px] transition-transform duration-300 cursor-pointer ${
                      openDropdown === i ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && openDropdown === i && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[300px] bg-black/20 backdrop-blur-md rounded-[24px] flex flex-col p-2 shadow-lg z-20"
                  >
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.path}
                         onClick={() => setOpenDropdown(null)}
                        className="w-[240px] h-[40px] mx-auto mb-2 last:mb-0 rounded-full flex items-center justify-center text-white bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Tablet Navbar (880px - 768px) ===== */}
      <div className="hidden md:flex lg:hidden flex-col items-center w-full px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" onClick={() => setActive(null)}>
            <img src="/logo/aurora.svg" alt="Aurora Logo" className="w-[150px] mb-8" />
          </Link>
        </motion.div>

        {/* Links */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center flex-wrap gap-8 text-white/80 text-[14px] font-medium"
        >
          {tabletLinks.map((link, i) => (
            <li key={i} className="relative">
              <div className="flex items-center gap-2">
                <Link
                  href={link.path || "#"}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-[6px] hover:text-white transition-colors duration-300 ${
                    active === i ? "text-white" : ""
                  }`}
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <FaChevronDown
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === i ? null : i);
                    }}
                    className={`text-[9px] cursor-pointer transition-transform duration-300 ${
                      openDropdown === i ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && openDropdown === i && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "top" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[280px] bg-black/30 backdrop-blur-md rounded-[20px] flex flex-col p-2 shadow-lg z-20"
                  >
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className="w-[230px] h-[38px] mx-auto mb-2 last:mb-0 rounded-full flex items-center justify-center text-white bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* ===== Mobile Navbar (≤767px) ===== */}
      <div className="flex md:hidden items-center justify-between w-full px-6 py-3">
        <Link href="/" onClick={() => setActive(null)}>
          <img src="/logo/aurora.svg" alt="Aurora Logo" className="w-[110px]" />
        </Link>

        <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white">
          {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* ===== Mobile Slide Menu ===== */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-black/60 backdrop-blur-md z-30 p-6 flex flex-col gap-3"
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setMobileMenu(false)} className="text-white text-2xl">
                <FaTimes />
              </button>
            </div>

            {links.map((link, i) => (
              <div key={i} className="w-full flex flex-col gap-2">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                      className="w-full flex justify-between items-center text-white font-medium py-2 px-3 rounded-full hover:bg-white/10 transition-colors"
                    >
                      {link.name}
                      <FaChevronDown
                        className={`${
                          openDropdown === i ? "rotate-180" : ""
                        } transition-transform duration-300`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-2 mt-1 pl-6"
                        >
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.path}
                              onClick={() => setMobileMenu(false)}
                              className="block text-white/80 hover:text-white transition-colors py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenu(false)}
                    className="block w-full text-white py-2 px-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
