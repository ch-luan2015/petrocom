import React from 'react';
import styles from "./Home.module.scss"
import HeaderHome from "./HeaderHome/HeaderHome"
import CarouselHome from './CarouselHome/CarouselHome';
import CompanyOverview from './CompanyOverview/CompanyOverview';
import Customer from './Customer/Customer';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import PortalContent from './PortalContent/PortalContent'
import DistributionSystem from './DistributionSystem/DistributionSystem'
import FooterHome from './FooterHome/FooterHome';

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




const Home = () => {

  return (
    <>
      <HeaderHome />
      <CarouselHome arrayImage={imgCarousel} settings={settingsBanner} widthSlide={{ width: "1280px" }} />
      <CompanyInfo />
      <PortalContent />
      <DistributionSystem />
      <CompanyOverview />
      <Customer />
      <FooterHome />
    </>
  );
};

export default Home;
