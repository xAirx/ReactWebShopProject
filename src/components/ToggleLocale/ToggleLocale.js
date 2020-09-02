import React from 'react';

import { LocaleContext } from '../CustomContext/LocaleContext.tsx';

const ToggleLocale = () => (
	/* The Consumer component uses the render prop pattern and expects a function as
  its children prop that will receive the value from the context.
  We can then access the context’s values and call the methods that it makes available.
  With this in place, we can toggle the app’s greeting message between Welcome and Bienvenue.
   */

	/* access the values from the context using the Consumer component. */
	<LocaleContext.Consumer>
		{localeVal => (
			<button type="button" onClick={localeVal.changeLocale}>
				Change language
			</button>
		)}
	</LocaleContext.Consumer>
);

export { ToggleLocale };
