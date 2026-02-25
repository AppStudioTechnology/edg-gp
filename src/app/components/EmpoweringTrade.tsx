import React from "react";
import { motion } from "motion/react";
import imgTanks from "@/assets/ff209826221c5d435606888e985201bc4c5f292c.png";
import { ArrowRight } from "lucide-react";

export const EmpoweringTrade = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px] items-center">
        
        {/* Left: Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[893/637] rounded-[10px] overflow-hidden shadow-2xl"
        >
          <img 
            src={imgTanks}
            alt="Oil Storage Tanks at Sunset" 
            className="absolute max-w-none object-cover size-full"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6">
            <span className="font-sans font-medium text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
              Our Services & Capabilities
            </span>
            <div className="w-full h-px bg-gray-200" />
          </div>
          
          <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-[#151515] leading-[1.1] tracking-[-1px]">
            Empowering Trade. Delivering Value. Fueling Progress.
          </h2>
          
          <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed max-w-[806px]">
            At EDG Gold & Petroleum, our services are designed to meet the dynamic needs of today’s global markets. With a strong foundation in commodity trading and an unwavering commitment to excellence, we offer tailored solutions that span both the energy and precious metals sectors. Whether serving national governments, large enterprises, or strategic partners, we deliver performance with purpose and precision.
          </p>
          
          <button className="flex items-center gap-[18px] bg-[#ceae5a] hover:bg-[#b89b4f] text-white px-[26px] py-[14px] rounded-[8px] font-bold text-[14.6px] transition-all group w-fit">
            Read More
            <div className="w-[30px] h-[30px] rounded-full bg-[#0b2b3f] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="size-3.5 text-white" strokeWidth={3} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};