import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
/* import { darkTheme, lightTheme } from './components/shared/themes.ts';
 */import {GlobalStyle}from '../src/components/shared/global';
 import { darkTheme, lightTheme } from '../src/components/shared/themes';
//Global decorators are typically applied in the Storybook config files, and component/story decorators are applied in the story file.
//Here is an example of a global decorator which centers every story in the .storybook/preview.js:

addDecorator(storyFn => <div style={{ color:'red', textAlign: 'center' }}>{storyFn()}</div>);

addDecorator((story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}> <div style={{ padding: "3rem" }}>{story()}</div>
      </ThemeProvider>  </>
  ));