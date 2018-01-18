import { css } from 'styled-components';

export const ellipsis = () => css`
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const background = (start = '#ffffff', end = '#000000') => css`
  background: ${end};
  /* Saf4+, Chrome */
  background-image: -webkit-gradient(linear, left top, left bottom, from(${start}), to(${end}));
  background-image: linear-gradient(${start}, ${end});
`;

export const border = (width = '1px', color = '#dddddd', scale = '.5') => css`
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: ${width} solid ${color};
  transform: scaleY(${scale});
  transform-origin: 0 0;
`;

export const image = (width, url, px = 'center', py = 'center') => css`
  background: url(${url}) no-repeat;
  background-size: ${width} auto;
  background-position: ${px} ${py};
`;

export const flex = (justify = 'center', align = 'center') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const size = (width, height) => css`
  width: ${width};
  height: ${height};
`;

export const font = (size = '14rem', color = '#ffffff') => css`
  font-size: ${size};
  color: ${color};
`;