import React from 'react';
import "./Home.scss"
import HeaderHome from "./HeaderHome/HeaderHome"
import CarouselHome from './CarouselHome/CarouselHome';


const imgCarousel = [
  { name: "1banner.jpg" },
  { name: "123.jpg" },
  { name: "b-003.jpg" },
  { name: "banner01.jpg" },
  { name: "banner02.jpg" },
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
const Home = () => {

  return (
    <>
      <HeaderHome />
      <CarouselHome arrayImage={imgCarousel} settings={settingsBanner} />
    </>
  );
};

export default Home;
