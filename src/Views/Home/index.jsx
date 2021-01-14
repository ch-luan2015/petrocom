import React from 'react';
import "./Home.scss"
import HeaderHome from "./HeaderHome/HeaderHome"
import CarouselHome from './CarouselHome/CarouselHome';
import HighInfo from './HighInfo/HighInfo';


const imgCarousel = [
  { url: "/image/Banner/1banner.jpg" },
  { url: "/image/Banner/123.jpg" },
  { url: "/image/Banner/b-003.jpg" },
  { url: "/image/Banner/banner01.jpg" },
  { url: "/image/Banner/banner02.jpg" },
]
var settingsBanner = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const imgBrand = [
  { url: "/image/Brand/1.jpg" },
  { url: "/image/Brand/2.jpg" },
  { url: "/image/Brand/3.jpg" },
  { url: "/image/Brand/4.jpg" },
  { url: "/image/Brand/5.jpg" },
  { url: "/image/Brand/6.jpg" },
  { url: "/image/Brand/7.jpg" },
  { url: "/image/Brand/8.jpg" },
  { url: "/image/Brand/9.jpg" },
  { url: "/image/Brand/10.jpg" },

]

var settingsBrand = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  variableWidth: true
};



const Home = () => {

  return (
    <>
      <HeaderHome />
      <CarouselHome arrayImage={imgCarousel} settings={settingsBanner} widthSlide={{ width: "960px" }} />
      <HighInfo />
      <CarouselHome arrayImage={imgBrand} settings={settingsBrand} style={{ padding: "10px" }} widthSlide={{ width: "100%" }} />
    </>
  );
};

export default Home;
