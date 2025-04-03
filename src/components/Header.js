import React from "react";
import { Button } from "antd";
import klaimage from "../assets/images/kampalacity.png";

const Header = () => {
  return (
    <header
      className="header"
      id="home"
      style={{
        backgroundImage: `url(${klaimage})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <h1>Empowering Africa’s Growth Through Blockchain</h1>
        <p>
          Invest in $PAPO Token and fuel innovative startups and education in
          Web3.
        </p>
        <Button
          size="large"
          shape="round"
          style={{
            border: "1px solid #fff",
            background: "transparent",
            color: "white",
            fontWeight: "700",
            padding: "25px",
          }}
        >
          Apply for Funding
        </Button>
      </div>
    </header>
  );
};

export default Header;
