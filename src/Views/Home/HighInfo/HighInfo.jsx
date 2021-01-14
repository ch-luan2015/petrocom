import React from 'react'
import CarouselHome from '../CarouselHome/CarouselHome'
import "./HighInfo.scss"
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import CardInfo from './CardInfo/CardInfo';




// const bgImage = {
//   bg1: ""
// }

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

      <div style={{ width: "100%", margin: "1rem 0" }}>
        <Button type="danger" shape="round" size="large" >
          Xem Thêm <RightOutlined />
        </Button>
      </div>
      <section className="highInfo">
        <div className="site-card-wrapper highInfo_infoGrid">
          <Row gutter={16}>
            <Col span={8} className="news-list">
              <a href="#" className="top-news">
                <CardInfo title="Tin PVOIL" className="top-news">
                  <figure>
                    <img src="/image/News/dmcc_vie.jpg" style={{ objectFit: "cover", width: "100%" }} />
                    <figcaption>
                      <time>19/08/2020</time>
                      <h3 className="name">Thông báo về trang mạng https://pvoildmcc.com liên quan đến Công ty gọi là &quot;PETROVIETNAM OIL DMCC&quot;</h3>
                    </figcaption>
                  </figure>


                </CardInfo>
              </a>

            </Col>
            <Col span={8}>
              <CardInfo />
            </Col>
            <Col span={8}>
              <CardInfo />
            </Col>

          </Row>
        </div>
      </section>

    </>
  )
}
