import React from 'react'
const Sentry = require('./log');

function TriggerSentry() {

    // send an event to Sentry
Sentry.captureMessage('my message', 'warning');

// sent an error - automatically sends a callstack
try {
	functionThatFailed();
} catch (error) {
	Sentry.captureException(error);
}

    return (
        <h1> Trigger Sentry Component </h1>
    )
}

export default TriggerSentry
