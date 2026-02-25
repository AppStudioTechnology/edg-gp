import React from "react";
import { motion } from "motion/react";

const stats = [
  { value: "$2.5B +", label: "Trading Volume", sub: "Annualized precious metals trade volume" },
  { value: "150 +", label: "Global Partners", sub: "Active networks in Asia, Africa and Europe" },
  { value: "99.9 %", label: "Purity Standard", sub: "LBMA quality-compliant refinement standard" },
  { value: "24/7", label: "Market Access", sub: "Around-the-clock trading and support" }
];

export const GoldStats = () => {
  return (
    <section className="bg-[#0b0b0b] py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px] w-full mb-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 sm:p-10 lg:p-[60px] flex flex-col items-center text-center gap-4 rounded-[10px] group hover:bg-[#222] transition-colors"
            >
              <div className="font-sans font-extralight text-[28px] sm:text-[34px] lg:text-[42px] text-[#ceae5a] leading-none mb-2 tracking-[-1px]">
                {stat.value}
              </div>
              <div className="font-sans font-bold text-[14px] lg:text-[15px] text-white">
                {stat.label}
              </div>
              <p className="font-sans text-[15px] text-white/50 leading-relaxed max-w-[200px]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
        
        <p className="font-sans text-[17px] text-white/40 text-center max-w-[800px] leading-relaxed italic">
          Trust by governments, financial institutions, and professional partners worldwide, ensuring growth and shaping the future markets of gold.
        </p>
      </div>
    </section>
  );
};
