import React, { Component } from 'react';
import styled from 'styled-components/native';
import { SB_RED, GRAY, WHITE } from '../components/styles/variables';
import ListView from '../components/listView';

const LOGO = require('../assets/icons/icon-192x192.png');

const TYPE = [{
  key: 'Web',
  value: 'Web Components',
}, {
  key: 'Native',
  value: 'Native Components',
}];

const StyledView = styled.View`
  justifyContent: center
  alignItems: center
  flex: 1
  backgroundColor: ${WHITE}
`;

const StyledLogo = styled.Image`
  height: 108
  width: 108
  marginTop: 42
  marginBottom: 30
`;

const StyledTitle = styled.Text`
  fontSize: 24
  color: ${SB_RED}
  marginBottom: 30
`;

const StyledVersion = styled.Text`
  position: absolute
  bottom: 24
  color: ${GRAY}
`;

class Home extends Component {
  static navigationOptions = {
    title: 'ShopBack UI Mobile',
  };

  render() {
    const { navigation } = this.props;
    return (
      <StyledView>
        <StyledLogo source={LOGO} resizeMode="contain" />
        <StyledTitle>
          ShopBack UI Mobile
        </StyledTitle>
        <ListView
          data={TYPE}
          onPress={item => navigation.navigate(item.key)}
          bounces={false}
        />
        <StyledVersion>
          Version: 1.0.0
        </StyledVersion>
      </StyledView>
    );
  }
}

export default Home;
