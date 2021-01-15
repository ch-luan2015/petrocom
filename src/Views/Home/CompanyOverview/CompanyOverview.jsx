import React from 'react'
import { Row, Col } from 'antd';
import './CompanyOverview.scss';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
export default function CompanyOverview() {
  return (
    <section className="CompanyOverview">
      <div className="CompanyOverview_Grid">
        <div className="Grid-Title pv-title">
          <h1>Tổng quan PPV</h1>
        </div>
        <Row gutter={[32, 32]} style={{ maxWidth: "1280px", margin: "3rem auto" }}>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>

          </Col>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>

          </Col>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>

          </Col>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>
          </Col>

        </Row>
        <Row gutter={[32, 32]} style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>

          </Col>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>

          </Col>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>

          </Col>
          <Col span={6} >
            <figure>
              <div className="img" style={{}}>
                <img className="img-fluid" src="/image/News/home_icon_1.png" alt="61.585 tỷ VNĐ" title="61.585 tỷ VNĐ" style={{}} />
              </div>
              <figcaption style={{}}>
                <h5 style={{}}>80.294 tỷ VNĐ</h5>
                <p style={{}}>doanh thu năm 2019</p>
              </figcaption>
            </figure>
          </Col>
        </Row>

        <div style={{ width: "100%", margin: "1rem 0" }}>
          <Button type="danger" shape="round" size="large" >
            Xem Thêm <RightOutlined />
          </Button>
        </div>
      </div>
    </section>
  )
}
