/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
/* import { applyMiddleware, createStore } from 'redux'; */
import './homepage.styles.scss';

import * as Sentry from '@sentry/browser';
// or using CommonJS
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import Homepage from './HomepageComponent';

LogRocket.init('8ckc5m/my-master-project-dev');
// after calling LogRocket.init()
setupLogRocketReact(LogRocket);

/* import TriggerSentry from './TriggerSentry'; */
Sentry.configureScope(scope => {
  scope.setExtra('sessionURL', LogRocket.sessionURL);
});

LogRocket.getSessionURL(sessionURL => {
  Sentry.configureScope(scope => {
    scope.setExtra('sessionURL', sessionURL);
  });
});

// after calling LogRocket.init()
/* setupLogRocketReact(LogRocket);
 */

  Sentry.init({
    dsn: 'https://0279e0a3aae840339f4a711848494919@o392672.ingest.sentry.io/5240589',
    beforeSend(event, hint) {
      // Check if it is an exception, and if so, show the report dialog
      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    }
  });

function App() {
  const methodDoesNotExist = () => {
    console.log('wtfsss');
    methodExistsNot();
  };

  return (
    <div>
      <h1>Webshop - DevelopmentServer</h1>
      <Homepage />
      <button onClick={methodDoesNotExist}>Test Sentry</button>
    </div>
  );
}

export default App;
