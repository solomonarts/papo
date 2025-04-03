import React from "react";
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

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <TokenAddress />
      <Mission />
      <TokenDistribution />
      <FundingTimeline />
      {/* <Funding /> */}
      <FAQSection />
      <ContactSection />
      {/* <SocialSection /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
