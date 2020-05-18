import React from 'react';

// we are using a functional component here since we arent going to have any state in this component or lifecycle methods.
const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <div className="title">HATS</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">JACKETS</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">SHOES</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">WOMENS</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">MENS</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

// we are exporting as default because we are not goin to export anything from our homepage component file.
export default HomePage;
