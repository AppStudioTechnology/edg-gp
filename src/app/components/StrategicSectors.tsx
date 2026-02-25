import React from "react";
import { motion } from "motion/react";
import imgWorkers from "@/assets/ff209826221c5d435606888e985201bc4c5f292c.png";
import { Droplets, Coins } from "lucide-react";

export const StrategicSectors = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full h-[400px] lg:h-[500px]">
        <img 
          src={imgWorkers} 
          alt="Workers on site" 
          className="absolute max-w-none object-cover size-full"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[700px]"
          >
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-white leading-[1.1] tracking-[-1px] mb-6">
              Bridging Two Strategic Sectors
            </h2>
            <p className="font-sans text-[15px] lg:text-[17px] text-white/90 leading-relaxed">
              At EDG Gold & Petroleum, our business model is truly unique—seamlessly integrating two of the most strategic sectors in the global marketplace.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Below */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px] py-[56px] lg:py-[72px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px]">
        {/* Left: Icons Cards */}
        <div className="flex flex-col sm:flex-row gap-[30px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-white border border-[#ceae5a]/20 rounded-[15px] p-8 lg:p-10 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-[84px] h-[84px] rounded-full bg-[#ceae5a]/10 flex items-center justify-center text-[#ceae5a]">
              <Droplets className="size-10" />
            </div>
            <h3 className="font-sans font-bold text-[16px] lg:text-[18px] text-[#151515]">
              Petroleum Products
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 bg-white border border-[#ceae5a]/20 rounded-[15px] p-8 lg:p-10 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-[84px] h-[84px] rounded-full bg-[#ceae5a]/10 flex items-center justify-center text-[#ceae5a]">
              <Coins className="size-10" />
            </div>
            <h3 className="font-sans font-bold text-[16px] lg:text-[18px] text-[#151515]">
              Precious Metals led by gold
            </h3>
          </motion.div>
        </div>

        {/* Right: Explanatory Text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
            By combining these two critical industries into a unified commercial framework, we achieve exceptional risk management, optimized capital returns, and resilient market positioning. This integrated model enables us to balance sector-specific fluctuations to range from direct fuel supplies, and deliver sustainable growth for our stakeholders.
          </p>
          <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
            Executing such a model demands a high level of professionalism and operational discipline. Every measure, from sourcing to delivery, is designed with most rigorous quality, compliance, and efficiency standards. Beyond trading, our focus extends to strategic investments in infrastructure, logistics, and value-added industries connected to both gold and petroleum. These investments in turn allow us to multiply and scale our successful models across multiple regions and continents.
          </p>
        </motion.div>
      </div>
    </section>
  );
};