import React, { useState } from 'react';
import "./HeaderHome.scss"
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';


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
    <section className="HeaderHome">
      <div className="HeaderHome-Container">
        <div className="HeaderHome-Logo" >
          <img src="/image/media/logo/logo_v2_vie.png" />
        </div>
        <Menu className="HeaderHome-Menu" theme="light" mode="horizontal" selectedKeys={[current]} onClick={handleClick} >
          {renderMenu(menuItem)}
        </Menu>
      </div>

    </section>
  );
};

export default HeaderHome;
