/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import LightTheme from "../../layouts/Light";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
import Footer2 from "../../components/Footer2/footer2";
import FormComponent from "../../components/Form/FormComponent";
import HubspotForm from 'react-hubspot-form'
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";

const Application = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
      <NavbarMobileApp nr={navbarRef} lr={logoRef} theme="themeL"/>
      <ContactHeader blackStar />
      <div className="main-content">
        <div className="form-padding">
        <HubspotForm
          portalId='43672585'
          formId='d4c61986-2e45-4e39-b4ee-eee75bf618f7'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
          />

        </div>
        <div className="map" id="ieatmaps">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Los%20Angeles%20,CA%20+(Fan%20Fusion)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            loading="lazy"
          ></iframe>
        </div>
        <Footer2 />
      </div>
    </LightTheme>
  );
};

export default Application;
