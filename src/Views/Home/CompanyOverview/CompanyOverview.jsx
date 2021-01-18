import React from 'react'
import { Row, Col } from 'antd';
import './CompanyOverview.scss';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';




var aOverView = [
  {
    img: "/image/News/home_icon_1.png",
    title: "80.294 tỷ VNĐ",
    caption: "doanh thu năm 2019"
  },
  {
    img: "/image/News/home_icon_2.png",
    title: "5.762",
    caption: "nhân viên"
  },
  {
    img: "/image/News/home_icon_3.png",
    title: "10.342 tỷ VNĐ",
    caption: "vốn điều lệ"
  },
  {
    img: "/image/News/home_icon_4.png",
    title: "952.000 m3",
    caption: "Tổng sức chứa kho xăng dầu"
  },
  {
    img: "/image/News/home_icon_5.png",
    title: "3,2 triệu m3, tấn/năm",
    caption: "Phân phối xăng dầu, chiếm 20% thị phần"
  },
  {
    img: "/image/News/home_icon_6.png",
    title: "580",
    caption: "Cửa hàng xăng dầu trực thuộc"
  }
]


export default function CompanyOverview() {

  const renderItemView = () => {
    return aOverView.map((item, index) => {
      return (
        <Col span={8} key={index}>
          <figure className="ViewItem">
            <div className="ViewItem-Logo" >
              <img src={item.img} alt={item.img} title={item.img} />
            </div>
            <figcaption className="ViewItem-Caption">
              <h5 className="ViewItem-Caption__Title">{item.title}</h5>
              <p className="ViewItem-Caption__Caption">{item.caption}</p>
            </figcaption>
          </figure>
        </Col>
      )
    })
  }
  return (
    <section className="CompanyOverview" style={{ backgroundImage: 'url("./image/media/home_bg_6.png")' }}>
      <div className="CompanyOverview_Grid">
        <div className="Grid-Title pv-title">
          <h1>Tổng quan PPV</h1>
        </div>
        <Row gutter={[32, 32]} style={{ maxWidth: "1280px", margin: "3rem auto" }}>
          {renderItemView()}
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
