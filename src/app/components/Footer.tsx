import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import svgPaths from "../../imports/svg-enws1wxon2";
import imgRectangle from "@/assets/be514fd866e5546a105d135dc899bd98fe99b8d8.png";

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] relative overflow-hidden text-white pt-[72px] pb-[36px] px-4 sm:px-6 lg:px-[45px]">
      {/* Background Swirl Image Overlay */}
      <div className="absolute top-0 right-0 w-[35%] h-full pointer-events-none opacity-30">
        <img 
          src={imgRectangle} 
          alt="" 
          className="absolute max-w-none object-cover size-full"
        />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Main Footer Content - equal width columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[36px] lg:gap-8 mb-[64px]">
          
          {/* Column 1: Logo */}
          <div className="flex flex-col gap-4">
            <div className="w-[72px] h-[78px] sm:w-[80px] sm:h-[87px]">
              <svg className="w-full h-full" viewBox="0 0 137 149" fill="none">
                <path d={svgPaths.p3a6d6532} fill="#CEAE5A" />
                <path d={svgPaths.p81b1e50} fill="white" />
                <path d={svgPaths.p37522800} fill="white" />
                <path d={svgPaths.p3fdc0e00} fill="white" />
                <path d={svgPaths.p16afcc80} fill="white" />
                <path d={svgPaths.p2dc71d00} fill="white" />
                <path d={svgPaths.pfc13400} fill="white" />
                <path d={svgPaths.p1af0b600} fill="white" />
                <path d={svgPaths.p380e1800} fill="white" />
                <path d={svgPaths.p30e35f00} fill="#CEAE5A" />
                <path d={svgPaths.p4655980} fill="#CEAE5A" />
                <path d={svgPaths.p229b2900} fill="#CEAE5A" />
                <path d={svgPaths.p3ad585f2} fill="#CEAE5A" />
                <path d={svgPaths.p2a54f072} fill="#CEAE5A" />
                <path d={svgPaths.p2f16b300} fill="#CEAE5A" />
                <path d={svgPaths.p32f76e00} fill="#CEAE5A" />
                <path d={svgPaths.p70fb200} fill="#CEAE5A" />
                <path d={svgPaths.p3a694d00} fill="#CEAE5A" />
                <path d={svgPaths.p3d17c680} fill="#CEAE5A" />
                <path d={svgPaths.p2be8e280} fill="#CEAE5A" />
                <path d={svgPaths.p3d92900} fill="#CEAE5A" />
                <path d={svgPaths.p3e7cb180} fill="#CEAE5A" />
                <path d={svgPaths.p1f7e4300} fill="#CEAE5A" />
              </svg>
            </div>
            <p className="text-white/70 font-sans text-[14px] sm:text-[15px] leading-[22px] max-w-[280px]">
              At EDG Gold & Petroleum, we create lasting value through responsible global trade, building trust across energy and precious metals markets from the UAE to the Middle East and Africa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-[20px]">
            <h4 className="text-[13px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">Quick Links</h4>
            <div className="flex flex-col gap-[10px] text-white/70 font-sans text-[14px] font-medium leading-[22px]">
              <Link to="/" className="hover:text-[#CEAE5A] transition-colors duration-300 whitespace-nowrap">Home</Link>
              <Link to="/about/who-we-are" className="hover:text-[#CEAE5A] transition-colors duration-300 whitespace-nowrap">About Us</Link>
              <Link to="/services/petroleum-products" className="hover:text-[#CEAE5A] transition-colors duration-300 whitespace-nowrap">Business Sectors</Link>
              <Link to="/operations" className="hover:text-[#CEAE5A] transition-colors duration-300 whitespace-nowrap">Operations</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-[20px]">
            <h4 className="text-[13px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">Contact Info</h4>
            <div className="flex flex-col gap-[12px] text-white/70 font-sans text-[14px] leading-[26px]">
              <p>DMCC Business Centre, Level No 1 Jewellery & Gemplex 3, Dubai - UAE</p>
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={svgPaths.p3cd11780} stroke="#CEAE5A" strokeWidth="1.8" strokeMiterlimit="10" />
                      <path d={svgPaths.p3e444ce0} stroke="#CEAE5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="hover:text-[#CEAE5A] transition-colors cursor-pointer">+(1) 1230 452 8759</span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                      <path d={svgPaths.p3cd60880} stroke="#CEAE5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2c4421c0} stroke="#CEAE5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p22ce3880} stroke="#CEAE5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="hover:text-[#CEAE5A] transition-colors cursor-pointer">synox@mail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Stay Tuned */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="text-[13px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">Stay tuned for more updates</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 border-b border-white/40 pb-2.5">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-transparent border-none outline-none text-[13px] sm:text-[14px] font-normal placeholder:text-white/50 w-full min-w-0"
                />
                <div className="flex items-center gap-1.5 cursor-pointer group shrink-0">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] group-hover:text-[#CEAE5A] transition-colors">Subscribe</span>
                  <div className="w-[24px] h-[24px] bg-[#CEAE5A] rounded-full flex items-center justify-center group-hover:bg-[#B89B4F] transition-all shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d={svgPaths.p1e44af80} fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 w-[12px] h-[12px] border border-white/60 rounded-[1px] cursor-pointer shrink-0" />
                <span className="text-[13px] sm:text-[14px] text-white/60 tracking-tight">
                  By signing up, you agree to the <Link to="/privacy" className="text-[#CEAE5A] underline">Privacy Policy</Link>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 text-[13px] sm:text-[14px] text-white/80 font-normal text-center md:text-left tracking-tight">
            <span>© 2025</span>
            <span className="text-[#CEAE5A]">edg-gp.com</span>
            <span>. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center gap-[10px] sm:gap-[15px]">
            {[
              { icon: Facebook, path: svgPaths.pc8a9700 },
              { icon: Instagram, path: svgPaths.p1e304800 },
              { icon: Twitter, path: svgPaths.p3b61c280 },
              { icon: Youtube, path: svgPaths.p22d05b00 }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] bg-white/5 rounded-[6px] flex items-center justify-center hover:bg-[#CEAE5A]/15 hover:border-[#CEAE5A]/30 transition-all border border-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="opacity-80">
                  <path d={social.path} fill="white" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};