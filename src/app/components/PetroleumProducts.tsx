import React from "react";
import { motion } from "motion/react";
import imgFuelOil from "@/assets/b925ee07aeb310be99bcb39a950d6350436d7ef6.png";
import imgGasoil from "@/assets/7afa48a6d07155eedfa56e133a93a31ec25ae49e.png";
import imgGasoline from "@/assets/5ec062669d7a5dfcdda047cf836da43350d96139.png";
import imgRefinery from "@/assets/4320c3d682274c331434f0c4625d9027139acb24.png";
import imgTanks from "@/assets/ff209826221c5d435606888e985201bc4c5f292c.png";
import imgTransport from "@/assets/c05597be88b219a4f251a50cc00c053e67d7d37e.png";
import imgIndustrial1 from "@/assets/b5aaba61d8de2de2626ff2e0f1640ed488524eb2.png";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "EN590 Diesel",
    spec: "ASTM D975 / EN590",
    desc: "Ultra-low sulphur diesel (ULSD) conforming to EN590 specifications. Suitable for automotive, commercial fleet, and heavy equipment applications across all major markets.",
    image: imgGasoil,
  },
  {
    title: "Gasoline RON 91 / RON 95",
    spec: "RON 91 & RON 95",
    desc: "High-quality unleaded motor gasoline (MOGAS) available in RON 91 and RON 95 grades. Formulated to meet country-specific regulatory standards and engine performance requirements.",
    image: imgGasoline,
  },
  {
    title: "Jet A1",
    spec: "ASTM D1655 / DEF STAN 91-091",
    desc: "Aviation turbine fuel meeting international Jet A1 specifications. Supplied to airlines, military aviation, and ground support operations with full quality certification and traceability.",
    image: imgTransport,
  },
  {
    title: "Fuel Oil",
    spec: "CIMAC / ISO 8217",
    desc: "Heavy residual fuel oil for marine bunker, industrial power generation, and large-scale heating applications. Available in multiple viscosity grades with full sulphur compliance documentation.",
    image: imgFuelOil,
  },
  {
    title: "Bitumen",
    spec: "Grade 60/70 & 80/100",
    desc: "Petroleum-derived bitumen for road construction, infrastructure projects, and waterproofing applications. Supplied directly to government road agencies, construction firms, and industrial operators.",
    image: imgRefinery,
  },
  {
    title: "LPG",
    spec: "Propane / Butane Blend",
    desc: "Liquefied Petroleum Gas for domestic, commercial, and industrial use. Delivered in bulk tanker or cylinder format to distributors, filling stations, and industrial consumers.",
    image: imgTanks,
  },
  {
    title: "LNG",
    spec: "ISO 8217 LNG Grade",
    desc: "Liquefied Natural Gas for power generation, marine propulsion, and industrial applications. EDG facilitates LNG supply agreements across emerging markets in Africa and Asia through established shipping partnerships.",
    image: imgIndustrial1,
  },
];

export const PetroleumProducts = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[60px] lg:mb-[80px] max-w-[1119px]"
        >
          <h2 className="font-sans font-extralight text-[24px] sm:text-[28px] lg:text-[36px] text-black mb-4 sm:mb-6 leading-[1.1] tracking-[-1px]">
            Our Products
          </h2>
          <p className="font-sans text-[15px] sm:text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
            Conforms to Clients country standards: Petroleum products supplies are formulated to meet the latest standards for diesel fuel, Gasoline, etc.. ensuring that it meets the highest quality and performance standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-[5px] w-full">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[380px] lg:h-[480px] rounded-[10px] overflow-hidden group cursor-pointer"
            >
              <img src={product.image} alt={product.title} className="absolute inset-0 max-w-none object-cover size-full group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000435]/90 via-[#000435]/30 to-transparent z-10" />
              
              <div className="absolute inset-0 z-20 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-sans font-semibold text-[16px] lg:text-[18px] text-white leading-tight">
                    {product.title}
                  </h3>
                  {'spec' in product && (
                    <span className="shrink-0 font-sans text-[10px] text-[#ceae5a] border border-[#ceae5a]/40 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {product.spec}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col gap-5">
                  <p className="font-sans text-[13px] lg:text-[14px] text-white/85 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between group/btn">
                    <span className="font-sans font-medium text-[13px] text-white">
                      Get A Quote
                    </span>
                    <div className="w-[28px] h-[28px] rounded-full bg-[#ceae5a] flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                      <ArrowUpRight className="size-3.5 text-[#000435]" strokeWidth={3} />
                    </div>
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