"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn , FaTiktok} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#171717] py-[72px] px-4 sm:px-6 lg:px-[86px] border-t border-gray-200">
      {/* الكونتينر الرئيسي */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[47px]">

        {/* العمود 1 - About + Social */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">About the Team</h3>
            <p className="text-[#8C8C8C] text-sm leading-relaxed mb-8">
              A full design and development team (UI/UX, Frontend, Backend, Flutter). 
              We help you build your digital project from idea to launch and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Social Media</h3>
            <div className="flex items-center gap-4 ">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#171717] hover:text-[#171717] transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* العمود 2 - Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-2 text-[#8C8C8C] text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Mobile Apps</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        {/* العمود 3 - Our Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 whitespace-nowrap">Our Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Our Work", href: "/our-work" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="inline-block text-[#8C8C8C] hover:text-[#525252] transition-all duration-300 transform hover:scale-[1.05]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود 4 - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact</h3>
          <p className="text-[#8C8C8C] mb-2 text-sm">Phone: +1 234 567 890</p>
          <p className="text-[#8C8C8C] text-sm">Email: info@aurora.com</p>
        </div>
      </div>

      {/* الخط الفاصل السفلي */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-[#8C8C8C] text-sm">
        © 2025 Aurora Software House. All rights reserved.
      </div>
    </footer>
  );
}
