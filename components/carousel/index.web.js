import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tweenFunctions from 'tween-functions';
import requestAnimationFrame from 'raf';
import get from 'lodash/get';
import map from 'lodash/map';
import size from 'lodash/size';
import omit from 'lodash/omit';
import head from 'lodash/head';
import { getPosition } from '../_utils/domUtils';

const FPS = 60;
const UPDATE_INTERVAL = 1000 / FPS;
const THRESHOLD_PERCENTAGE = 0.1;

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
    speed: PropTypes.number,
  };

  static defaultProps = {
    speed: 500,
  };

  state = {
    width: 0,
    currentIndex: 0,
    translateX: 0,
    startPositionX: 0,
    moveDeltaX: 0,
    dragging: false,
    direction: 'right',
  };

  componentDidMount() {
    this.getContainerWidth();
  }

  componentWillUnmount() {
    requestAnimationFrame.cancel(this.rafId);
  }

  getContainerWidth = () => {
    const width = get(this.container.getBoundingClientRect(), 'width');
    this.setState({
      width,
    });
  }

  getSliderStyles = (i) => {
    const { children } = this.props;
    const { width, currentIndex, direction } = this.state;
    const count = size(children);
    const last = count - 1;

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
    const { width, currentIndex, startPositionX } = this.state;
    const { x } = getPosition(e);

    const deltaX = x - startPositionX;
    const direction = deltaX > 0 ? 'right' : 'left';
    this.setState({
      moveDeltaX: deltaX,
      direction,
      translateX: -(width * currentIndex) + deltaX,
    });
  }

  handleTouchEnd = () => {
    const { moveDeltaX, width } = this.state;
    const threshold = width * THRESHOLD_PERCENTAGE;
    const moveToNext = Math.abs(moveDeltaX) > threshold;

    this.setState({
      dragging: false,
    });

    if (moveToNext) {
      this.handleSwipe();
    } else {
      this.handleMisoperation();
    }
  }

  handleSwipe = () => {
    const { children, speed } = this.props;
    const { width, currentIndex, direction, translateX } = this.state;
    const count = size(children);

    let newIndex;
    if (direction === 'left') {
      newIndex = currentIndex !== count - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex !== 0 ? currentIndex - 1 : count - 1;
    }

    let endValue;
    if (currentIndex === count - 1 && direction === 'left') {
      endValue = -(width) * (currentIndex + 1);
    } else if (currentIndex === 0 && direction === 'right') {
      endValue = -(width) * (currentIndex - 1);
    } else {
      endValue = -(width) * newIndex;
    }

    const tweenQueue = [];
    const updateTimes = speed / UPDATE_INTERVAL;
    for (let i = 0; i < updateTimes; i += 1) {
      tweenQueue.push(
        tweenFunctions.easeInOutQuad(UPDATE_INTERVAL * i, translateX, endValue, speed),
      );
    }

    this.rafId = requestAnimationFrame(() => this.animation(tweenQueue, newIndex));
  }

  animation = (tweenQueue, newIndex) => {
    if (tweenQueue.length === 0) {
      this.handleAnimationEnd(newIndex);
      return;
    }

    this.setState({
      translateX: head(tweenQueue),
    });
    tweenQueue.shift();
    this.rafId = requestAnimationFrame(() => this.animation(tweenQueue, newIndex));
  }

  handleAnimationEnd = (newIndex) => {
    const { width } = this.state;

    this.setState({
      direction: null,
      startPositionX: 0,
      moveDeltaX: 0,
      currentIndex: newIndex,
      translateX: -(width) * newIndex,
    });
  }

  handleMisoperation() {
    const { width, currentIndex } = this.state;

    this.setState({
      direction: null,
      startPositionX: 0,
      moveDeltaX: 0,
      currentIndex,
      translateX: -(width) * currentIndex,
    });
  }

  handleMouseDown = (e) => {
    this.setState({
      dragging: true,
    });
    this.handleTouchStart(e);
  }

  handleMouseMove = (e) => {
    if (!this.state.dragging) {
      return;
    }
    this.handleTouchMove(e);
  }

  handleMouseUp = () => {
    if (!this.state.dragging) {
      return;
    }
    this.handleTouchEnd();
  }

  handleMouseLeave = () => {
    if (!this.state.dragging) {
      return;
    }
    this.handleTouchEnd();
  }

  renderSilderList = () => {
    const { children } = this.props;
    const { translateX, width } = this.state;
    const count = size(children);

    return (<Frame>
      <SliderList
        width={width * count}
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {map(children, (c, i) => (
          <SliderItem
            key={i}
            width={width}
            style={this.getSliderStyles(i)}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
            onMouseLeave={this.handleMouseLeave}
          >
            {c}
          </SliderItem>
        ))}
      </SliderList>
    </Frame>);
  }

  render() {
    return (
      <Container {...omit(this.props, ['children', 'height', 'width'])} innerRef={node => (this.container = node)}>
        {this.renderSilderList()}
      </Container>
    );
  }
}

export default Carousel;
