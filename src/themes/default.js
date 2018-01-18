const hd = 0.01; // 基本单位
const unit = 'rem'; // 单位

let Theme = {
  // 文字色
  colorTextBase: '#000', // 基本
  colorTextBaseInverse: '#fff', // 基本 - 反色
  colorTextSecondary: '#a4a9b0', // 辅助色
  colorTextPlaceholder: '#bbb', // 文本框提示
  colorTextDisabled: '#bbb', // 失效
  colorTextCaption: '#888', // 辅助描述
  colorTextParagraph: '#333', // 段落
  colorLink: '#108ee9', // 链接

  // 背景色
  fillBase: '#fff', // 组件默认背景
  fillBody: '#f5f5f9', // 页面背景
  fillTap: '#ddd', // 组件默认背景 - 按下
  fillDisabled: '#ddd', // 通用失效背景
  fillMask: 'rgba(0,0,0,0.4)', // 遮罩背景
  colorIconBase: '#ccc', // 许多小图标的背景，比如一些小圆点，加减号

  // 透明度
  opacityDisabled: 0.3, // switch checkbox radio 等组件禁用的透明度

  brandPrimary: '#108ee9',
  brandPrimaryTap: '#1284d6',
  brandSuccess: '#6abf47',
  brandWarning: '#ffc600',
  brandError: '#f4333c',
  brandImportant: '#ff5b05', // 用于小红点

  // 边框色
  borderColorBase: '#ddd',

  // 字体尺寸
  fontSizeIconText: calc(10),
  fontSizeCaptionSM: calc(12),
  fontSizeBase: calc(14),
  fontSizeSubhead: calc(15),
  fontSizeCaption: calc(16),
  fontSizeHeading: calc(17),

  // 圆角
  radiusXS: calc(2),
  radiusSM: calc(3),
  radiusMD: calc(5),
  radiusLG: calc(7),
  radiusCircle: '50%',

  // 边框尺寸
  borderWidthSM: '1px',
  borderWidthMD: '1px',
  borderWidthLG: calc(2),

  // 水平间距
  hSpacingSM: calc(5),
  hSpacingMD: calc(8),
  hSpacingLG: calc(15),
  // 垂直间距
  vSpacingXS: calc(3),
  vSpacingSM: calc(6),
  vSPacingMD: calc(9),
  vSpacingLG: calc(15),
  vSpacingXL: calc(21),

  // 高度
  lineHeightBase: 1, // 单行行高
  lineHeightParagraph: 1.5, // 多行行高

  // 图标尺寸
  iconSizeXXS: calc(15),
  iconSizeXS: calc(18),
  iconSizeSM: calc(21),
  iconSizeMD: calc(22),
  iconSizeLG: calc(36),

  // 动画缓动
  easeInOutQuint: 'cubic-bezier(.86, 0, .07, 1)',
};

Theme.hd = hd;
Theme.unit = unit;

export function calc(n) {
  return `${hd * n}${unit}`;
}

export default Theme;