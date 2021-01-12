import React, { useState } from 'react';
import "./HeaderHome.scss"
import { Layout } from 'antd';
import { Image } from 'antd';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const { Header } = Layout;

var menuItem = [
  { name: 'Giới thiệu', url: '#', icon: <MailOutlined /> },
  { name: 'Lĩnh vực hoạt động', url: '#', icon: null },
  { name: 'Mạng lưới', url: '#', icon: null },
  { name: "Quan hệ cổ đông", url: '#', icon: null },
  { name: "Truyền thông", url: '#', icon: null },
  { name: "An sinh xã hội", url: '#', icon: <MailOutlined /> }
]
const HeaderHome = () => {

  const [current, setCurrent] = useState(0)

  function handleClick(e) {
    setCurrent(e.key);
  }

  function renderMenu(menuItem) {
    return menuItem.map((item) => {
      console.log("icon", item.icon);
      return <Menu.Item key={item.name} icon={item.icon}>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </Menu.Item>
    })
  }

  return (
    <Layout>
      <Header>
        <Row justify="space-between" align="bottom">
          <Col flex={2}>
            <Image
              preview={false}
              width={250}
              src="/asset/image/media/logo/logo_v2_vie.png" />
          </Col>
          <Col flex={3}>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
              {renderMenu(menuItem)}
            </Menu></Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default HeaderHome;
