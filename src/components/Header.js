import React from "react";
import { Button } from "antd";
import klaimage from "../assets/images/kampalacity.png";

const Header = ({ openDock }) => {
  return (
    <header
      className="header"
      id="home"
      style={{
        backgroundImage: `url(${klaimage})`,
      }}
    >
      <div className="overlay">
        <h1>Empowering Africa’s Growth Through Blockchain</h1>
        <p>
          Invest in $PAPO Token and fuel innovative startups and education in
          Web3.
        </p>
        <a
          href="https://forms.gle/bsVUvLWwUby5cD2t9"
          target="_blank"
          noreferrer
          noreopener
        >
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
        </a>
      </div>
      <p className="disclaimer">
        {" "}
        $PAPO tokens are designed for support and engagement with startups and
        educational initiatives within the blockchain space only. Holding $PAPO
        tokens symbolizes support for entrepreneurial growth and innovation, but
        does not constitute an investment or a security of any kind. There are
        no guarantees provided on returns or outcomes; participation is solely
        to support and engage with startup projects. Read{" "}
        <span
          onClick={() => openDock("terms")}
          style={{ color: "#9ed263", cursor: "pointer" }}
        >
          Terms and Conditions here.
        </span>
      </p>
    </header>
  );
};

export default Header;
