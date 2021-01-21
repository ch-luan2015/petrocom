import React from "react";

import Logo from "./logo.svg";

import styles from "./styles.module.scss";


const HeaderMobile = () => {
  return (
    <div>
      <p>This header mobile</p>
      <a href="/">
        <img src={Logo} width={30} style={{ width: 30 }} />
      </a>
    </div>
  );
}

export default HeaderMobile;
