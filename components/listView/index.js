import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, ListView as NativeListView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { BORDER, WHITE, LIGHT_GRAY } from '../styles/variables';

const StyledItem = styled.View`
  borderTopColor: ${BORDER}
  borderTopWidth: 1
  borderBottomColor: ${BORDER}
  borderBottomWidth: ${props => (props.isLast ? 1 : 0)}
  backgroundColor: ${WHITE}
  paddingLeft: 24
  height: 44
  width: ${Dimensions.get('window').width}
  justifyContent: center
`;

const StyledItemText = styled.Text`
  fontSize: 17
`;

const StyledItemArrow = styled.View`
  position: absolute
  right: 12
  top: 10
`;

class ListView extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    onPress: PropTypes.func,
    bounces: PropTypes.bool,
  };

  static defaultProps = {
    onPress: () => {},
    bounces: true,
  };

  render() {
    const { data, bounces, onPress } = this.props;
    const ds = new NativeListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(data);
    return (
      <NativeListView
        dataSource={dataSource}
        renderRow={(item, second, index) => (
          <TouchableHighlight
            underlayColor={BORDER} onPress={onPress.bind(null, item)}
          >
            <StyledItem isLast={parseInt(index, 10) === (data.length - 1)}>
              <StyledItemText>{item.value}</StyledItemText>
              <StyledItemArrow>
                <Icon name="navigate-next" size={24} color={LIGHT_GRAY} />
              </StyledItemArrow>
            </StyledItem>
          </TouchableHighlight>
        )}
        bounces={bounces}
      />
    );
  }
}

export default ListView;
