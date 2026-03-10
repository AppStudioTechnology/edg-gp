import React from "react";
import { motion } from "motion/react";
import imgProject from "@/assets/2d09c5cf3e6a35fbebcfa136dd060771dbf70d57.png";
import { ChevronRight } from "lucide-react";

const portfolioItems = [
  { label: "Ultra Low Sulphur Diesel (ULSD):", text: "Cleaner-burning diesel fuel, ideal for meeting environmental regulations while ensuring performance." },
  { label: "High Sulphur Diesel (HSD):", text: "Widely used for heavy-duty engines and equipment requiring cost-effective energy." },
  { label: "Unleaded Motor Gasoline:", text: "Refined for efficiency and consistency, tailored to global engine standards." },
  { label: "Naphtha:", text: "Essential for petrochemical industries and gasoline blending applications." },
  { label: "Liquefied Petroleum Gas (LPG):", text: "A versatile, clean energy source for heating, cooking, and automotive use." },
  { label: "Kerosene (Jet A-1):", text: "Aviation-grade fuel, ensuring reliability and compliance with international aviation standards." },
  { label: "Light Fuel Oil:", text: "Used in industrial heating and power generation." },
  { label: "Petroleum Solvent:", text: "Multi-purpose solvent supporting industrial applications." }
];

export const PetroleumPortfolio = () => {
  return (
    <section className="bg-[#f2f5fb] py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top border labels */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#b7bacb] pb-6 mb-8">
          <span className="font-sans text-[12.9px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            Showcasing our engineering expertise
          </span>
          <span className="font-sans text-[12.8px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            [ Portfolio ]
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-[56px]">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <h2 className="font-sans font-extralight text-[24px] sm:text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px] w-full lg:w-[710px] shrink-0">
              Petroleum Products Portfolio
            </h2>
            <div className="border-l-3 border-[#ceae5a] pl-6 sm:pl-[44px] flex items-center mt-6 lg:mt-0">
              <p className="font-sans text-[15px] sm:text-[17px] lg:text-[19px] text-[#555] max-w-[776px] leading-relaxed">
                At EDG Gold & Petroleum, we offer a comprehensive portfolio of petroleum products—designed to meet the diverse needs of governments, enterprises, and industrial clients. Each product is sourced, refined, and delivered with strict adherence to international quality standards and operational efficiency.
              </p>
            </div>
          </div>
          
        </div>

        {/* Content Box */}
        <div className="relative h-auto min-h-[400px] lg:h-[740px] rounded-[10px] overflow-hidden flex flex-col lg:flex-row">
          {/* Left Content (Blue Box) */}
          <div className="w-full lg:w-[71%] bg-[#000435] pt-[32px] sm:pt-[51px] pb-[48px] sm:pb-[100px] px-4 sm:px-8 lg:px-[60px] flex flex-col justify-center relative z-10">
            <div className="flex items-center justify-between mb-[26px]">
              <h3 className="font-sans font-semibold text-[20px] lg:text-[22px] text-white leading-tight">
                Light Distillates
              </h3>
              <span className="text-[#ceae5a] opacity-30 font-bold text-[48px] sm:text-[64px] lg:text-[100px] leading-none">01</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[24px] sm:gap-y-[33px] gap-x-8 sm:gap-x-[60px] lg:gap-x-[135px]">
              {portfolioItems.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h4 className="font-sans font-semibold text-[16px] lg:text-[18px] text-[#ceae5a] leading-snug">
                    {item.label}
                  </h4>
                  <p className="font-sans text-[15px] lg:text-[17px] text-white/90 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block flex-1 relative">
            <img src={imgProject} alt="Project" className="absolute inset-0 max-w-none object-cover size-full" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-[5px] py-[26px]">
          <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed text-center">
            We turn your ideas to reality. We don't stop until you're satisfied.
          </p>
          <a href="#contact" className="inline-flex items-center gap-[10px] font-sans font-medium text-[15px] lg:text-[16px] text-black group">
            Need to discuss
            <span className="w-[30px] h-[30px] rounded-full bg-[#ceae5a] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <ChevronRight className="size-4 text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
