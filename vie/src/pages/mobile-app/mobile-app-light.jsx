/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import LightTheme from "../../layouts/Light";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import Intro6 from "../../components/Intro6/intro6";
import Clients3 from "../../components/Clients3/clients3";
import Services7 from "../../components/Services7/services7";
import Services5 from "../../components/Services5/services5";
import Screenshots from "../../components/Screenshots/screenshots";
import Progress from "../../components/Progress/progress";
import VideoWithTeam from "../../components/Video-with-team/video-with-team";
import PricePackages from "../../components/Price-packages/price-packages";
import Testimonials from "../../components/Testimonials/testimonials";
import DownloadApp from "../../components/Download-app/download-app";
import Blogs2 from "../../components/Blogs2/blogs2";
import Footer2 from "../../components/Footer2/footer2";
import Numbers from "../../components/Numbers/numbers";
import FormComponent from '../../components/Form/FormComponent'
import MinimalArea from "../../components/Minimal-Area/minimal-area";
const MobileAppLight = () => {

  const ref = React.useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }
  const navbarRef = React.useRef(null);


  React.useEffect(() => {
    var navbar = navbarRef.current;
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
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LightTheme mobileappstyle>
        <NavbarMobileApp nr={navbarRef} ref={ref} theme="themeL" />
        <header className="mobile-app valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="caption">
            <div className="sub-title mb-5">
                <h6>OnlyFans Management Agency</h6>
              </div>
              <h1 className="mb-20">
                Your #1 OnlyFans Agency
              </h1>
              <p>
                Welcome to 
                Fan Fusion: we are a Los Angeles based agency. We&apos;re not just an agency; we&apos;re your partners, your guides, and your supporters. 
                Our goal is to help you excel in the content world, achieve your targets, and GROW your earnings. 🚀
              </p>
              <br></br>
              <div className="fans">
                <img src="/img/circle-photos.png" ></img>

              </div>
              <div className="butons mt-10">
                <button onClick={handleClick} className="butn-gr rounded buton">
                  <span>Let&apos;s work together</span>
                  {/* <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  </i> */}
                </button>


              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="img">
              <img src="/img/screenshots/main.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
        <Numbers />
        {/* <Services7 lightTheme /> */}
        {/* <Services5 /> */}
        <Screenshots />
        <Progress />
        {/* <DownloadApp /> */}
        {/* <VideoWithTeam /> */}
        {/* <PricePackages ref={ref} /> */}
        {/* <Testimonials /> */}
        <VideoWithTeam />
        <MinimalArea/>
        <FormComponent id="contact1" ref={ref}/>
        <Clients3 />
        <Footer2 />
      </LightTheme>
    </>
  );
};

export default MobileAppLight;
