/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

export class SentryButton extends Component {
  render() {
    const methodDoesNotExist = () => {
      console.log('wtf');
      methodExistsNot();
    };

    return (
      <div>
        <button onClick={methodDoesNotExist}>Test Sentry</button>
      </div>
    );
  }
}

export default SentryButton;
