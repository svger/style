import { injectGlobal } from 'styled-components';

injectGlobal`
/*
CSS Reset
1. 清除浏览器的默认样式，使默认样式一致
2. 减少默认样式有可能带来的问题
3. 提供一套普适通用的基础样式
*/

/** 清除内外边距 **/
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
  /* structural elements 结构元素 */
dl,
dt,
dd,
ul,
ol,
li,
  /* list elements 列表元素 */
pre,
  /* text formatting elements 文本格式元素 */
form,
fieldset,
legend,
button,
input,
textarea,
  /* form elements 表单元素 */
th,
td /* table elements 表格元素 */
{
  margin: 0;
  padding: 0;
}

/** 设置默认字体 **/
body,
button,
input,
select,
textarea /* for ie */
{
  /*font: 12px/1.5 tahoma, arial, sans-serif;*/
  font: 12px/1.5 'Microsoft YaHei', Tahoma, Arial;
}

input,
textarea,
select {
  font-size: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

/* 将斜体扶正 */
code,
kbd,
pre,
samp {
  font-family: courier new, courier, monospace;
}

/* 统一等宽字体 */
small {
  font-size: 12px;
}

/* 小于 12px 的中文很难阅读，让 small 正常化 */

/** 重置列表元素 **/
ul,
nav,
ol {
  list-style: none;
}

/** 重置文本格式元素 **/
a,
a:hover {
  text-decoration: none;
}

sup {
  vertical-align: text-top;
}

/* 重置，减少对行高的影响 */
sub {
  vertical-align: text-bottom;
}

/** 重置表单元素 **/
legend {
  color: #000;
}

/* for ie6 */
fieldset,
img {
  border: 0;
}

/* img 搭车：让链接里的 img 无边框 */
button,
input,
select,
textarea {
  font-size: 100%;
}

/* 使得表单元素在 ie 下能继承字体大小 */
/* 注：optgroup 无法扶正 */

/* 重置 HTML5 元素 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  display: block;

  margin: 0;
  padding: 0;
}

mark {
  background: #ff0;
}

/** end reset css **/
table {
  border-spacing: 0;
  border-collapse: collapse;
}

a {
  cursor: pointer;
}

button {
  overflow: hidden;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
}

i {
  font-style: normal;
}

input[type=text],select,input{
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  border: 0 none;
  background-color:transparent;
}

input[type=search]::-webkit-search-cancel-button {
  /* 此处只是去掉默认的小× */
  -webkit-appearance: none;
}

input[type=tel]::-webkit-input-placeholder {
  direction: rtl;
}

input[type=password]::-webkit-input-placeholder {
  direction: rtl;
}

:focus {
  outline: 0;
}
`