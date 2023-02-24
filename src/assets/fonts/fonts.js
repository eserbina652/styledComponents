import {createGlobalStyle} from "styled-components";
import InconsolataWoff from './Inconsolata/Inconsolata-Regular.woff'
import InconsolataWoff2 from './Inconsolata/Inconsolata-Regular.woff2'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataWoff2}) format("woff2"), 
    url(${InconsolataWoff}) format('woff');
  }  
`
export default FontStyles;