import React from 'react'
import { Row, Col } from 'antd';
import './Information.scss'
export default function Information() {
  return (
    <section className="Information">
      <Row gutter={[32, 32]} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Col span={16} >
          <div className="Information-Left">
            <h1>Công Ty Cổ Phần Thương Mại Dịch Vụ Dầu Khí Hải Phát</h1>
            <p>Được thành lập từ tháng 01/2015, tọa lạc tại địa chỉ 26E, Khu phố 1, phường Quang Vinh, thành phố Biên Hòa, tỉnh Đồng Nai.</p>
            <p>Hoạt động trong lĩnh vực bán buôn, bán lẻ xăng dầu nhớt. Với đội ngũ nhân viên kinh doanh giàu kinh nghiệm trong lĩnh vực kinh doanh xăng dầu, hoạt động theo phương châm chất lượng và uy tín luôn đặt lên hàng đầu, chúng tôi cam kết cung cấp cho khách hàng nguồn xăng dầu đảm bảo chất lượng và số lượng. Nguồn xăng dầu cung cấp cho khách hàng được lấy trực tiếp từ các kho của nhà nước như: Petrolimex, Saigon Petro, Petimex, PV Oil,…</p>
            <p>Để đảm bảo chất lượng nguồn hàng, ngoài ra khách hàng hoàn toàn yên tâm về phương tiện vận chuyển xăng dầu, hệ thống barem bồn chuẩn đảm bảo về số lượng cung cấp cho khách hàng, tạo dựng niềm tin vào Hải Phát ngay từ lần hợp tác đầu tiên.</p>
            <p>Ngoài ra, Hải Phát hiện đang là nhà nhập khẩu và phân phối độc quyền sản phẩm nhớt FORGE – Sản phẩm của ÚC – được sản xuất và đóng gói tại Singapore phù hợp với các phương tiện và thiết bị trong lĩnh vực vận tải, tàu thuyền và công trình xây dựng với chất lượng tốt và giá cả hợp lý phù hợp với thị trường Việt Nam.</p>
          </div>


        </Col>
        <Col span={8}>
          <div className="Information-Right">
            <div className="Information__OilPrice">



            </div>
            <div className="Information__Video">
              <iframe loading="lazy" title="Forge Lubricant - TechKool" width={1020} height={574} src="https://www.youtube.com/embed/s_AXbAaTT1o?feature=oembed" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://www.youtube.com/embed/s_AXbAaTT1o?feature=oembed" __idm_frm__={1897} className="lazyloaded" data-was-processed="true" />
            </div>
          </div>

        </Col>
      </Row>
    </section>
  )
}
