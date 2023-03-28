import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Evetech - No rights reserved this is a portfolio build</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <a
        href="https://thamsanqaj-fea43.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Thamsanqa J
      </a>
    </div>
  );
};

export default Footer;
