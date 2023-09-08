import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Parallax]);

const Screenshots = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, [load]);
  const paginationRef = React.useRef(null);
  return (
    <section className="secreen-shots section-padding-b">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Reviews and Earnings
                <span className="right"></span>
              </h6>
              <h2>This could be you soon...</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-container">
              {load ? (
                <Swiper
                  speed={1000}
                  spaceBetween={40}
                  loop={true}
                  slidesPerView={3}
                  pagination={{
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  className="swiper-wrapper"
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 3,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/screenshots/crazy.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/screenshots/screen1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/screenshots/earnings3.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/screenshots/earnings2.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/screenshots/review.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>


                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/screenshots/proof3.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                ""
              )}
              <div className="swiper-pagination" ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
