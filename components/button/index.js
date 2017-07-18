import React, { Component, PropTypes } from 'react';
import styled from 'styled-components/native';
import { SB_RED, WHITE, TRANSPARENT } from '../styles/variables';
import { Button as ButtonStyle } from '../styles/base';

const StyledButton = styled.View`
  justifyContent: center
  alignItems: center
  background-color: ${props => (props.type === 'primary' ? SB_RED : TRANSPARENT)}
  borderWidth: ${props => (props.type === 'ghost' ? 1 : 0)}
  borderColor: ${props => (props.type === 'ghost' ? SB_RED : TRANSPARENT)}
  borderRadius: 3
  width: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${ButtonStyle.width}`;
      case 'small':
        return `${(ButtonStyle.width) * (1 - 0.2)}`;
      case 'large':
        return `${(ButtonStyle.width) * (1 + 0.3)}`;
      default:
        return `${ButtonStyle.width}`;
    }
  }}
  height: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${ButtonStyle.height}`;
      case 'small':
        return `${(ButtonStyle.height) * (1 - 0.2)}`;
      case 'large':
        return `${(ButtonStyle.height) * (1 + 0.3)}`;
      default:
        return `${ButtonStyle.height}`;
    }
  }}
`;

const StyledText = styled.Text`
  color: ${props => (props.type === 'primary' ? WHITE : SB_RED)}
  font-size: ${(props) => {
    const size = props.size;
    switch (size) {
      case 'regular':
        return `${ButtonStyle.fontSize}`;
      case 'small':
        return `${(ButtonStyle.fontSize) * (1 - 0.2)}`;
      case 'large':
        return `${(ButtonStyle.fontSize) * (1 + 0.3)}`;
      default:
        return `${ButtonStyle.fontSize}`;
    }
  }}
`;

class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'ghost', 'blank']),
    size: PropTypes.oneOf(['regular', 'large', 'small']),
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: 'primary',
    size: 'regular',
  };

  render() {
    const { text, ...others } = this.props;
    return (
      <StyledButton {...others}>
        <StyledText {...others}>{text}</StyledText>
      </StyledButton>
    );
  }
}

export default Button;
