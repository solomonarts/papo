import React from "react";

const Mission = () => {
  const textStyle = {
    fontSize: "4rem",
    fontWeight: "900",
    textAlign: "left",
    textShadow: "18px 22px 1px rgba(0, 0, 0, 0.2)",
  };

  return (
    <section className="mission" id="about">
      <h2 style={textStyle}>Our Focus:</h2>
      <p
        style={{
          textAlign: "left",
          paddingLeft: "80px",
          fontSize: "1.3rem",
          fontWeight: "500",
          marginTop: "4px",
        }}
      >
        $PAPO Token is designed to drive sustainable economic growth across
        Africa by providing crucial funding for startups, small businesses, and
        educational projects focused on Web3 technology. Join us in building a
        decentralized future where innovation leads to opportunity for all.
      </p>
      <h2 style={textStyle}>The Problem and Solution:</h2>
      <p
        style={{
          textAlign: "left",
          paddingLeft: "80px",
          fontSize: "1.3rem",
          fontWeight: "500",
          marginTop: "4px",
        }}
      >
        Despite its vast potential, Africa’s growth is hindered by a significant
        resource gap. $PAPO Token addresses this by facilitating accessible,
        blockchain-based funding for innovative projects and entrepreneurs
        dedicated to economic and social impact.
      </p>
    </section>
  );
};

export default Mission;
