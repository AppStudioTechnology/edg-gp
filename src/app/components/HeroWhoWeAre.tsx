import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import imgHero from "@/assets/hero.png";
import imgDecor from "@/assets/a3dece847acdf1321aff9e051494b49b5b4ae175.png";

export const HeroWhoWeAre = () => {
  return (
    <section className="relative h-[360px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={imgHero}
        alt="Who We Are Hero"
        className="absolute inset-0 max-w-none object-cover size-full scale-105"
      />
      
      {/* Overlays */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          backgroundImage: "linear-gradient(270deg, rgba(206, 174, 90, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(1.42109e-14deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgb(11, 20, 32) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.6) 25%, rgba(11, 43, 63, 0) 100%)" 
        }} 
      />

      <img 
        src={imgDecor} 
        alt="" 
        className="absolute left-[10%] top-[40px] h-[724px] z-10 opacity-50 max-w-none hidden lg:block"
      />

      <div className="relative z-20 max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-[45px] flex flex-col justify-end pb-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-sans font-extralight text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-white leading-[1.05] tracking-[-1.2px] mb-8">
            Who We Are
          </h1>
          
          <div className="flex items-center gap-[10px] pt-8 border-t border-white/20">
            <Link to="/" className="font-sans text-[12px] text-white/60 uppercase tracking-[0.24px] hover:text-[#ceae5a] transition-colors">
              Home Page
            </Link>
            <span className="text-white/60 text-[12px] uppercase">·</span>
            <Link to="/about" className="font-sans text-[12px] text-white/60 uppercase tracking-[0.24px] hover:text-[#ceae5a] transition-colors">
              About Us
            </Link>
            <span className="text-white/60 text-[12px] uppercase">·</span>
            <span className="font-sans text-[12px] text-[#ceae5a] uppercase tracking-[0.24px]">
              Who We Are
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
