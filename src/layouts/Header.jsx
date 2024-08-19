import React from "react";
import profilepic from "/src/assets/Pasted image.png";
import email_logo from "../assets/Icon.svg";
import linkedin_logo from "../assets/Vector.svg";

function Header() {
  return (
    <>
      <img src={profilepic} alt="profile pic" className="profile_image" />
      <div className="head_text">
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <a href="https://nathan-portfolio-eta.vercel.app/">
          nathan orobor.website
        </a>
      </div>
      <div className="contact_btns">
        <button className="btn_email">
          <img src={email_logo} alt="icon" /> Email
        </button>
        <button className="btn_linkedin">
          <img src={linkedin_logo} alt="icon" /> LinkedIn
        </button>
      </div>
    </>
  );
}

export default Header;
