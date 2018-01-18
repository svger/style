import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../src/themes/default';
import { flex } from '../src/mixins/utils';

import '../src/base/index';

class TestComponent extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <h1>基础样式及默认皮肤</h1>
        <h2>一、文字色</h2>
        <div className="colors">
          <div className="color color-base">base</div>
          <div className="color color-base-inverse">baseInverse</div>
          <div className="color color-secondary">secondary</div>
          <div className="color color-placeholder">placeholder</div>
          <div className="color color-disabled">disabled</div>
          <div className="color color-caption">caption</div>
          <div className="color color-paragraph">paragraph</div>
          <div className="color color-link">link</div>
        </div>
        <h2>二、背景色</h2>
        <div className="colors">
          <div className="color color-fillBase">fillBase</div>
          <div className="color color-fillBody">fillBody</div>
          <div className="color color-fillTap">fillTap</div>
          <div className="color color-fillDisabled">fillDisabled</div>
          <div className="color color-fillMask">fillMask</div>
          <div className="color color-iconBase">colorIconBase</div>
        </div>
        <h2>三、品牌色</h2>
        <div className="colors brand">
          <div className="color color-brandPrimary">brandPrimary</div>
          <div className="color color-brandPrimaryTap">brandPrimaryTap</div>
          <div className="color color-brandSuccess">brandSuccess</div>
          <div className="color color-brandWarning">brandWarning</div>
          <div className="color color-brandError">brandError</div>
          <div className="color color-brandImportant">brandImportant</div>
        </div>
        <h2>四、字体尺寸</h2>
        <div className="fonts">
          <div className="fontSizeHeading">Heading</div>
          <div className="fontSizeCaption">Caption</div>
          <div className="fontSizeSubhead">Subhead</div>
          <div className="fontSizeBase">Base</div>
          <div className="fontSizeCaptionSM">Small Caption</div>
          <div className="fontSizeIconText">Icon Text</div>
        </div>
        <h2>五、圆角尺寸</h2>
        <div className="radius">
          <div className="radiusCircle">radiusCircle</div>
          <div className="radiusLG">radiusLG</div>
          <div className="radiusMD">radiusMD</div>
          <div className="radiusSM">radiusSM</div>
          <div className="radiusXS">radiusXS</div>
        </div>
        <h2>六、图标尺寸</h2>
        <div className="icons">
          <div>
            <p className="iconSizeXXS">+</p>
            <p>iconSizeXXS</p>
          </div>
          <div>
            <p className="iconSizeXS">+</p>
            <p>iconSizeXS</p>
          </div>
          <div>
            <p className="iconSizeSM">+</p>
            <p>iconSizeSM</p>
          </div>
          <div>
            <p className="iconSizeMD">+</p>
            <p>iconSizeMD</p>
          </div>
          <div>
            <p className="iconSizeLG">+</p>
            <p>iconSizeLG</p>
          </div>
        </div>
      </div>
    );
  }
}

