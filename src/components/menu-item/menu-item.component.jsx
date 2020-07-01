/* eslint-disable react/prop-types */
import React,{useContext} from 'react';
import './menu-items.styles.scss';
import { ThemeContext } from 'styled-components'


const MenuItem = ({ title, img }) => (


  <div
    className="menu-item"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      /* height: '100vh', */
      color: 'white'
    }}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW </span>
    </div>
  </div>
);

export default MenuItem;
