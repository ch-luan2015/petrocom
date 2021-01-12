import React from 'react';
import "./HeaderHome.module.css"



const HeaderHome = () => {


  return (
    <div className="header-top" style={{ backgroundImage: 'url("/asset/image/bg-4.jpg")' }}>
      <nav>
        <div id="logo">
          <h1 ><a href="index.html">Oil Rig</a></h1>
        </div>
        <label htmlFor="drop" className="toggle">Menu</label>
        <input type="checkbox" id="drop" />
        <ul className="menu mt-2">
          <li className="active"><a href="index.html">Home</a></li>
          <li className="mx-lg-3 mx-md-2 my-md-0 my-1"><a href="about.html">About</a></li>
          <li><a href="service.html">Services</a></li>
          <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
            <label htmlFor="drop-2" className="toggle toogle-2">Dropdown <span className="fa fa-angle-down" aria-hidden="true" />
            </label>
            <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true" /></a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li><a href="gallery.html" className="drop-text">Gallery</a></li>
              <li><a href="blog.html" className="drop-text">Blog</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>
    </div >
  );
};

export default HeaderHome;
