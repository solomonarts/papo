import React from "react";
import { FaGlobe, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaInbox, FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
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
        <h2 style={textStyle}>Contact</h2>
        <form className="contact-form">
          <input type="email" placeholder="Email" />
          {/* <textarea placeholder="Message"></textarea> */}
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="social-section">
        <h2 style={{ fontSize: "2rem" }}>Social Media Links</h2>
        <p style={{ marginTop: "20px", fontWeight: "500" }}>
          Follow us on social media for the latest updates and community
          discussions.
        </p>
        <p style={{ marginTop: "20px" }}>Email: info@$PAPOtoken.com</p>
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
          <a href="https://www.x.com" target="_blank" noreferrer noreopener>
            <FaXTwitter size={25} />
          </a>
          <a
            href="https://www.papoproject.com"
            target="_blank"
            noreferrer
            noreopener
          >
            <FaGlobe size={25} />
          </a>
          <a
            href="mailto:info@papotoken.com"
            target="_blank"
            noreferrer
            noreopener
          >
            <FaInbox size={25} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
