import React from "react";
import imgBp from "@/assets/d49f19aa8493aac5092e4202074027f4138cec9a.png";
import imgHarbour from "@/assets/0858992a4b38f6eee43970c07dfaa06babf77247.png";
import imgEquinor from "@/assets/509a55a1a570e289f42a47af3e76d143f3910ddf.png";
import imgSpirit from "@/assets/2835c4df047e146bffdc6d4eaac3a16e85f5bd7c.png";
import imgMaersek from "@/assets/45b5a55fe23efc25cb1a2a83edffa56651de175c.png";
import imgTotal from "@/assets/1f87f80505240dbe46a6b23840a9e076447e4ce8.png";
import imgPerenco from "@/assets/0f312acfd7661746df1a946a8f08b75656c8d77a.png";
import imgSubsea7 from "@/assets/04a38e18500a05c9338f7e479bacabfd32910efa.png";

const partners = [
  { name: "BP", logo: imgBp },
  { name: "Harbour Energy", logo: imgHarbour },
  { name: "Equinor", logo: imgEquinor },
  { name: "Maersk", logo: imgMaersek },
  { name: "Perenco", logo: imgPerenco },
  { name: "Subsea 7", logo: imgSubsea7 },
  { name: "Spirit Energy", logo: imgSpirit },
  { name: "Total Energies", logo: imgTotal },
];

const PartnerCard = ({ partner }: { partner: (typeof partners)[0] }) => (
  <div className="flex-shrink-0 px-2 sm:px-3">
    <div className="bg-white rounded-[10px] p-4 flex items-center justify-center aspect-[212/129] w-[180px] sm:w-[200px] lg:w-[220px] shadow-sm hover:shadow-md transition-all duration-300 group">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-w-[80%] max-h-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
  </div>
);

export const PetroleumClients = () => {
  return (
    <section className="bg-[#f2f5fb] py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px] lg:gap-[68px]">
        {/* Header */}
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-gray-200 pb-6">
            <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
              Confident & Global
            </span>
            <span className="font-sans text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
              [ Clients ]
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 flex-1">
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px] max-w-[474px]">
              Our Clients
            </h2>
            <div className="h-full border-l-3 border-[#ceae5a] pl-8 flex items-center">
              <p className="font-sans text-[17px] lg:text-[19px] text-[#555] max-w-[840px] leading-relaxed">
                An international reach: the knowledge, network and resources to deliver for clients – leading players in their sectors – around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Partners slider logos - continuous marquee */}
        <div className="w-full overflow-hidden">
          <div className="petroleum-clients-marquee flex w-max">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes petroleum-clients-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .petroleum-clients-marquee {
          animation: petroleum-clients-scroll 40s linear infinite;
        }
        .petroleum-clients-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};
