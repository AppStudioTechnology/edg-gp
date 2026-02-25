import React from "react";
import { motion } from "motion/react";
import imgBackground from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";
import { ArrowRight } from "lucide-react";

export const PetroleumHero = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={imgBackground}
        alt="Petroleum Hero"
        className="absolute inset-0 max-w-none object-cover size-full scale-105"
      />
      
      {/* Overlays - navy blue per Figma */}
      <div className="absolute inset-0 z-10 opacity-100" style={{ background: "linear-gradient(180deg, transparent 50.05%, rgba(0,4,53,0.5) 95.045%), linear-gradient(90deg, rgba(0,4,53,0.3) 0%, rgba(0,4,53,0.3) 100%)" }} />

      <div className="relative z-20 max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-[45px] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[900px]"
        >
          <div className="bg-[#ceae5a] w-fit px-[12px] sm:px-[16px] py-[8px] sm:py-[10px] rounded-[6px] mb-6 sm:mb-8">
            <span className="font-sans font-semibold text-[13px] sm:text-[16px] text-white uppercase tracking-wider">
              Energy Division
            </span>
          </div>
          
          <h1 className="font-sans font-extralight text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-white leading-[1.05] tracking-[-1.2px] mb-6">
            Driving Energy Forward with Precision and Integrity
          </h1>
          
          <p className="font-sans text-[15px] md:text-[16px] lg:text-[17px] text-white/90 leading-[1.65] mb-10 max-w-[700px]">
            Delivering world-class petroleum trading solutions—fueling industries, empowering nations, and ensuring excellence across every transaction.
          </p>
          
          <button className="flex items-center gap-[18px] bg-white hover:bg-white/95 text-black px-[30px] py-[12px] rounded-[8px] font-semibold text-[14.9px] font-sans transition-all group">
            <span>Contact Us</span>
            <div className="w-[30px] h-[30px] rounded-full bg-[#ceae5a] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="size-4 text-white" strokeWidth={3} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};