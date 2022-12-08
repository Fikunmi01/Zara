import React from "react";
import Slide from "../components/Slides";
// import { Data } from "../components/heroData";
// import { Link } from 'react-router-dom'
// import { Swiper, SwiperSlide } from "swiper/react";
import "./landingpage.css";
import Footer from "../components/footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Autoplay, EffectCoverflow } from "swiper";
import Navbar from "../components/navbar";

export default function LandingPage() {
  // const [toggleMenu, setToggleMenu] = React.useState(false)
  // const [search, setSearch] =React.useState(false)

  const menu = {
    height: "35rem",
    paddingBottom: "11.4%",
    paddingTop: "4%",
    backgroundColor: "#e5e5e5",
    top: "13rem",
    width: "100%",
    left: "0%",
    position: "absolute",
    zIndex: "1",
  };

  return (
    <div className="landp">
      <div className="bgOpa">
        <img src="../images/heroImgTwo.png" alt="phoneBg" />
      </div>

      <div className="ssa">
        <Slide />
      </div>

      <div className="ekd">
        <Navbar />
      </div>

      <Footer />
    </div>
  );
}
