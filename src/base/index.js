import { injectGlobal } from 'styled-components';

import './reset';

injectGlobal`
html, body {
  width: 100%;
  min-height: 100%;
}
html {
  font-size: 100px;
}
body {
  font: 0.16rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
}
span, div, p, footer, article, nav, label {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`