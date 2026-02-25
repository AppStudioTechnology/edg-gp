import React from "react";
import imgBpPng from "@/assets/d49f19aa8493aac5092e4202074027f4138cec9a.png";
import imgHarbourEnergyPng from "@/assets/0858992a4b38f6eee43970c07dfaa06babf77247.png";
import imgEquinorPng from "@/assets/509a55a1a570e289f42a47af3e76d143f3910ddf.png";
import imgSpiritEnergyPng from "@/assets/2835c4df047e146bffdc6d4eaac3a16e85f5bd7c.png";
import imgMaersekPng from "@/assets/45b5a55fe23efc25cb1a2a83edffa56651de175c.png";
import imgTotalEnergiesPng from "@/assets/1f87f80505240dbe46a6b23840a9e076447e4ce8.png";
import imgPerencoPng from "@/assets/0f312acfd7661746df1a946a8f08b75656c8d77a.png";
import imgSubsea7Png from "@/assets/04a38e18500a05c9338f7e479bacabfd32910efa.png";

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

const PartnerCard = ({ partner }: { partner: (typeof partners)[0] }) => (
  <div className="flex-shrink-0 px-2 sm:px-3">
    <div className="bg-white border border-[#dce0e3] rounded-full h-[70px] sm:h-[80px] lg:h-[90px] w-[70px] sm:w-[80px] lg:w-[90px] flex items-center justify-center overflow-hidden hover:border-[#ceae5a]/30 transition-all duration-400">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-[40px] sm:max-h-[45px] lg:max-h-[50px] max-w-[70px] lg:max-w-[80px] object-contain"
      />
    </div>
  </div>
);

export const Partners = () => {
  return (
    <section className="bg-white overflow-hidden w-full py-[72px] lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[60px] lg:gap-[80px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 px-6 sm:px-8 lg:px-[45px]">
          <h2 className="font-sans font-extralight text-[32px] md:text-[40px] lg:text-[48px] text-black leading-[1.1] tracking-[-1px]">
            Partners
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 lg:gap-10">
            <div className="border-l-[3px] border-[#ceae5a] pl-6 max-w-[420px]">
              <p className="font-sans font-normal text-[15px] lg:text-[17px] leading-[1.9] text-[#555] tracking-[-0.2px]">
                Dedicated to supporting our clients and partners in every strategic step.
              </p>
            </div>
          </div>
        </div>

        {/* Continuous marquee - aligned with Partners heading (left) and text block (right) */}
        <div className="w-full overflow-hidden px-6 sm:px-8 lg:px-[45px]">
          <div className="partner-marquee flex w-max">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes partner-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .partner-marquee {
          animation: partner-scroll 30s linear infinite;
        }
        .partner-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};
