import React from 'react';
import './App.css';
import Homepage from './HomepageComponent';
import './homepage.styles.scss';
const Sentry = require('./log');

// send an event to Sentry
Sentry.captureMessage('my message', 'warning');

// sent an error - automatically sends a callstack
try {
	functionThatFailed();
} catch (error) {
	Sentry.captureException(error);
}

function App() {
  return (
    <div>
      <h1>Webshop - Project</h1>
      <Homepage />
    </div>
  );
}

export default App;