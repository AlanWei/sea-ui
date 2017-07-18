import React, { Component } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import ListView from '../../components/listView';
import { WHITE } from '../../components/styles/variables';

const StyledView = styled.View`
  alignItems: center
  flex: 1
  backgroundColor: ${WHITE}
`;

const DATA = [{
  key: 'AngularJS',
  value: 'AngularJS',
}, {
  key: 'React',
  value: 'React',
}, {
  key: 'Backbone',
  value: 'Backbone',
}, {
  key: 'Ember',
  value: 'Ember',
}, {
  key: 'jQuery',
  value: 'jQuery',
}, {
  key: 'Underscore',
  value: 'Underscore',
}, {
  key: 'D3.js',
  value: 'D3.js',
}, {
  key: 'AngularJS',
  value: 'AngularJS',
}, {
  key: 'React',
  value: 'React',
}, {
  key: 'Backbone',
  value: 'Backbone',
}, {
  key: 'Ember',
  value: 'Ember',
}, {
  key: 'jQuery',
  value: 'jQuery',
}, {
  key: 'Underscore',
  value: 'Underscore',
}, {
  key: 'D3.js',
  value: 'D3.js',
}];

class Demo extends Component {
  static navigationOptions = {
    title: 'ListView',
  };

  handlePress = (item) => {
    Alert.alert(item.key, item.value);
  }

  render() {
    return (
      <StyledView>
        <ListView
          data={DATA}
          onPress={this.handlePress}
        />
      </StyledView>
    );
  }
}

export default Demo;
