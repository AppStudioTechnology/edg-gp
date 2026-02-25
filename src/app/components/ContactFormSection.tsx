import React from "react";
import { motion } from "motion/react";

export const ContactFormSection = () => {
  return (
    <section className="py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[80px] bg-white relative overflow-hidden">
      {/* Background World Map Graphic would go here if asset was available as a standalone SVG, 
          but we'll stick to the layout structure */}
      
      <div className="max-w-[1440px] mx-auto">
        {/* Header Label */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#DCE0E3] pb-4 mb-10 lg:mb-16 font-sans text-[11px] sm:text-[13px] tracking-[0.2em] uppercase text-[#8C8C8C] gap-2">
          <span>Let's Talk About Next Adventure</span>
          <span>[ GET IN TOUCH ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-black text-[28px] md:text-[36px] font-extralight font-sans leading-[1.1] tracking-[-1px]"
            >
              Feel free to reach out for collaborations or just to say hello!
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {/* Addresses */}
              <div className="flex flex-col gap-4">
                <span className="text-[#8C8C8C] text-[16px] font-sans">Visit us</span>
                <p className="text-black text-[16px] sm:text-[19px] font-sans leading-[1.5]">
                  DMCC Business Centre, Level No 1 Jewellery & Gemplex 3, Dubai - UAE
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[#8C8C8C] text-[16px] font-sans">Visit us</span>
                <p className="text-black text-[16px] sm:text-[19px] font-sans leading-[1.5]">
                  Prism Tower, Business Bay,<br />Office 3006, Dubai, UAE
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4">
                <span className="text-[#8C8C8C] text-[16px] font-sans">How can we help?</span>
                <div className="text-black text-[16px] sm:text-[19px] font-sans flex flex-col gap-1">
                  <p>Phone: (+971) 45548286</p>
                  <p>Mobile: (+971) 503541413</p>
                  <p>Fax: (+971) 503541413</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[#8C8C8C] text-[16px] font-sans">Email us</span>
                <p className="text-black text-[16px] sm:text-[19px] font-sans">
                  info@edg-gp.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#FAFAFA] p-6 sm:p-8 lg:p-[60px] rounded-[10px]"
            >
              <h3 className="text-black text-[22px] md:text-[28px] font-extralight font-sans mb-12 leading-[1.1] tracking-[-1px]">
                Leave a message
              </h3>
              
              <form className="flex flex-col gap-8">
                <div className="border-b border-[#DCE0E3] py-4">
                  <input 
                    type="text" 
                    placeholder="Full Name*" 
                    className="w-full bg-transparent outline-none text-black placeholder:text-[#555] font-sans text-[16px] sm:text-[18px]"
                  />
                </div>
                <div className="border-b border-[#DCE0E3] py-4">
                  <input 
                    type="email" 
                    placeholder="Email*" 
                    className="w-full bg-transparent outline-none text-black placeholder:text-[#555] font-sans text-[16px] sm:text-[18px]"
                  />
                </div>
                <div className="border-b border-[#DCE0E3] py-4">
                  <input 
                    type="tel" 
                    placeholder="Phone*" 
                    className="w-full bg-transparent outline-none text-black placeholder:text-[#555] font-sans text-[16px] sm:text-[18px]"
                  />
                </div>
                <div className="border-b border-[#DCE0E3] py-4">
                  <textarea 
                    placeholder="Message" 
                    className="w-full bg-transparent outline-none text-black placeholder:text-[#555] font-sans text-[16px] sm:text-[18px] min-h-[120px] resize-none"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#A98C49] text-white flex items-center gap-4 px-[28px] py-[12px] rounded-[12px] font-medium text-[14px] font-sans self-start mt-4 hover:bg-[#967a3f] transition-all"
                >
                  Submit
                  <div className="bg-[#222222] p-1.5 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
