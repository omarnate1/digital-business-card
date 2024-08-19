import React from "react";
import twitter_icon from "../assets/Twitter Icon.svg";
import facebook_icon from "../assets/Facebook Icon.svg";
import instagram_icon from "../assets/Instagram Icon.svg";
import github_icon from "../assets/GitHub Icon.svg";

const Footer = () => {
  return (
    <footer>
      <img src={twitter_icon} alt="icon" />
      <img src={facebook_icon} alt="icon" />
      <img src={instagram_icon} alt="icon" />
      <img src={github_icon} alt="icon" />
    </footer>
  );
};

export default Footer;
