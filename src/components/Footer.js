import React from "react";
import GitLogo from "../assets/logos/gitlogo.png"
import '../styles/footer.css'

const Footer = () => (
  <div className="footer" left>
    <a href="https://github.com/chriscondreay">
      <img src={GitLogo} alt="gitlogo" className="githubLogo" />
    </a>
  </div>
);

export default Footer;