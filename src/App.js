import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TokenAddress from "./components/TokenAddress";
import Mission from "./components/MissionSection";
import TokenDistribution from "./components/TokenDistribution";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FundingTimeline from "./components/FundingTimeline";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import TermsDock from "./components/Terms";

function App() {
  const [openDock1, setOpenDoc1] = useState(false);
  const [openDock2, setOpenDoc2] = useState(false);

  const openDock = (dock) => {
    switch (dock) {
      case "privacy":
        setOpenDoc1(true);
        setOpenDoc2(false);
        break;
      case "terms":
        setOpenDoc1(false);
        setOpenDoc2(true);
        break;

      default:
        break;
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <Header openDock={(dock) => openDock(dock)} />
      <TokenAddress />
      <Mission />
      <TokenDistribution />
      <FundingTimeline />
      {/* <Funding /> */}
      <FAQSection />
      <ContactSection openDock={(dock) => openDock(dock)} />
      {/* <SocialSection /> */}
      <TermsDock openDock={openDock2} setOpenDock={setOpenDoc2} />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
