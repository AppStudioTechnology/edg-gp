import React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, FileText, Database, Share2, ClipboardCheck } from "lucide-react";

const capabilities = [
  {
    title: "Spot and Term Contracts:",
    desc: "Flexible trading agreements tailored to client needs— whether securing immediate supply or establishing long-term stability in pricing and delivery.",
    icon: <FileText className="size-10" />
  },
  {
    title: "Bulk Storage & Tank Leasing Solutions:",
    desc: "Access to large- scale, strategically located storage facilities that ensure continuous product availability and safeguard against market disruptions.",
    icon: <Database className="size-10" />
  },
  {
    title: "Strategic Partnerships with Refineries & Trading Houses:",
    desc: "Strong alliances that give clients preferential access to refined products, competitive pricing, and enhanced supply security.",
    icon: <Share2 className="size-10" />
  },
  {
    title: "Regulatory & Customs Clearance Support:",
    desc: "Comprehensive handling of documentation and compliance, reducing administrative burdens and ensuring smooth cross-border transactions.",
    icon: <ClipboardCheck className="size-10" />
  }
];

export const PetroleumCapabilities = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-gray-200 pb-6">
          <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            Efficient. Reliable. Strategic.
          </span>
          <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            [ CAPABILITIES ]
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-[60px]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 flex-1">
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px] max-w-[474px]">
              Capabilities- Petroleum Division
            </h2>
            <div className="h-full lg:h-[108px] border-l-3 border-[#ceae5a] pl-6 lg:pl-10 flex items-center">
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] max-w-[840px] leading-relaxed">
                At EDG Gold & Petroleum, our petroleum division is designed to deliver efficiency, reliability, and value across every stage of the supply chain. We don’t just trade products—we provide strategic solutions that empower our clients to operate with confidence in volatile markets.
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="w-[54px] h-[54px] rounded-[8px] border border-[#ceae5a] flex items-center justify-center hover:bg-[#ceae5a] group transition-all">
              <ChevronLeft className="size-6 text-black group-hover:text-white" />
            </button>
            <button className="w-[54px] h-[54px] rounded-[8px] bg-[#ceae5a] flex items-center justify-center hover:bg-[#b89b4f] transition-all">
              <ChevronRight className="size-6 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[36px]">
          {capabilities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f2f5fb] rounded-[15px] p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-10 hover:shadow-xl transition-shadow border border-gray-100 min-h-0 lg:min-h-[428px]"
            >
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[123px] lg:h-[123px] rounded-full bg-[#ceae5a] flex items-center justify-center text-white border-b border-gray-200 pb-4">
                {item.icon}
              </div>
              
              <div className="flex flex-col gap-6">
                <h3 className="font-sans font-semibold text-[16px] lg:text-[18px] text-black leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
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
