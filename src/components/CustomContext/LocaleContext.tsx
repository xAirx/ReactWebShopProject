import React, { Component } from 'react';

export interface LocaleContextInterface {
	locale: string;
}

// Passing in interface for our context, and null as default
export const LocaleContext = React.createContext<LocaleContextInterface | null>(null);

/* export const LocaleContext = React.createContext('en');
Here we also pass-in a default value of ‘en’ to the context,
but you can also omit this default value if you’d like.
The createContext function returns a Provider and a Consumer component.
*/

// interface for props
export interface State {
	locale: string;
}

class LocaleProvider extends Component<{}, State> {
	constructor(props: any) {
		super(props);

		this.state = {
			locale: 'en',
		};

		this.changeLocale = this.changeLocale.bind(this);
	}

	changeLocale = () => {
		this.setState(state => {
			const newLocale = state.locale === 'en' ? 'fr' : 'en';
			return {
				locale: newLocale,
			};
		});
	};

	/*  The Provider component is used to wrap components in the tree that will need
	  access to the value from the context. Here let’s create a LocaleProvider component
	  that wraps our LocaleContext’s provider and offers a way to change the context’s locale value: */

	/* Notice how the LocaleProvider component is just a thin wrapper around our context’s Provider component.
	The value of the context is passed to the provider using the value prop and then we just render  LocaleContext’s children.

	  return (

	/*       console.log("These are the children within this.props.children",this.props.children),
	*/

	/* We pass our component’s state as the context value and from there the locale value
	and the changeLocale method to change the value will be available. */

	render() {
		const { children } = this.props;
		return (

			<LocaleContext.Provider value={this.state}>
				{/*
What even is ‘children’?

The React docs say that you can use props.children on components that represent
‘generic boxes’ and that don’t know their children ahead of time.
For me, that didn’t really clear things up. I’m sure for some,
 that definition makes perfect sense but it didn’t for me.

My simple explanation of what this.props.children does is
that it is used to display whatever you include between the opening and
closing tags when invoking a component. */}

				{children}
			</LocaleContext.Provider>
		);
	}
}

export default LocaleProvider;
