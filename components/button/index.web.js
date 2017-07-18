import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { SB_RED, WHITE, TRANSPARENT, SB_GREY } from '../styles/variables';
import { Button as ButtonStyle } from '../styles/base';

const Btn = styled.div`
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  background-color: ${props => (props.type === 'primary' ? SB_RED : TRANSPARENT)};
  color: ${props => (props.type === 'primary' ? WHITE : SB_GREY)};
  border: ${props => (props.type === 'ghost' ? '1px solid #40485a' : 'none')};
  font-size: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${ButtonStyle.fontSize}px`;
      case 'small':
        return `${(ButtonStyle.fontSize) * (1 - 0.2)}px`;
      case 'large':
        return `${(ButtonStyle.fontSize) * (1 + 0.3)}px`;
      default:
        return `${ButtonStyle.fontSize}px`;
    }
  }};
  width: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${ButtonStyle.width}px`;
      case 'small':
        return `${(ButtonStyle.width) * (1 - 0.2)}px`;
      case 'large':
        return `${(ButtonStyle.width) * (1 + 0.3)}px`;
      default:
        return `${ButtonStyle.width}px`;
    }
  }};
  height: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${ButtonStyle.height}px`;
      case 'small':
        return `${(ButtonStyle.height) * (1 - 0.2)}px`;
      case 'large':
        return `${(ButtonStyle.height) * (1 + 0.3)}px`;
      default:
        return `${ButtonStyle.height}px`;
    }
  }};
  line-height: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${ButtonStyle.height}px`;
      case 'small':
        return `${(ButtonStyle.height) * (1 - 0.2)}px`;
      case 'large':
        return `${(ButtonStyle.height) * (1 + 0.3)}px`;
      default:
        return `${ButtonStyle.height}px`;
    }
  }};
`;

class Button extends Component {
  static defaultProps = {
    type: 'primary',
    size: 'regular',
    children: '',
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'ghost', 'blank']),
    size: PropTypes.oneOf(['regular', 'large', 'small']),
    children: PropTypes.element,
  };

  render() {
    const { children, ...others } = this.props;
    return (
      <Btn {...others}>
        {children}
      </Btn>
    );
  }
}

export default Button;
