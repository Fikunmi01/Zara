import { Data } from "./heroData";
import "./Slides.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper";

export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"coverflow"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {Data.map((heroSlide, i) => (
          <div key={heroSlide.id}>
            <SwiperSlide key={heroSlide.id}>
              <div className="slides">
                <div className="slider-div">
                  <div className="slider-div-images">
                    <img
                      src={heroSlide.imageOne}
                      alt="product overview"
                      className="slide-image-one"
                    />

                    <p className="hero-description">{heroSlide.description}</p>

                    <br />

                    <p className="hero-price">${heroSlide.price}</p>

                    <img src={heroSlide.logo} alt="logo" className="logo" />

                    <span className="grain-texture">
                      <img
                        src={heroSlide.imageTwo}
                        alt="product"
                        className="slide-image-two"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
