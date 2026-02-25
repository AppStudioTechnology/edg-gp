import React from "react";
import { motion } from "motion/react";
import imgSector from "@/assets/9417539659173894da568840bbb5db88666ae99c.png";

const investments = [
  "Integrated refining and processing: Advanced gold refinement reaching high levels of purity and quality.",
  "Tailored logistics solutions: Leveraging global networks for secure and efficient transportation across continents.",
  "Reliable and resilient sourcing: Ensuring a secure and ethical pipeline from mines to market.",
  "Financial and strategic partnerships: Strategic alliances across MENA, Africa, and beyond.",
  "Value-added products: Refining gold and silver bars into investment-grade products for global traders and investors."
];

export const GoldLogistics = () => {
  return (
    <section className="bg-[#fafafa] py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px] items-center">
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
            Logistics & Infrastructure Investments
          </h2>
          
          <div className="flex flex-col gap-6">
            {investments.map((item, idx) => (
              <div key={idx} className="flex gap-6 py-6 border-b border-gray-200 last:border-0 items-start">
                <div className="w-[12px] h-[12px] rounded-full bg-[#ceae5a] mt-2 shrink-0" />
                <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Large Image with Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[320px] sm:h-[420px] lg:h-[800px] rounded-[15px] overflow-hidden shadow-2xl group"
        >
          <img src={imgSector} alt="Precious Metals Sector" className="absolute max-w-none object-cover size-full transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-[40px] sm:left-[40px] lg:bottom-[60px] lg:left-[60px] z-10">
            <h3 className="font-sans font-bold text-[20px] lg:text-[24px] text-white">
              Precious Metals Sector<span className="text-[#ceae5a]">.</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};