const StyledTestComponent = styled(TestComponent)`
  padding-left: .15rem;
  padding-right: .15rem;
  margin-bottom: .45rem;

  h1 {
    font-size: .68rem;
    color: ${Theme.colorTextBase};
    text-align: center;
    margin-top: .55rem;
    margin-bottom: .55rem;
  }
  h2 {
    font-size: ${Theme.fontSizeHeading};
    color: ${Theme.colorTextBase};
    margin-bottom: .15rem;
    margin-top: .25rem;
  }

  .colors {
    ${flex('stretch', 'stretch')}
    flex-direction: row;
    width: 100%;
    color: ${Theme.colorLink};

    &.brand {
      color: ${Theme.colorTextBaseInverse};
    }
  }
  .color {
    height: .66rem;
    flex: 1;
    margin-left: .05rem;
    margin-right: .05rem;
    text-align: center;
    padding-top: .15rem;
    font-weight: bolder;
    box-sizing: border-box;

    &.color-base {
      background-color: ${Theme.colorTextBase};
    }
    &.color-base-inverse {
      background-color: ${Theme.colorTextBaseInverse};
    }
    &.color-secondary {
      background-color: ${Theme.colorTextSecondary};
    }
    &.color-placeholder {
      background-color: ${Theme.colorTextPlaceholder};
    }
    &.color-disabled {
      background-color: ${Theme.colorTextDisabled};
    }
    &.color-caption {
      background-color: ${Theme.colorTextCaption};
    }
    &.color-paragraph {
      background-color: ${Theme.colorTextParagraph};
    }
    &.color-link {
      background-color: ${Theme.colorLink};
      color: ${Theme.colorTextBaseInverse};
    }

    &.color-fillBase {
      background-color: ${Theme.fillBase};
    }
    &.color-fillBody {
      background-color: ${Theme.fillBody};
    }
    &.color-fillTap {
      background-color: ${Theme.fillTap};
    }
    &.color-fillDisabled {
      background-color: ${Theme.fillDisabled};
    }
    &.color-fillMask {
      background-color: ${Theme.fillMask};
    }
    &.color-iconBase {
      background-color: ${Theme.colorIconBase};
    }

    &.color-brandPrimary {
      background-color: ${Theme.brandPrimary};
    }
    &.color-brandPrimaryTap {
      background-color: ${Theme.brandPrimaryTap};
    }
    &.color-brandSuccess {
      background-color: ${Theme.brandSuccess};
    }
    &.color-brandWarning {
      background-color: ${Theme.brandWarning};
    }
    &.color-brandError {
      background-color: ${Theme.brandError};
    }
    &.color-brandImportant {
      background-color: ${Theme.brandImportant};
    }
  }

  .fonts {
    color: ${Theme.colorTextBase};
    background-color: ${Theme.fillBase};
    padding: .1rem;

    > div {
      margin-bottom: .1rem;
    }

    .fontSizeHeading {
      font-size: ${Theme.fontSizeHeading};
    }
    .fontSizeCaption {
      font-size: ${Theme.fontSizeCaption};
    }
    .fontSizeSubhead {
      font-size: ${Theme.fontSizeSubhead};
    }
    .fontSizeBase {
      font-size: ${Theme.fontSizeBase};
    }
    .fontSizeCaptionSM {
      font-size: ${Theme.fontSizeCaptionSM};
    }
    .fontSizeIconText {
      font-size: ${Theme.fontSizeIconText};
    }
  }

  .radius {
    color: ${Theme.colorLink};
    font-weight: bolder;
    font-size: ${Theme.fontSizeBase};
    ${flex('flex-start', 'center')}
    flex-direction: row;

    > div {
      width: .8rem;
      height: .8rem;
      margin-left: .05rem;
      margin-right: .05rem;
      background-color: ${Theme.fillBase};
      text-align: center;
      padding-top: .15rem;
      box-sizing: border-box;
      border: ${Theme.borderWidthSM} solid ${Theme.borderColorBase};
    }

    .radiusCircle {
      border-radius: ${Theme.radiusCircle};
    }
    .radiusLG {
      border-radius: ${Theme.radiusLG};
    }
    .radiusMD {
      border-radius: ${Theme.radiusMD};
    }
    .radiusSM {
      border-radius: ${Theme.radiusSM};
    }
    .radiusXS {
      border-radius: ${Theme.radiusXS};
    }
  }

  .icons {
    ${flex('stretch', 'stretch')}
    flex-direction: row;
    color: ${Theme.colorLink};

    > div {
      text-align: center;
      margin-left: .05rem;
      margin-right: .05rem;
      ${flex('flex-end', 'stretch')}
      flex-direction: column;

      > p:first-child {
        font-weight: bolder;
        color: ${Theme.colorTextBase};
      }
    }

    .iconSizeXXS {
      font-size: ${Theme.iconSizeXXS};
    }
    .iconSizeXS {
      font-size: ${Theme.iconSizeXS};
    }
    .iconSizeSM {
      font-size: ${Theme.iconSizeSM};
    }
    .iconSizeMD {
      font-size: ${Theme.iconSizeMD};
    }
    .iconSizeLG {
      font-size: ${Theme.iconSizeLG};
    }
  }
`;

render((
  <ThemeProvider theme={Theme}>
    <StyledTestComponent />
  </ThemeProvider>
), document.querySelector('#container'));