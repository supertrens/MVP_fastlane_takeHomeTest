import React  from'react'
import Link   from 'gatsby-link'
import logo from "../img/logo.png";

const Header = () => (
  <header className="header">
    <div className="logo-box">
      <img src={logo} alt="MVP Fastlane Logo" className="logo" />
    </div>
    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">MVP Fastlane</span>
        <span className="heading-primary-sub">Level Up</span>
      </h1>
    </div>
  </header>
);

export default Header
