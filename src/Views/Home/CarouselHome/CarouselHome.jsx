import React from 'react';
import "./CarouselHome.scss"
import Slider from "react-slick";
import PropTypes from 'prop-types';



const CarouselHome = ({ arrayImage, settings }) => {

  // const imgCarousel = [
  //   { name: "1banner.jpg" },
  //   { name: "123.jpg" },
  //   { name: "b-003.jpg" },
  //   { name: "banner01.jpg" },
  //   { name: "banner02.jpg" },
  // ]
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  const renderCarousel = () => {
    return arrayImage.map((item) => {
      return <div key={item.name} >
        <img src={`/image/Banner/${item.name}`} style={{ objectFit: "cover", width: "100%" }} />
      </div>
    })
  }

  return (
    <Slider {...settings} style={{ width: "1280px", margin: "0 auto" }}>
      {renderCarousel()}
    </Slider>
  );
};


CarouselHome.propTypes = {
  arrayImage: PropTypes.array,
  settings: PropTypes.data
};

export default CarouselHome;
