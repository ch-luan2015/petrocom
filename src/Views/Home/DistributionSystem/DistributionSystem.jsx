import React from 'react'
import Slider from "react-slick";
import PropTypes from 'prop-types';
import "./DistributionSystem.scss";

const disSystem = [
  { url: "/image/Banner/1banner.jpg" },
  { url: "/image/Banner/123.jpg" },
  { url: "/image/Banner/b-003.jpg" },
  { url: "/image/Banner/banner01.jpg" },
  { url: "/image/Banner/banner02.jpg" },
]
const settingsDisSystem = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};


function DistributionSystem() {
  const renderCarousel = () => {
    return disSystem.map((item) => {
      return <div key={item.url} >
        <img src={`${item.url}`} style={{ objectFit: "cover", width: "100%", borderRadius: "8px" }} />
      </div>
    })
  }
  return (

    <Slider {...settingsDisSystem} style={{ margin: "0 auto", borderRadius: "8px" }} >
      {renderCarousel()}
    </Slider>

  )
}


// DistributionSystem.propTypes = {
//   arrayImage: PropTypes.array,
//   settings: PropTypes.data,
//   style: PropTypes.object,
//   widthSlide: PropTypes.object,
// };

export default DistributionSystem;
