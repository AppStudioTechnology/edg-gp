import React from "react";
import { motion } from "motion/react";
import imgFuelOil from "@/assets/b925ee07aeb310be99bcb39a950d6350436d7ef6.png";
import imgGasoil from "@/assets/7afa48a6d07155eedfa56e133a93a31ec25ae49e.png";
import imgGasoline from "@/assets/5ec062669d7a5dfcdda047cf836da43350d96139.png";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Fuel Oil",
    desc: "A vital source of energy for industrial applications, marine transport, and large-scale power generation. Our fuel oil supply meets international standards and is backed by reliable logistics and storage options.",
    image: imgFuelOil
  },
  {
    title: "Gasoil (D2)",
    desc: "A highly sought-after low-sulfur diesel fuel used in automotive engines, heavy equipment, and commercial fleets. We offer both low and ultra-low sulfur grades to support environmental compliance and operational efficiency.",
    image: imgGasoil
  },
  {
    title: "Gasoline (Mogas)",
    desc: "Refined to perform under a variety of engine types and environmental conditions, our gasoline products are distributed with strict quality assurance protocols and tailored to the regulatory specifications of each market.",
    image: imgGasoline
  }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-[5px] w-full">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[320px] sm:h-[400px] lg:h-[590px] rounded-[10px] overflow-hidden group cursor-pointer"
            >
              <img src={product.image} alt={product.title} className="absolute inset-0 max-w-none object-cover size-full group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000435]/90 via-[#000435]/20 to-transparent z-10" />
              
              <div className="absolute inset-0 z-20 p-5 sm:p-8 lg:p-[45px] flex flex-col justify-between">
                <h3 className="font-sans font-semibold text-[18px] lg:text-[20px] text-white leading-tight">
                  {product.title}
                </h3>
                
                <div className="flex flex-col gap-8">
                  <p className="font-sans text-[15px] lg:text-[17px] text-white/90 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-white/30 flex items-center justify-between group/btn">
                    <span className="font-sans font-medium text-[14px] text-white">
                      Get A Quote
                    </span>
                    <div className="w-[30px] h-[30px] rounded-full bg-[#ceae5a] flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                      <ArrowUpRight className="size-4 text-[#000435]" strokeWidth={3} />
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