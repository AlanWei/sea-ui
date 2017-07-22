import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';

const Container = styled.div`
`;

const Frame = styled.div`
  position: relative
  display: block
  overflow: hidden
  height: 100%
  margin: 0px
  padding: 0px
  box-sizing: border-box
  -webkit-overflow-scrolling: touch
`;

const SliderList = styled.ul`
  width: 100%
  display: inline-block
`;

const SliderItem = styled.li`
`;


class Carousel extends Component {

  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.element,
    ).isRequired,
  }

  renderSilderList = () => {
    const { children } = this.props;
    return (<Frame>
      <SliderList>
        {map(children, (c, i) => (
          <SliderItem key={i}>
            {c}
          </SliderItem>
        ))}
      </SliderList>
    </Frame>);
  }

  render() {
    return (
      <Container {...this.props}>
        {this.renderSilderList()}
      </Container>
    );
  }
}

export default Carousel;
