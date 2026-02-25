import React from "react";
import { motion } from "motion/react";
import imgChart from "@/assets/37962e12eeda696ce8aca39db3644bfe6f2528c3.png";
import { ArrowRight } from "lucide-react";

export const GoldDynamics = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px] items-start">
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
            Gold Trading & Precious Market Dynamics
          </h2>
          
          <div className="flex flex-col gap-8">
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
              EDG-GP DMCC specializes in navigating the complex dynamics of global precious metal markets. Our operations are built on three main pillars: transparency, efficiency, and deep understanding of the market forces that define the international bullion trade.
            </p>
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
              Our gold supply chain is managed across diverse regions, where we provide refined bullion and dore products to satisfy escalating demands across sectors including finance, jewelry, and luxury markets.
            </p>
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed italic">
              As the gold market continues to evolve towards greater accountability, EDG-GP DMCC remains committed to ensuring every transaction is backed by high-standard compliance and market insight.
            </p>
          </div>
          
          <button className="flex items-center gap-[18px] bg-[#ceae5a] hover:bg-[#b89b4f] text-white px-[26px] py-[14px] rounded-[8px] font-bold text-[14.6px] transition-all group w-fit">
            Explore Details
            <div className="w-[30px] h-[30px] rounded-full bg-[#0b2b3f] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="size-3.5 text-white" strokeWidth={3} />
            </div>
          </button>
        </motion.div>

        {/* Right: Info and Chart */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div className="border-l-2 border-[#ceae5a] pl-8">
            <p className="font-sans text-[15px] lg:text-[17px] text-[#151515] leading-relaxed font-medium">
              At EDG Gold, we specialize in the sourcing, trading, and distribution of gold and precious metals across key global markets. Our operations are built on trust, transparency, and a deep understanding of the nuances that define the international bullion trade.
            </p>
          </div>
          
          <div className="relative rounded-[15px] overflow-hidden shadow-xl aspect-[1.6]">
            <img src={imgChart} alt="Market Dynamics Chart" className="max-w-none w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};