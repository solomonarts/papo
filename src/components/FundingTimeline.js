import React from "react";
import timeline from "../assets/images/apply.png";
import timelinepic from "../assets/images/papo.png";

const FundingTimeline = () => {
  return (
    <div className="timeline-container" id="apply">
      <div className="responsive-grid">
        <div className="grid-item item-1">
          <img
            src={timelinepic}
            style={{
              objectFit: "contain",
              height: "auto",
              margin: "auto",
            }}
          />
        </div>
        <div className="grid-item item-2">
          <img
            src={timeline}
            style={{ objectFit: "contain", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FundingTimeline;
