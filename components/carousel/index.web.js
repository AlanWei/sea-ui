import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import size from 'lodash/size';
import omit from 'lodash/omit';
import { getPosition } from '../_utils/domUtils';

const THRESHOLD_PERCENTAGE = 0.25;

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  box-sizing: border-box;
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
  display: block
  height: ${props => `${props.height}`}
  width: ${props => `${props.width}px`}
`;

const SliderItem = styled.li`
  position: absolute
  height: auto
  width: ${props => `${props.width}px`}
`;

class Carousel extends Component {

  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.element,
    ).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
  }

  state = {
    currentIndex: 0,
    translateX: 0,
    isMoving: false,
    startPositionX: 0,
    moveDeltaX: 0,
  }

  onSwipe = () => {
    const { children } = this.props;
    const { currentIndex, direction } = this.state;
    const count = size(children);

    let newIndex;
    if (direction === 'left') {
      newIndex = currentIndex !== count - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex !== 0 ? currentIndex - 1 : count - 1;
    }

    this.setState({
      currentIndex: newIndex,
    });
  }

  getListStyles = () => {
    const { width } = this.props;
    const { isMoving, translateX, currentIndex } = this.state;
    if (isMoving) {
      return {
        transform: `translateX(${translateX}px)`,
      };
    }
    return {
      transform: `translateX(${-(width) * currentIndex}px)`,
    };
  }

  getSliderStyles = (i) => {
    const { width, children } = this.props;
    const { isMoving, currentIndex, direction } = this.state;
    const count = size(children);
    const last = count - 1;
    if (isMoving) {
      if (currentIndex === 0 && direction === 'right') {
        return {
          left: i === last ? -(width) : width * i,
        };
      }
      if (currentIndex === last && direction === 'left') {
        return {
          left: i === 0 ? width * count : width * i,
        };
      }
    }
    return {
      left: width * i,
    };
  }

  handleTouchStart = (e) => {
    const { x } = getPosition(e);
    this.setState({
      startPositionX: x,
    });
  }

  handleTouchMove = (e) => {
    const { width } = this.props;
    const { currentIndex, startPositionX } = this.state;
    const { x } = getPosition(e);

    const deltaX = x - startPositionX;
    const direction = deltaX > 0 ? 'right' : 'left';
    this.setState({
      moveDeltaX: deltaX,
      isMoving: true,
      direction,
      translateX: -(width * currentIndex) + deltaX,
    });
  }

  handleTouchEnd = () => {
    const { width } = this.props;
    const { moveDeltaX } = this.state;
    const threshold = width * THRESHOLD_PERCENTAGE;
    const moveToNext = Math.abs(moveDeltaX) > threshold;

    if (moveToNext) {
      this.onSwipe();
    }
    this.reset();
  }

  reset = () => {
    this.setState({
      isMoving: false,
      direction: null,
      startPositionX: 0,
      moveDeltaX: 0,
    });
  }

  renderSilderList = () => {
    const { children, height, width } = this.props;
    const count = size(children);
    return (<Frame>
      <SliderList
        height={height}
        width={width * count}
        style={this.getListStyles()}
      >
        {map(children, (c, i) => (
          <SliderItem
            key={i}
            width={width}
            style={this.getSliderStyles(i)}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            {c}
          </SliderItem>
        ))}
      </SliderList>
    </Frame>);
  }

  render() {
    return (
      <Container {...omit(this.props, ['children', 'height', 'width'])}>
        {this.renderSilderList()}
      </Container>
    );
  }
}

export default Carousel;
