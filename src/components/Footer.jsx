"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="w-full bg-white text-[#171717] py-[50px] px-4 sm:px-6 lg:px-[86px] border-t border-gray-200">

      {/* Container الرئيسي */}
      <div className="max-w-[1440px] mx-auto flex flex-wrap  justify-between gap-[20px] md:gap-[30px]">

        {/* العمود 1 - Contact */}
           <div className="flex-[1] md:min-w-[300px] ">
          <h3 className="text-lg font-semibold mb-4">About the Team</h3>
          <p className="text-[#8C8C8C] text-sm leading-relaxed mb-8 ">
            a full design and development team (UI/UX, Frontend, Backend, Flutter). We help you build your digital project from idea to launch and beyond.
          </p>

          <h3 className="text-lg font-semibold mb-4">Our Social Media</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#171717] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#171717] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#171717] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#171717] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* العمود 2 - Services */}
        <div className="flex-[1] md:min-w-[250px]">
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-2 text-[#8C8C8C] text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Mobile Apps</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        {/* العمود 3 - Our Links */}
        <div className="flex-[1] md:min-w-[250px]">
          <h3 className="text-lg font-semibold mb-6 whitespace-nowrap">Our Links</h3>
          <ul className="space-y-2 text-[#8C8C8C] text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/our-work">Our Work</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

      <div className="flex-[1] md:min-w-[250px]">
          <h3 className="text-lg font-semibold mb-6">Contact</h3>
          <p className="text-[#8C8C8C] mb-2 text-sm">Phone: +1 234 567 890</p>
          <p className="text-[#8C8C8C] text-sm">Email: info@aurora.com</p>
        </div>
     
      </div>

      {/* الخط الفاصل السفلي */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-[#8C8C8c] text-sm">
        © 2025 Aurora Software House. All rights reserved.
      </div>
    </footer>
  );
}
