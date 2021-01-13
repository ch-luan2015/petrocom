import React, { useState } from 'react';
import "./HeaderHome.scss"
import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Header } = Layout;

var menuItem = [
  { key: 1, name: 'Giới thiệu', url: '#', icon: <MailOutlined /> },
  { key: 2, name: 'Lĩnh vực hoạt động', url: '#', icon: null },
  { key: 3, name: 'Mạng lưới', url: '#', icon: null },
  { key: 4, name: "Quan hệ cổ đông", url: '#', icon: null },
  { key: 5, name: "Truyền thông", url: '#', icon: null },
  { key: 6, name: "An sinh xã hội", url: '#', icon: null }
]
const HeaderHome = () => {

  const [current, setCurrent] = useState(0)

  function handleClick(e) {
    setCurrent(e.key);
  }

  function renderMenu(menuItem) {
    return menuItem.map((item) => {
      return <Menu.Item key={item.key} icon={item.icon}>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </Menu.Item>
    })
  }

  return (
    <Header className="HeaderPage" style={{ position: "fixed", zIndex: 1, backgroundColor: "white" }}>
      <div className="HeaderPage__Logo" >
        <img className="logo" src="/asset/image/media/logo/logo_v2_vie.png" />
      </div>
      <Menu className="HeaderPage__Menu" theme="light" mode="horizontal" selectedKeys={[current]} onClick={handleClick} >
        {renderMenu(menuItem)}
      </Menu>
    </Header>
  );
};

export default HeaderHome;