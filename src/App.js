/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';

import './App.css';
/* import { applyMiddleware, createStore } from 'redux'; */

// / Importing themes and themeprovider
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/shared/themes';
import {GlobalStyle}from '../src/components/shared/global';
import Homepage from './components/pages/homepage/homepage.component';
import SentryComponent from './SentryButton';

/* require('dotenv').config({ path: require('find-config')('.env') });
 */
require('dotenv').config();


function App() {

  console.log('REACT_APP_SERVER_MODE', process.env.REACT_APP_SERVER_MODE);

  return (
    /* Themeprovider theme is set here and available within themeprovider */

    <ThemeProvider theme={darkTheme}>

      <div>
     {/*  // Importing global styles for entire project. */}
      <GlobalStyle />
        <h1>Webshop - Development</h1>
        <Homepage />
        {/*       {process.env.NODE_ENV === 'development' ? <SentryComponent /> : ''}
         */}
        {process.env.REACT_APP_SERVER_MODE === 'development' ? <SentryComponent /> : ''}
      </div>
    </ThemeProvider>
  );
}

/* require('dotenv').config({ path: require('find-config')('.env') });
 */

export default App;
