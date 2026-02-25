import React from "react";
import { motion } from "motion/react";
import imgBackground from "@/assets/97d2b00da66f9ec7b8522e7d1981f6759c5d6453.png";
import { ArrowRight } from "lucide-react";

export const GoldHero = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={imgBackground}
        alt="Gold Nuggets"
        className="absolute inset-0 max-w-none object-cover size-full scale-105"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          backgroundImage: "linear-gradient(2.84217e-14deg, rgba(75, 54, 33, 0) 45.746%, rgba(75, 54, 33, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgba(212, 175, 55, 0.5) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" 
        }} 
      />

      <div className="relative z-20 max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-[45px] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[900px]"
        >
          <div className="bg-[#ceae5a] w-fit px-[12px] sm:px-[16px] py-[8px] sm:py-[10px] rounded-[6px] mb-6 sm:mb-8 shadow-lg">
            <span className="font-sans font-semibold text-[13px] sm:text-[16px] text-white uppercase tracking-wider">
              Precious Metals Division
            </span>
          </div>
          
          <h1 className="font-sans font-extralight text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-white leading-[1.05] tracking-[-1.2px] mb-6 drop-shadow-md">
            Connecting Markets. Refining Value. Building Trust.
          </h1>
          
          <p className="font-sans text-[15px] lg:text-[17px] text-white/95 leading-relaxed mb-10 max-w-[700px]">
            Delivering excellence in precious metals trading—from ethical sourcing to global distribution, ensuring integrity at every step.
          </p>
          
          <button className="flex items-center gap-[18px] bg-white hover:bg-[#ceae5a] hover:text-white transition-all px-[32px] py-[16px] rounded-[8px] group shadow-xl">
            <span className="font-sans font-bold text-[15px] text-black group-hover:text-white transition-colors">
              Contact Us
            </span>
            <div className="w-[30px] h-[30px] rounded-full bg-[#ceae5a] flex items-center justify-center group-hover:bg-white transition-colors">
              <ArrowRight className="size-4 text-white group-hover:text-[#ceae5a]" strokeWidth={3} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};