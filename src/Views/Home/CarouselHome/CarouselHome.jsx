import React from 'react';
import "./CarouselHome.scss"
import Slider from "react-slick";



const CarouselHome = () => {

  const imgCarousel = [
    { name: "1banner.jpg" },
    { name: "123.jpg" },
    { name: "b-003.jpg" },
    { name: "banner01.jpg" },
    { name: "banner02.jpg" },
  ]
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderCarousel = () => {
    return imgCarousel.map((item) => {
      return <div key={item.name}>
        <h3><img src={`/image/Banner/${item.name}`} style={{ objectFit: "cover", width: "100%" }} /></h3>
      </div>
    })
  }

  return (
    <Slider {...settings}>
      {renderCarousel()}
    </Slider>
  );
};

export default CarouselHome;
