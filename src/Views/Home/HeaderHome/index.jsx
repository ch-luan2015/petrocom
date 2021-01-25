import React from "react";

import Full from "./Full/index";
import Mobile from "./Mobile/index";
import styles from "./HeaderHome.module.scss";



function HeaderHome() {
  return (
    <div className={styles.stickyTop}>
      <Full className={styles.full} />
      <Mobile className={styles.mobile} />
    </div>
  );
}

export default HeaderHome;
