import React from "react";
import { motion } from "motion/react";
import imgGoldRocks from "@/assets/96e6d19fc8fbe9bfb35102578662d70ac9eecca8.png";
import { ArrowRight } from "lucide-react";

export const GoldOverview = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-gray-200 pb-6 mb-12">
          <span className="font-sans text-[13px] text-black font-medium tracking-[0.28px] uppercase">
            Connecting Markets. Refining Value. Building Trust.
          </span>
          <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            [ Empowering Trade. ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-start">
          {/* Left: Images */}
          <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-[38px] items-start">
            {/* Badge Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 lg:w-[338px] h-[200px] sm:h-[260px] lg:h-[305px] rounded-[10px] bg-[#ffffef] flex items-center justify-center border border-[#ceae5a]/20 shadow-sm"
            >
              <div className="text-center p-8">
                <div className="font-sans font-extralight text-[28px] leading-[1.1] tracking-[-1px] mb-2">
                  Gold Trading <br />
                  <span className="text-[#ceae5a]">with Integrity</span>
                </div>
                <div className="w-[60px] h-[2px] bg-[#ceae5a] mx-auto mt-4" />
              </div>
            </motion.div>
            
            {/* Rocks Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 lg:w-[440px] h-[280px] sm:h-[360px] lg:h-[500px] rounded-[10px] overflow-hidden shadow-2xl relative"
            >
              <img src={imgGoldRocks} alt="Gold Rocks" className="max-w-none w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
              Overview<span className="text-[#ceae5a]">.</span>
            </h2>
            
            <div className="flex flex-col gap-8">
              <p className="font-sans font-medium text-[15px] lg:text-[17px] text-[#151515] leading-[1.4] tracking-tight">
                In parallel with our energy operations, EDG-GP DMCC is a trusted player in the gold and precious metals trade. We offer end-to-end precious metal services—from sourcing and aggregation to refinement and distribution—ensuring full traceability, compliance, and quality at every step.
              </p>
              
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                As world-class market specialists, we combine traditional expertise with a modern trading infrastructure to provide a reliable bridge between global mines and refineries. Our focus is on ensuring a consistent supply of responsibly sourced bullion, high-purity gold bars, and dore to meet the diverse needs of our global client base.
              </p>
              
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                Through our established global network of miners, refineries, and logistics providers, we manage the entire value chain. Every transaction is underpinned by a commitment to transparency, ethical sourcing, and adherence to OECD and LBMA guidelines, providing confidence to our global partners and clients.
              </p>
            </div>
            
            <button className="flex items-center gap-[18px] bg-[#ceae5a] hover:bg-[#b89b4f] text-white px-[26px] py-[14px] rounded-[8px] font-bold text-[14.6px] transition-all group w-fit">
              Explore More
              <div className="w-[30px] h-[30px] rounded-full bg-[#0b2b3f] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="size-3.5 text-white" strokeWidth={3} />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};