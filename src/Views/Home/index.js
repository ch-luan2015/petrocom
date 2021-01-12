import React, { useState } from 'react';
import "./Home.scss"
import { Layout } from 'antd';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Header } = Layout;

const { Footer, Content } = Layout;

var menuItem = [
  { key: 1, name: 'Giới thiệu', url: '#', icon: <MailOutlined /> },
  { key: 2, name: 'Lĩnh vực hoạt động', url: '#', icon: null },
  { key: 3, name: 'Mạng lưới', url: '#', icon: null },
  { key: 4, name: "Quan hệ cổ đông", url: '#', icon: null },
  { key: 5, name: "Truyền thông", url: '#', icon: null },
  { key: 6, name: "An sinh xã hội", url: '#', icon: null }
]
const Home = () => {

  const [current, setCurrent] = useState(0)

  function handleClick(e) {
    setCurrent(e.key);
  }

  function renderMenu(menuItem) {
    return menuItem.map((item) => {
      return <Menu.Item key={item.key} icon={item.icon} className="HeaderPage_MenuItem">
        <a href={item.href} target="_blank" rel="noopener noreferrer" >
          {item.name}
        </a>
      </Menu.Item>
    })
  }
  return (
    <Layout>
      <Header className="HeaderPage" style={{ position: 'fixed', zIndex: 1 }}>
        <div className="HeaderPage_Logo" >
          <img src="/asset/image/media/logo/logo_v2_vie.png" />
        </div>
        <Menu className="HeaderPage_Menu" theme="light" mode="horizontal" selectedKeys={[current]} onClick={handleClick} >

          {renderMenu(menuItem)}

        </Menu>
      </Header>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 96 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Home;
