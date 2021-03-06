import React from "react";
import {
  LogoGithub16,
  LogoLinkedin16,
  LogoTwitter16,
  Cloud16,
} from "@carbon/icons-react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p style={{ textAlign: "center" }}>
          Important Note: This is an experimental app for demonstration purposes
          only, and is not intended to be a commercial product
        </p>

        <div className="footer-logo">
          <p style={{ marginRight: "0.5rem" }}>stephensanwo.dev</p> <p>|</p>
          <LogoGithub16 style={{ marginLeft: "0.5rem" }} fill="#999999" />{" "}
          <LogoTwitter16 fill="#999999" />
          <LogoLinkedin16 fill="#999999" />
          <Cloud16 fill="#999999" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
