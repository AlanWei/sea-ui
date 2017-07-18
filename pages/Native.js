import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { GRAY } from '../components/styles/variables';
import ListView from '../components/listView';

const COMPONENTS = [{
  key: 'Button',
  value: 'Button',
}, {
  key: 'ListView',
  value: 'ListView',
}];

const StyledView = styled.View`
  justifyContent: center
  alignItems: center
  flex: 1
`;

const StyledHeader = styled.Text`
  paddingLeft: 12
  paddingTop: 12
  paddingBottom: 12
  width: ${Dimensions.get('window').width}
  color: ${GRAY}
`;

class Native extends Component {
  static navigationOptions = {
    title: 'Native',
  };

  render() {
    const { navigation } = this.props;
    return (
      <StyledView>
        <StyledHeader>UI Views</StyledHeader>
        <ListView
          data={COMPONENTS}
          bounces={false}
          onPress={(item) => { navigation.navigate(item.key); }}
        />
      </StyledView>
    );
  }
}

export default Native;
