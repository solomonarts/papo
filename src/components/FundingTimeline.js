import React from "react";
import timeline from "../assets/images/apply.png";
import timelinepic from "../assets/images/papo.png";
import { Button } from "antd";

const FundingTimeline = () => {
  return (
    <div className="timeline-container" id="apply">
      <div className="responsive-grid">
        <div className="grid-item item-1">
          <img
            src={timelinepic}
            // style={{
            //   objectFit: "contain",
            //   height: "auto",
            //   margin: "auto",
            //   width: "100%",
            // }}
          />
        </div>
        <div className="grid-item item-2">
          <img
            src={timeline}
            // style={{ objectFit: "contain", height: "auto", width: "70%" }}
          />
        </div>
      </div>
      <a
        href="https://forms.gle/bsVUvLWwUby5cD2t9"
        target="_blank"
        noreferrer
        noreopener
        style={{ margin: "auto" }}
      >
        <Button
          size="large"
          shape="round"
          style={{
            border: "1px solid #fff",
            background: "transparent",
            color: "white",
            fontWeight: "700",
            padding: "35px",
            margin: "auto",
          }}
        >
          Apply for Funding
        </Button>
      </a>
    </div>
  );
};

export default FundingTimeline;
