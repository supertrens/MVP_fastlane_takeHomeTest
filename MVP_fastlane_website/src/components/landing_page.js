import React  from'react'
import Link   from 'gatsby-link'
import logo from "../img/logo.png";


const LandingPage = () => (
  <header className="header">
    <div className="header__logo-box">
      <img src={logo} alt="MVP Fastlane Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">MVP Fastlane</span>
        <span className="heading-primary--sub">Level Up</span>
      </h1>

      <Link to="/page-2/" className="btn btn--white btn--animated">
        Our Team
      </Link>
    </div>
  </header>
);

export default LandingPage
