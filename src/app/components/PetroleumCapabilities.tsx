import React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, FileText, Database, Share2, ClipboardCheck } from "lucide-react";

const capabilities = [
  {
    title: "Spot and Term Contracts:",
    desc: "Flexible trading agreements tailored to client needs— whether securing immediate supply or establishing long-term stability in pricing and delivery.",
    icon: <FileText className="size-8" strokeWidth={1.5} />
  },
  {
    title: "Bulk Storage & Tank Leasing Solutions:",
    desc: "Access to large- scale, strategically located storage facilities that ensure continuous product availability and safeguard against market disruptions.",
    icon: <Database className="size-8" strokeWidth={1.5} />
  },
  {
    title: "Strategic Partnerships with Refineries & Trading Houses:",
    desc: "Strong alliances that give clients preferential access to refined products, competitive pricing, and enhanced supply security.",
    icon: <Share2 className="size-8" strokeWidth={1.5} />
  },
  {
    title: "Regulatory & Customs Clearance Support:",
    desc: "Comprehensive handling of documentation and compliance, reducing administrative burdens and ensuring smooth cross-border transactions.",
    icon: <ClipboardCheck className="size-8" strokeWidth={1.5} />
  }
];

export const PetroleumCapabilities = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#dce0e3] pb-6 mb-[30px]">
          <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            Efficient. Reliable. Strategic.
          </span>
          <span className="font-sans text-[12.9px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            [ CAPABILITIES ]
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-[40px] sm:mb-[60px] lg:mb-[92px]">
          <div className="flex flex-col lg:flex-row lg:items-center flex-1">
            <h2 className="font-sans font-extralight text-[24px] sm:text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px] w-full lg:w-[474px] shrink-0">
              Capabilities- Petroleum Division
            </h2>
            <div className="border-l-3 border-[#ceae5a] h-auto lg:h-[108px] flex items-center pl-6 lg:pl-[35px] mt-6 lg:mt-0">
              <p className="font-sans text-[15px] sm:text-[17px] lg:text-[19px] text-[#555] max-w-[840px] leading-relaxed">
                At EDG Gold & Petroleum, our petroleum division is designed to deliver efficiency, reliability, and value across every stage of the supply chain. We don't just trade products—we provide strategic solutions that empower our clients to operate with confidence in volatile markets.
              </p>
            </div>
          </div>
          
          <div className="flex gap-[5px] shrink-0">
            <button className="w-[54px] h-[54px] rounded-[8px] border border-[#ceae5a] bg-white flex items-center justify-center hover:bg-[#ceae5a] group transition-all">
              <ChevronLeft className="size-5 text-[#ceae5a] group-hover:text-white" />
            </button>
            <button className="w-[54px] h-[54px] rounded-[8px] bg-[#ceae5a] border border-[#ceae5a] flex items-center justify-center hover:bg-[#b89b4f] transition-all">
              <ChevronRight className="size-5 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-[1200px] mx-auto">
          {capabilities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f2f5fb] rounded-[8px] p-4 sm:p-5 lg:p-6 flex flex-col min-h-0 min-w-0 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-sans font-semibold text-[15px] lg:text-[17px] text-black leading-snug break-words">
                {item.title}
              </h3>

              <div className="mt-4 sm:mt-5 flex flex-col gap-3 flex-1 min-h-0">
                <div className="border-b border-[#b7bacb] pb-4">
                  <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-[#ceae5a] flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                </div>
                <p className="font-sans text-[14px] lg:text-[15px] text-[#555] leading-relaxed break-words min-w-0">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
