import React from 'react';
import "./HeaderHome.scss"

const HeaderHome = () => {


  return (
    <>

      <div className="sticky-section">
        <div id="logo">W3Codepen</div>

        <nav>
          <a href="#JavaScript">JavaScript</a>
          <a href="#CSS">CSS</a>
          <a href="#HTML">HTML</a>
          <a href="#">Home</a>
        </nav>
      </div>

      <div className="content">
        <div>
          <h1>Sticky Navbar Tutorial</h1>
          <p>Sticky positioned elements is a combination of relative and fixed positioning.  Lets understand what that means.  When a element is positioned as sticky with CSS3, a threshold value is also added along it. Initially the element behaves like a normal Relative positioned element. Now as you scroll your webpage, when the page reaches the set threshold the element gets stick to that positioned and so the position behavior changes from relative to fixed.</p>
          <h3> Introduction</h3>
          <h3>HTML HyperText Markup Language</h3>
          <h3>CSS -- Cascading StyleSheet</h3>
          <p>Sticky position is relatviely new to CSS. This is just a hybrid form of relative and fixed position which changes at a preset threshold.</p>
          <h3>JS -- JavaScript</h3>
          <p>This tutorial teaches the development of sticky navigation bar with just HTML and CSS. We will be making no use of JavaScript at all. Though most web developers use JavaScript for sticky navigation menu since the sticky concept on
          CSs is relatively new.</p>
          <h3> Web Development Introduction</h3>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
