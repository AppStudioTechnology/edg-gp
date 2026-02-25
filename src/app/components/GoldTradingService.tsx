import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import imgSourcing from "@/assets/fd9aa8f3462b63856bb7bea043c93adb44df92cd.png";
import imgTransport from "@/assets/c05597be88b219a4f251a50cc00c053e67d7d37e.png";
import imgPartnerships from "@/assets/8318d5b1a38853acf073e7528fe191db64e753b8.png";
import imgContracts from "@/assets/8ac20d50fa332151e458b292c0046936a5f0b2f6.png";

const services = [
  {
    title: "Ethical sourcing from verified mining operations",
    image: imgSourcing,
    badge: "Sourcing"
  },
  {
    title: "Secure transport and aggregation of raw and refined gold",
    image: imgTransport,
    badge: "Logistics"
  },
  {
    title: "Bullion partnerships for bullion conversion",
    image: imgPartnerships,
    badge: "Partnerships"
  },
  {
    title: "Spot and forward contracts for precious metals",
    image: imgContracts,
    badge: "Refining"
  }
];

export const GoldTradingService = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-[60px] lg:mb-[80px]">
          <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
            Gold Trading Service
          </h2>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 flex-1 lg:max-w-[1000px]">
            <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed border-l-2 border-[#ceae5a] pl-8">
              The division's core focus is on sourcing high-quality precious metals from reliable partners across major global mines, and distributing them to leading refineries and financial institutions worldwide. We handle both raw gold (dore) and refined investment-grade bullion, ensuring transparency and market-leading efficiency in every transaction.
            </p>
            
            <div className="flex gap-2 shrink-0 self-end lg:self-center">
              <button className="w-[54px] h-[54px] rounded-[8px] border border-[#ceae5a] flex items-center justify-center hover:bg-[#ceae5a] group transition-all">
                <ChevronLeft className="size-6 text-black group-hover:text-white" />
              </button>
              <button className="w-[54px] h-[54px] rounded-[8px] bg-[#ceae5a] flex items-center justify-center hover:bg-[#b89b4f] transition-all">
                <ChevronRight className="size-6 text-white" />
              </button>
            </div>
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
                <div className="mb-6">
                  <span className="font-sans text-[12px] uppercase tracking-widest text-[#ceae5a] font-bold">
                    {service.badge}
                  </span>
                  <h3 className="font-sans font-bold text-[16px] lg:text-[18px] text-white mt-4 leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <div className="pt-6 border-t border-white/20 flex items-center justify-between group/btn">
                  <span className="font-sans font-bold text-[14px] text-white uppercase tracking-wider">
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