import { Button } from "antd";
import React from "react";
import { FaGlobe, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaInbox, FaXTwitter } from "react-icons/fa6";

const ContactSection = ({ openDock }) => {
  const sectionstyle = {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "0 0 20px 20px",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "4rem",
    fontWeight: "900",
    textShadow: "18px 22px 1px rgba(0, 0, 0, 0.2)",
    padding: "30px",
  };

  return (
    <div style={sectionstyle} id="contact">
      <section className="contact-section">
        <h2 style={textStyle}></h2>

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
              border: "1px solid #6a0dad",
              background: "transparent",
              color: "#6a0dad",
              fontWeight: "700",
              padding: "25px",
            }}
          >
            Apply For Funding
          </Button>
        </a>
      </section>
      <section className="social-section">
        <h2 style={{ fontSize: "2rem" }}>Social Media Links</h2>
        <p style={{ marginTop: "20px", fontWeight: "500" }}>
          Follow us on social media for the latest updates and community
          discussions.
        </p>
        <p style={{ marginTop: "20px" }}>Email: info@papoproject.com</p>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            padding: "20px 0",
            gap: "10px",
          }}
        >
          {" "}
          <a
            href="https://www.x.com/DouglasLwangaUg"
            target="_blank"
            noreferrer
            noreopener
          >
            <FaXTwitter size={25} />
          </a>
          {/* <a
            href="https://www.papoproject.com"
            target="_blank"
            noreferrer
            noreopener
          >
            <FaGlobe size={25} />
          </a>
          <a
            href="mailto:info@papoproject.com.com"
            target="_blank"
            noreferrer
            noreopener
          >
            <FaInbox size={25} />
          </a> */}
        </div>
        <span
          onClick={() => openDock("terms")}
          style={{
            color: "#6a0dad",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "18px",
            textDecoration: "underline",
            textDecorationStyle: "double",
          }}
        >
          Terms and Conditions here.
        </span>
      </section>
    </div>
  );
};

export default ContactSection;
