import React from 'react';
import './App.css';
import Homepage from './HomepageComponent';
import './homepage.styles.scss';
import * as Sentry from '@sentry/node';
// or using CommonJS
// const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://9f680323fb824097b101a1ec5c11c83d@o392677.ingest.sentry.io/5240593' });

function App() {
  myUndefinedFunction();
  return (
    <div>
      <h1>Webshop - Project - Test-testxx</h1>
      <Homepage />
    </div>
  );
}

export default App;