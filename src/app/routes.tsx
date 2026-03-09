import React, { useEffect } from "react";
import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { IntroSection } from "./components/IntroSection";
import { VisionMission } from "./components/VisionMission";
import { ChairmanMessage } from "./components/ChairmanMessage";
import { EnergyDivision } from "./components/EnergyDivision";
import { GoldTrading } from "./components/GoldTrading";

import { TradingCTASection } from "./components/TradingCTASection";
import { ComplianceGovernance } from "./components/ComplianceGovernance";
import { GlobalPresence } from "./components/GlobalPresence";
import { InsightsUpdates } from "./components/InsightsUpdates";
import { PartnerCTA } from "./components/PartnerCTA";
import { WhoWeArePage } from "./pages/WhoWeArePage";
import { CEOMessagePage } from "./pages/CEOMessagePage";
import { BusinessApproachPage } from "./pages/BusinessApproachPage";
import { PetroleumProductsPage } from "./pages/PetroleumProductsPage";
import { GoldTradingPage } from "./pages/GoldTradingPage";
import { OperationsPage } from "./pages/OperationsPage";
import { ContactPage } from "./pages/ContactPage";

const HomePage = () => {
  useEffect(() => {
    document.title = "EDG Gold & Petroleum – International Commodity Trading Group";
  }, []);

  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="about-us">
        <IntroSection />
        <VisionMission />
        <ChairmanMessage />
      </div>
      <div id="services" className="relative overflow-hidden bg-black">
        <EnergyDivision />
      </div>
      <div id="cta">
        <TradingCTASection />
      </div>
      <div className="relative overflow-hidden bg-black">
        <GoldTrading />
      </div>
      <div id="compliance">
        <ComplianceGovernance />
        <PartnerCTA />
      </div>
      <div id="operations">
        <GlobalPresence />
      </div>
      <div id="insights">
        <InsightsUpdates />
      </div>
    </main>
  );
};

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about/who-we-are", Component: WhoWeArePage },
      { path: "about/ceo-message", Component: CEOMessagePage },
      { path: "about/business-approach", Component: BusinessApproachPage },
      { path: "services/petroleum-products", Component: PetroleumProductsPage },
      { path: "services/gold-trading", Component: GoldTradingPage },
      { path: "operations", Component: OperationsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
