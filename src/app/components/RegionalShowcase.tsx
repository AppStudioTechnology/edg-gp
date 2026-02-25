import React from "react";
import { motion } from "motion/react";
import imgME from "@/assets/ad0f794d1a3a65953128611d42599dc87402bd2d.png";
import imgAfrica from "@/assets/037a9a85a52a082e71a4f2c3eb593be4e565efc8.png";

export const RegionalShowcase = () => {
  return (
    <section className="flex flex-col gap-[64px] lg:gap-[80px] py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-[64px] lg:gap-[80px]">
        {/* Middle East */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] sm:min-h-[420px] h-auto lg:h-[720px] rounded-[10px] overflow-hidden group shadow-2xl"
        >
          <img src={imgME} alt="Middle East" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 p-5 sm:p-8 lg:p-[96px] flex flex-col justify-center max-w-[800px] py-8 sm:py-10 lg:py-0 lg:h-full">
            <div className="bg-[#ceae5a] w-fit px-[25px] py-[8px] rounded-[8px] mb-8">
              <span className="font-sans font-medium text-[14px] lg:text-[15px] text-white uppercase">
                Middle East
              </span>
            </div>
            
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-white leading-[1.1] tracking-[-1px] mb-8">
              The Global <br />
              Energy Epicenter
            </h2>
            
            <p className="font-sans text-[15px] sm:text-[17px] lg:text-[18px] text-white/90 leading-relaxed">
              With its vast oil reserves, mature refining infrastructure, and high-volume trading activity, the Middle East stands as a global hub for energy commerce. EDG leverages its regional base and strong partnerships to access premium petroleum products, secure competitive contracts, and navigate the regulatory landscape with ease. From Oman to the UAE, Saudi Arabia, our network supports seamless trade flows backed by trust, efficiency, and market insight.
              <br /><br />
              In addition to energy, the Middle East has rapidly become a vital center for gold demand, with increasing institutional interest, expanding retail markets, and sovereign investments. We serve this sector with ethically sourced gold and tailor-made solutions that uphold both value and transparency.
            </p>
          </div>
        </motion.div>

        {/* Africa */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] sm:min-h-[420px] h-auto lg:h-[720px] rounded-[10px] overflow-hidden group shadow-2xl"
        >
          <img src={imgAfrica} alt="Africa" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 p-5 sm:p-8 lg:p-[96px] flex flex-col justify-center ml-auto text-right max-w-[800px] items-end py-8 sm:py-10 lg:py-0 lg:h-full">
            <div className="bg-[#ceae5a] w-fit px-[25px] py-[8px] rounded-[8px] mb-8">
              <span className="font-sans font-medium text-[14px] lg:text-[15px] text-white uppercase">
                Africa
              </span>
            </div>
            
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-white leading-[1.1] tracking-[-1px] mb-8">
              A Continent <br />
              of Emerging Potential
            </h2>
            
            <p className="font-sans text-[15px] sm:text-[17px] lg:text-[18px] text-white/90 leading-relaxed">
              Africa represents one of the world’s most dynamic frontiers for energy and commodity trade. With growing industrialization, rising energy demand, and abundant natural resources, the continent offers vast potential for mutually beneficial partnerships. From West Africa’s gold-rich mining zones to East and Central Africa’s fuel distribution corridors, EDG is deeply engaged in creating supply chains that are resilient, inclusive, and sustainable. We support governments, mining operators, and energy importers with tailored strategies that meet both operational needs and national development goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};