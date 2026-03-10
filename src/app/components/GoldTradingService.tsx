import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import imgSourcing from "@/assets/fd9aa8f3462b63856bb7bea043c93adb44df92cd.png";
import imgTransport from "@/assets/c05597be88b219a4f251a50cc00c053e67d7d37e.png";
import imgPartnerships from "@/assets/8318d5b1a38853acf073e7528fe191db64e753b8.png";
import imgContracts from "@/assets/8ac20d50fa332151e458b292c0046936a5f0b2f6.png";

const services = [
  {
    title: "Gold Dore — Raw gold sourced from verified mines across Africa and Asia",
    image: imgSourcing,
    badge: "Gold Dore",
    desc: "We source Gold Dore bars directly from licensed and verified mining operations, with full chain-of-custody documentation and compliance with OECD responsible sourcing guidelines."
  },
  {
    title: "Refined Gold — Investment-grade .9999 fine gold for institutional clients",
    image: imgTransport,
    badge: "Refined Gold",
    desc: "Refined gold in LBMA good delivery bar format, supplied to central banks, financial institutions, and commercial refineries. Full assay certification and provenance documentation included."
  },
  {
    title: "Bullion Trading — Physical and paper gold for treasury and investment mandates",
    image: imgPartnerships,
    badge: "Bullion Trading",
    desc: "We facilitate physical bullion transactions and provide access to spot, forward, and structured contracts for treasuries, funds, and private investors seeking exposure to gold markets."
  },
  {
    title: "End-to-End Logistics — Secure aggregation, transport, and vault delivery",
    image: imgContracts,
    badge: "Logistics",
    desc: "Our precious metals logistics network covers secure aggregation at origin, armoured transport, international shipping, insurance, and final delivery to approved vault facilities worldwide."
  }
];

export const GoldTradingService = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-[60px] lg:mb-[80px]">
          <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
            Precious Metals Products<br />& Services
          </h2>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 flex-1 lg:max-w-[1000px]">
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed border-l-2 border-[#ceae5a] pl-8">
              EDG's precious metals division handles the full spectrum of the gold value chain — from sourcing raw Gold Dore at origin, through to refined investment-grade bullion distribution for institutional and commercial clients worldwide. Every transaction is underpinned by AML compliance, responsible sourcing protocols, and transparent documentation.
            </p>
            
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[5px]">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[320px] sm:h-[400px] lg:h-[590px] rounded-[10px] overflow-hidden group cursor-pointer"
            >
              <img src={service.image} alt={service.title} className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              <div className="absolute inset-0 z-20 p-5 sm:p-8 lg:p-[45px] flex flex-col justify-end">
                <div className="mb-4">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#ceae5a] font-semibold border border-[#ceae5a]/40 px-2 py-0.5 rounded-full">
                    {service.badge}
                  </span>
                  <h3 className="font-sans font-semibold text-[15px] lg:text-[17px] text-white mt-4 leading-snug">
                    {service.title}
                  </h3>
                  {'desc' in service && (
                    <p className="font-sans text-[13px] text-white/70 mt-2 leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  )}
                </div>
                
                <div className="pt-5 border-t border-white/20 flex items-center justify-between group/btn">
                  <span className="font-sans font-semibold text-[13px] text-white uppercase tracking-wider">
                    Learn More
                  </span>
                  <div className="w-[30px] h-[30px] rounded-full bg-[#ceae5a] flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                    <ArrowUpRight className="size-4 text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};