import React from "react";
import { motion } from "motion/react";

const focusItems = [
  "Home to some of the world’s largest oil producers and gold exporters",
  "Rapid urbanization and infrastructure development driving fuel and metal demand",
  "Strategic logistics corridors connecting Asia, Europe, and Africa",
  "Favorable trade ecosystems and evolving regulatory frameworks",
  "Opportunities for local impact, job creation, and community development"
];

export const FocusOnMEA = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px] items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
            Why We Focus on MEA
          </h2>
          
          <div className="flex flex-col gap-4">
            {focusItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 py-4 border-b border-gray-100 last:border-0 items-start group">
                <div className="w-[14px] h-[14px] rounded-full bg-[#ceae5a] mt-1.5 shrink-0 transition-transform group-hover:scale-125" />
                <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#fafafa] p-10 lg:p-[60px] rounded-[10px] border border-gray-100"
        >
          <p className="font-sans text-[15px] lg:text-[17px] text-[#151515] leading-relaxed mb-8 italic">
            "At EDG Gold & Petroleum, our work in the Middle East and Africa is more than business—it’s a commitment to shared prosperity, sustainable trade, and long-term value creation. We don’t just serve these markets—we grow with them."
          </p>
          <div className="w-[60px] h-[2px] bg-[#ceae5a]" />
        </motion.div>
      </div>
    </section>
  );
};
