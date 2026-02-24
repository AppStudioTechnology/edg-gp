import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgBpPng from "@/assets/d49f19aa8493aac5092e4202074027f4138cec9a.png";
import imgHarbourEnergyPng from "@/assets/0858992a4b38f6eee43970c07dfaa06babf77247.png";
import imgEquinorPng from "@/assets/509a55a1a570e289f42a47af3e76d143f3910ddf.png";
import imgSpiritEnergyPng from "@/assets/2835c4df047e146bffdc6d4eaac3a16e85f5bd7c.png";
import imgMaersekPng from "@/assets/45b5a55fe23efc25cb1a2a83edffa56651de175c.png";
import imgTotalEnergiesPng from "@/assets/1f87f80505240dbe46a6b23840a9e076447e4ce8.png";
import imgPerencoPng from "@/assets/0f312acfd7661746df1a946a8f08b75656c8d77a.png";
import imgSubsea7Png from "@/assets/04a38e18500a05c9338f7e479bacabfd32910efa.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Partners = () => {
  const sliderRef = useRef<Slider>(null);

  const partners = [
    { name: "BP", logo: imgBpPng },
    { name: "Harbour Energy", logo: imgHarbourEnergyPng },
    { name: "Equinor", logo: imgEquinorPng },
    { name: "Maersk", logo: imgMaersekPng },
    { name: "Perenco", logo: imgPerencoPng },
    { name: "Subsea 7", logo: imgSubsea7Png },
    { name: "Spirit Energy", logo: imgSpiritEnergyPng },
    { name: "Total Energies", logo: imgTotalEnergiesPng },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 5 } },
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white overflow-hidden w-full py-[72px] lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[60px] lg:gap-[80px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 px-6 sm:px-8 lg:px-[45px]">
          <h2 className="font-sans font-bold text-[28px] md:text-[36px] lg:text-[42px] text-black leading-tight tracking-[-0.02em]">
            Partners
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 lg:gap-10">
            <div className="border-l-[3px] border-[#ceae5a] pl-6 max-w-[420px]">
              <p className="font-sans font-normal text-[14px] lg:text-[15px] leading-[1.9] text-[#555] tracking-[-0.2px]">
                Dedicated to supporting our clients and partners in every strategic step.
              </p>
            </div>

            <div className="flex gap-[5px]">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-[48px] h-[48px] border border-[#ceae5a] rounded-[8px] flex items-center justify-center hover:bg-[#ceae5a]/5 transition-all"
              >
                <ChevronLeft size={14} className="text-[#ceae5a]" strokeWidth={2} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-[48px] h-[48px] bg-[#ceae5a] border border-[#ceae5a] rounded-[8px] flex items-center justify-center hover:bg-[#b89b4f] transition-all"
              >
                <ChevronRight size={14} className="text-white" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Partner Logos Carousel */}
        <div className="w-full px-4 sm:px-6 lg:px-[45px]">
          <Slider ref={sliderRef} {...settings} className="partner-slider -mx-[10px]">
            {partners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="px-[10px]">
                <div className="bg-white border border-[#dce0e3] rounded-full h-[80px] sm:h-[90px] lg:h-[100px] flex items-center justify-center overflow-hidden hover:border-[#ceae5a]/30 transition-all duration-400">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[45px] sm:max-h-[50px] lg:max-h-[60px] max-w-[100px] lg:max-w-[120px] object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .partner-slider .slick-track {
          display: flex !important;
          align-items: center !important;
        }
        .partner-slider .slick-slide > div {
          height: 100%;
        }
      `}} />
    </section>
  );
};
