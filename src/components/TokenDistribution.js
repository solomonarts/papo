import React from "react";
import piechart from "../assets/images/piechart.png";
const TokenDistribution = () => {
  // const textStyle = {
  //   fontSize: "4rem",
  //   fontWeight: "900",
  //   textShadow: "18px 22px 1px #ffffff38",
  //   textAlign: "center",
  //   paddingTop: "40px",
  // };
  return (
    <section className="token-distribution" id="how-it-works">
      <h2
      // style={{
      //   color: "white",
      //   textAlign: "center",
      //   fontSize: "4rem",
      //   fontWeight: "900",
      //   padding: "20px 0",
      //   textShadow: "18px 22px 1px #ffffff38",
      // }}
      >
        Tokenomics
      </h2>
      <img src={piechart} alt="Token Distribution" />
    </section>
  );
};

export default TokenDistribution;
