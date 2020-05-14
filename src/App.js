import React from 'react';
import './App.css';
import Homepage from './HomepageComponent';
import './homepage.styles.scss';
const Sentry = require('./log');
import TriggerSentry from './TriggerSentry';


function App() {
  return (
    <div>
      <h1>Webshop - Project</h1>
      <Homepage />
      <TriggerSentry />
    </div>
  );
}

export default App;