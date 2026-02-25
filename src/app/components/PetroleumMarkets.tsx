import React from "react";
import { motion } from "motion/react";
import imgRefinery from "@/assets/4320c3d682274c331434f0c4625d9027139acb24.png";
import { ArrowRight } from "lucide-react";

export const PetroleumMarkets = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[45px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
              Bridging Markets. <br /> Fueling Prosperity.
            </h2>
          </div>
          <p className="font-sans font-medium text-[15px] lg:text-[17px] text-black max-w-[998px] leading-relaxed tracking-tight">
            At EDG Gold & Petroleum, we operate at the heart of global trade—where opportunity meets expertise. Our business is built on a foundation of trust, agility, and strategic insight, enabling us to navigate the complexities of international commodity markets with confidence and precision.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-start">
          <div className="w-full lg:w-[827px] flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                With an extensive global footprint and a well-integrated trading infrastructure, we actively engage in the sourcing, trading, and distribution of oil, petroleum products, and precious metals. From energy corridors to financial capitals, our reach extends across critical trade routes and emerging markets—empowering us to anticipate trends, respond swiftly to market fluctuations, and deliver value where it matters most.
              </p>
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                Our physical trading operations are anchored in strategically chosen geographies, allowing us to optimize supply chains, reduce transactional friction, and enhance pricing efficiency. Whether securing spot deals or managing long-term supply contracts, we bring resilience and reliability to every transaction.
              </p>
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                Driven by market intelligence and guided by a deep understanding of commodity dynamics, EDG Gold & Petroleum continues to be a trusted partner for governments, institutions, and investors seeking to access high-value opportunities in energy and precious metals.
              </p>
            </div>
            
            <div className="bg-[#fafafa] border border-gray-100 p-8 lg:p-10 rounded-[10px]">
              <p className="font-sans font-medium text-[15px] lg:text-[17px] text-[#555] leading-relaxed tracking-tight">
                We don’t just trade—we build bridges between demand and supply, markets and momentum, vision and value.
              </p>
            </div>

            <button className="flex items-center gap-[18px] bg-[#ceae5a] hover:bg-[#b89b4f] text-white px-[26px] py-[14px] rounded-[8px] font-bold text-[14.6px] transition-all group w-fit">
              Contact Us
              <div className="w-[30px] h-[30px] rounded-full bg-[#0b2b3f] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="size-3.5 text-white" strokeWidth={3} />
              </div>
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 rounded-[10px] overflow-hidden shadow-2xl h-[360px] sm:h-[480px] lg:h-[786px]"
          >
            <img src={imgRefinery} alt="Refinery at sunset" className="max-w-none w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};