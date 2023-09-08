import React from "react";
import LightTheme from "../../layouts/Light";
import PageHeader from "../../components/Page-header/page-header";
import Footer2 from "../../components/Footer2/footer2";
import PrivacyDetails from "../../components/Blog-details/privacy-details";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";

const Privacy = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [navbarRef]);
  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <NavbarMobileApp nr={navbarRef} lr={logoRef} theme="themeL" />
      {/* <Navbar nr={navbarRef} lr={logoRef} theme="themeL" /> */}
      <PageHeader
        title="Privacy policy"
        paragraph="All the most current news and events of our creative team."
      />
          <PrivacyDetails theme="light" blog={"blog"} />
          <Footer2 />
    </LightTheme>
  );
};

export default Privacy;
