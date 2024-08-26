import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Customer Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
