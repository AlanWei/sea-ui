import React, { Component } from 'react';
import styled from 'styled-components/native';
import Button from '../../components/button';
import { WHITE } from '../../components/styles/variables';

const StyledView = styled.View`
  alignItems: center
  flex: 1
  backgroundColor: ${WHITE}
`;

const StyledWrapper = styled.View`
  marginTop: 8
  marginBottom: 8
`;

class Demo extends Component {
  static navigationOptions = {
    title: 'Button',
  };

  render() {
    return (
      <StyledView>
        <StyledWrapper>
          <Button text="primary button" />
        </StyledWrapper>
        <StyledWrapper>
          <Button type="ghost" text="ghost button" />
        </StyledWrapper>
        <StyledWrapper>
          <Button type="blank" text="blank button" />
        </StyledWrapper>
      </StyledView>
    );
  }
}

export default Demo;
