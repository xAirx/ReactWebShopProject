import React from 'react';
import './App.css';
import * as Sentry from '@sentry/node';

import Homepage from './HomepageComponent';
import './homepage.styles.scss';
// or using CommonJS
// const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://0279e0a3aae840339f4a711848494919@o392672.ingest.sentry.io/5240589' });
/* import TriggerSentry from './TriggerSentry'; */

function App() {
  return (
    <div>
      <h1>Webshop - Projectx</h1>
      <Homepage />
    </div>
  );
}

export default App;
