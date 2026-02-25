import React, { useEffect } from "react";
import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { VisionMission } from "./components/VisionMission";
import { ChairmanMessage } from "./components/ChairmanMessage";
import { EnergyDivision } from "./components/EnergyDivision";
import { GoldTrading } from "./components/GoldTrading";
import { OurClients } from "./components/OurClients";
import { StrategicRegions } from "./components/StrategicRegions";
import { WhoWeArePage } from "./pages/WhoWeArePage";
import { CEOMessagePage } from "./pages/CEOMessagePage";
import { BusinessApproachPage } from "./pages/BusinessApproachPage";
import { PetroleumProductsPage } from "./pages/PetroleumProductsPage";
import { GoldTradingPage } from "./pages/GoldTradingPage";
import { OperationsPage } from "./pages/OperationsPage";
import { ContactPage } from "./pages/ContactPage";

const HomePage = () => {
  useEffect(() => {
    document.title = "EDG Gold & Petroleum – Bridging Markets, Fueling Prosperity";
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
        <VisionMission />
        <ChairmanMessage />
      </div>
      <div id="services" className="relative overflow-hidden bg-black">
        <EnergyDivision />
        <GoldTrading />
      </div>
      <div id="partners">
        <OurClients />
      </div>
      <div id="operations">
        <StrategicRegions />
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
