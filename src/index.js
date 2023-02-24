import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import FontStyles from "./assets/fonts/fonts";

const Global = createGlobalStyle`
* {
  font-family: 'Inconsolata', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const theme = {
    colors: {
        primary: 'green',
        secondary: 'red'
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 768px) and (min-width: 425px)'
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
      <FontStyles/>
      <Global/>
          <App />
  </ThemeProvider>
);

