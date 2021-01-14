import React from 'react'
import { Card } from 'antd';

// import './CardInfo.scss'


const titleStyle = {
  lineHeight: "0.5rem",
  textDecoration: "none",
  display: "flex",
  alignItem: "flex-top",
  justifyContent: "space-between",
  fontSize: "1.1rem",
  fontWeight: "600",
  paddingLeft: "0.8rem",
  color: "#48626f",
  borderLeft: "8px solid #eb2329",
  backgroundColor: "#f5f5f5"
};

export default function CardInfo() {
  return (

    <Card title="Thông cáo báo chí" bordered={false} headStyle={titleStyle}>
      Thông báo về trang mạng https://pvoildmcc.com liên quan đến Công ty gọi là &quot;PETROVIETNAM OIL DMCC&quot;
    </Card>

  )
}
