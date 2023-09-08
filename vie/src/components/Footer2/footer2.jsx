import React from "react";
import Link from "next/link";
const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <img src="/img/logo.png" alt="" />
              </a>
              <p>
              Stay Connected with Fan Fusion Agency: Your Partner in Making Brilliance. 
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Privacy Policy</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/privacy/privacy/">Link</Link>
                </li>

              </ul>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-6">
            <div className="item-clumn links sm-mb50">
              <h5 className="title">Links</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Support</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Privacy</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Setting</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="0">My Account</a>
                </li>
              </ul>
            </div>
          </div> */}


          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>4727 Beverly Blvd, <br></br> Los Angeles, CA</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hello@fanfusion.net</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+1 (323) 391-7011</p>
                  </div>
                </li>
                <li>
                <div className="social mt-30">
                {/* <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://www.instagram.com/fanfusionhq">
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>© 2023 Fan Fusion. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </footer>
  );
};

export default Footer2;
