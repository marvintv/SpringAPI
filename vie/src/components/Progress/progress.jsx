import React from "react";

const Progress = () => {
  return (
    <section className="app-process section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> We&apos;re easy to work with
                <span className="right"></span>
              </h6>
              <h3>Simple 3-step process</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-note2"></span>
              <h5>Apply to us</h5>
              <span className="step-number">Step 01</span>
              <p>
                We have a simple application process to get started with us. We have specific requirements for you to work with us.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-user"></span>
              <h5>Onboarding</h5>
              <span className="step-number">Step 02</span>
              <p>
              
Our onboarding process ensures a seamless transition into our agency by analyzing your content, tailoring a personalized strategy, and providing comprehensive guidance on content creation, platform navigation, engagement, and promotion techniques.  </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center">
              <span className="icon pe-7s-rocket"></span>
              <h5>Get Results</h5>
              <span className="step-number">Step 03</span>
              <p>
              Experience remarkable results as your earnings soar to new heights. Join us today and unlock a journey you won&apos;t regret.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
