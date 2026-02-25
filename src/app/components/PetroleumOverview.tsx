import React from "react";
import { motion } from "motion/react";
import imgIndustrial1 from "@/assets/b5aaba61d8de2de2626ff2e0f1640ed488524eb2.png";
import imgIndustrial2 from "@/assets/ce0e52179be0693bf0a02514b6e3ce50ba059c72.png";
import { ArrowRight } from "lucide-react";

export const PetroleumOverview = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-gray-200 pb-6 mb-12">
          <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            INNOVATIVE SOLUTION FOR COMPLEX ENERGY
          </span>
          <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            [ Empowering Trade. ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-start">
          {/* Left: Images */}
          <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-[38px]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 lg:w-[338px] h-[200px] sm:h-[260px] lg:h-[305px] rounded-[10px] overflow-hidden bg-gray-100 relative group"
            >
              <img src={imgIndustrial1} alt="Industrial Facility" className="absolute max-w-none object-cover size-full group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-4 border border-white/20 rounded-[5px]" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 lg:w-[440px] h-[280px] sm:h-[360px] lg:h-[500px] rounded-[10px] overflow-hidden shadow-2xl relative"
            >
              <img src={imgIndustrial2} alt="Pipelines" className="absolute max-w-none object-cover size-full" />
              {/* Badge overlay if needed, but screenshot shows it's part of the image layout or a separate item */}
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
              <p className="font-sans font-medium text-[17px] lg:text-[19px] text-black leading-relaxed">
                We supply a wide range of refined oil products tailored to meet the evolving needs of government agencies, public institutions, and private corporations. Our operational strength lies in our ability to offer reliable, on-time delivery with competitive pricing and full compliance with international quality standards.
              </p>
              
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                Our petroleum products are sourced from some of the highest-quality refineries in the GCC & Global Market, and are formulated to meet the strictest industry standards. The petroleum products we supply is designed to provide maximum power and performance, with the following key characteristics:
              </p>
              
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                Conforms to Clients country standards: Petroleum products supplies are formulated to meet the latest standards for diesel fuel, Gasoline, etc.. ensuring that it meets the highest quality and performance standards.
              </p>
            </div>
            
            <button className="flex items-center gap-[18px] bg-[#A98C49] hover:bg-[#967a3f] text-white px-[28px] py-[12px] rounded-[12px] font-medium text-[14px] font-sans transition-all group w-fit">
              Contact Us
              <div className="w-[30px] h-[30px] rounded-full bg-[#222222] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="size-3.5 text-white" strokeWidth={3} />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};