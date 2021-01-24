import React, { useState, useRef } from 'react';
import { Menu } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';
import classNames from "classnames";
import PropTypes from 'prop-types';
import styles from './styles.module.scss';


var menuItem = [
  { key: 1, name: 'Giới thiệu', url: '#companyInfo', icon: < HomeTwoTone style={{ fontSize: '1.3rem', }} /> },
  { key: 2, name: 'Tin tức', url: '#newsDaily', icon: null, id: "#" },
  { key: 3, name: 'Hệ thống phân phối', url: '#distributionSystem', icon: null },
  { key: 4, name: "Tổng quan", url: '#companyOverview', icon: null },
  { key: 5, name: "Khách hàng", url: '#customer', icon: null },
  { key: 6, name: "Liên hệ", url: '#footerHome', icon: null },
]


const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
}
const HeaderFull = (props) => {

  const [current, setCurrent] = useState(0)

  function handleClick(e) {
    setCurrent(e.key);
  }


  function renderMenu(menuItem) {
    return menuItem.map((item) => {
      return <Menu.Item key={item.key} icon={item.icon} >
        <a href={item.url} rel="noopener noreferrer">
          {item.name}
        </a>
      </Menu.Item >

    })
  }

  return (
    <section className={classNames(styles.HeaderHome, props.className)}>
      <div className={styles.HeaderHome_Container}>
        <div className={styles.HeaderHome_Logo} >
          <img src="/image/media/logo/logo_v2_vie.png" />
        </div>

        <Menu className={styles.HeaderHome_Menu} theme="light" mode="horizontal" selectedKeys={[current]} onClick={handleClick} style={centerStyle} >
          {renderMenu(menuItem)}
        </Menu>

      </div>

    </section>
  );
};


HeaderFull.propTypes = {
  className: PropTypes.any,

};
export default HeaderFull;
