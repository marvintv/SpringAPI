/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const NavbarMobileApp = (    
  
  
  
  
  
  
  { lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={handleMobileDropdown}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/mobile-app/pricing-plan-dark">
                <a className="nav-link">About</a>
              </Link>
            </li> */}

            <li className="nav-item">
              <Link href="/about/about">
              <a className="nav-link" >
                About
              </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/privacy/privacy">
              <a className="nav-link" >
                Privacy Policy
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/application">
              <a className="nav-link">
                Application
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobileApp;
