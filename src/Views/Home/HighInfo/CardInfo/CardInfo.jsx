import React from 'react'
import { Card } from 'antd';
import PropTypes from 'prop-types';



const titleStyle = {
  lineHeight: "0.5rem",
  textDecoration: "none",
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",
  fontSize: "1.1rem",
  fontWeight: "600",
  paddingLeft: "0.8rem",
  color: "#48626f",
  borderLeft: "8px solid #eb2329",
  backgroundColor: "#f5f5f5"
};

export default function CardInfo({ title, ...props }) {
  return (

    <Card title={title} bordered={false} headStyle={titleStyle} >
      {props.children}
    </Card>

  )
}

CardInfo.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string

}
