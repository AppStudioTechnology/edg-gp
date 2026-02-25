import React, { useEffect } from "react";
import { PetroleumHero } from "../components/PetroleumHero";
import { PetroleumOverview } from "../components/PetroleumOverview";
import { PetroleumProducts } from "../components/PetroleumProducts";
import { PetroleumPortfolio } from "../components/PetroleumPortfolio";
import { PetroleumCapabilities } from "../components/PetroleumCapabilities";
import { PetroleumMarkets } from "../components/PetroleumMarkets";
import { OurClients } from "../components/OurClients";
import { CTABanner } from "../components/CTABanner";

export const PetroleumProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col w-full bg-white relative z-0 overflow-x-hidden">
      <PetroleumHero />
      <PetroleumOverview />
      <PetroleumProducts />
      <PetroleumPortfolio />
      <PetroleumCapabilities />
      <PetroleumMarkets />
      <OurClients />
      <CTABanner />
    </main>
  );
};
