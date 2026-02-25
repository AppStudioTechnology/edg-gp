import React from "react";
import { motion } from "motion/react";
import imgGoldBars from "@/assets/84931d3a55c6572e58b6cf68823bfd549e51110b.png";

export const GoldIntegrity = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px] items-center">
        {/* Left: Gold Bars Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[300px] sm:h-[400px] lg:h-[700px] rounded-[15px] overflow-hidden shadow-2xl"
        >
          <img src={imgGoldBars} alt="Refined Gold Bars" className="absolute max-w-none object-cover size-full" />
          <div className="absolute inset-0 bg-black/5" />
        </motion.div>

        {/* Right: Detailed Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[#ceae5a] text-[14px] uppercase tracking-widest font-bold">
              ETHICAL STANDARDS
            </span>
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
              Gold Trading with Integrity and Precision
            </h2>
          </div>
          
          <div className="flex flex-col gap-8">
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
              At EDG Gold & Petroleum, we are dedicated to maintaining high standards of integrity and ethics in the precious metals trade. We understand that every transaction carries weight—not just in value, but in the trust our clients place in us.
            </p>
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
              From our physical sourcing operations across diverse regions to our partnerships with global refineries and distributors, we prioritize quality and precision at every turn. We ensure that our gold satisfies the highest industry standards, and each transaction is handled with the utmost transparency and professionalism.
            </p>
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
              By bridging mines to global markets through our integrated networks, we provide our clients with access to a consistent, secure, and reliable supply of gold bullion. We don't just move metal—we manage trust and reliability across global borders.
            </p>
          </div>
          
          <div className="border-t border-gray-100 pt-8">
            <p className="font-sans font-bold text-[18px] lg:text-[20px] text-black leading-tight italic">
              "From the mine to the market—we trade with integrity, fueled by value and vision."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};