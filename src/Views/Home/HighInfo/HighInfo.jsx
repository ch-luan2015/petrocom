import React from 'react'
import CarouselHome from '../CarouselHome/CarouselHome'
import "./HighInfo.scss"

const imgHighInfo = [
  { url: "/image/Banner/tnb0102.png" },
  { url: "/image/Banner/tnb0207a.png" },
  { url: "/image/Banner/tnb0924.png" },
  { url: "/image/Banner/tnb1130b.png" },
  { url: "/image/Banner/tnb1218.png" },

]



var settingsHighInfo = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

};

export default function HighInfo() {
  return (
    <>
      <div className="home-title"><h1 className="pv-title"><a>Thông tin nổi bật </a></h1></div>
      <CarouselHome arrayImage={imgHighInfo} settings={settingsHighInfo} widthSlide={{ width: "1280px" }} />
    </>
  )
}
