import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { RED, WHITE, TRANSPARENT, TEXT } from '../styles/variables';
import BaseStyle from './style';

const Btn = styled.div`
  display: flex
  justifyContent: center
  alignItems: center
  border-radius: 3px;
  background-color: ${props => (props.type === 'primary' ? RED : TRANSPARENT)};
  color: ${props => (props.type === 'primary' ? WHITE : '#000000')};
  border: ${props => (props.type === 'ghost' ? '1px solid #40485a' : 'none')};
  font-size: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${BaseStyle.fontSize}px`;
      case 'small':
        return `${(BaseStyle.fontSize) * (1 - 0.2)}px`;
      case 'large':
        return `${(BaseStyle.fontSize) * (1 + 0.3)}px`;
      default:
        return `${BaseStyle.fontSize}px`;
    }
  }};
  height: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${BaseStyle.height}px`;
      case 'small':
        return `${(BaseStyle.height) * (1 - 0.2)}px`;
      case 'large':
        return `${(BaseStyle.height) * (1 + 0.3)}px`;
      default:
        return `${BaseStyle.height}px`;
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
