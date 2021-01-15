import React from 'react'
import CarouselHome from '../CarouselHome/CarouselHome'
import "./HighInfo.scss"
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import CardInfo from './CardInfo/CardInfo';




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
    <section className="HighInfo">
      <div className="home-title">
        <h1 className="pv-title">
          Thông tin nổi bật
        </h1>
      </div>

      <CarouselHome arrayImage={imgHighInfo} settings={settingsHighInfo} widthSlide={{ width: "1280px" }} />

      <div style={{ width: "100%", margin: "2rem 0" }}>
        <Button type="danger" shape="round" size="large" >
          Xem Thêm <RightOutlined />
        </Button>
      </div>
      <section className="HighInfo-News">
        <div className="site-card-wrapper HighInfo_InfoGrid">
          <Row gutter={[32, 32]}>
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
            <Col span={8} className="news-list">
              <a href="#" className="top-news">
                <CardInfo title="Tin liên quan" className="top-news">
                  <figure>
                    <img src="/image/News/20210111-tlq-002-ok.jpg" style={{ objectFit: "cover", width: "100%" }} />
                    <figcaption>
                      <time>19/08/2020</time>
                      <h3 className="name">Thông báo về trang mạng https://pvoildmcc.com liên quan đến Công ty gọi là &quot;PETROVIETNAM OIL DMCC&quot;</h3>
                    </figcaption>
                  </figure>
                </CardInfo>
              </a>
            </Col>
            <Col span={8} className="news-list">
              <a href="#" className="top-news">
                <CardInfo title="Thông cáo báo chí" className="top-news">
                  <figure>
                    <img src="/image/News/home_3.png" style={{ objectFit: "cover", width: "100%" }} />
                    <figcaption>
                      <time>19/08/2020</time>
                      <h3 className="name">Thông báo về trang mạng https://pvoildmcc.com liên quan đến Công ty gọi là &quot;PETROVIETNAM OIL DMCC&quot;</h3>
                    </figcaption>
                  </figure>
                </CardInfo>
              </a>
            </Col>
          </Row>
        </div>
      </section>

    </section>
  )
}
