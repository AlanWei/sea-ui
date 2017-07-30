import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import styled from 'styled-components';
import tweenState from 'react-tween-state';
import map from 'lodash/map';
import size from 'lodash/size';
import omit from 'lodash/omit';
import { getPosition } from '../_utils/domUtils';

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
  height: ${props => `${props.height}`}
  width: ${props => `${props.width}px`}
`;

const SliderItem = styled.li`
  position: absolute
  height: auto
  width: ${props => `${props.width}px`}
`;

// eslint-disable-next-line react/prefer-es6-class
const Carousel = createReactClass({

  propTypes: {
    children: PropTypes.arrayOf(
      PropTypes.element,
    ).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
  },

  mixins: [tweenState.Mixin],

  getInitialState() {
    return {
      currentIndex: 0,
      translateX: 0,
      startPositionX: 0,
      moveDeltaX: 0,
      dragging: false,
    };
  },

  getSliderStyles(i) {
    const { width, children } = this.props;
    const { currentIndex, direction } = this.state;
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
  },

  handleTouchStart(e) {
    const { x } = getPosition(e);
    this.setState({
      startPositionX: x,
    });
  },

  handleTouchMove(e) {
    const { width } = this.props;
    const { currentIndex, startPositionX } = this.state;
    const { x } = getPosition(e);

    const deltaX = x - startPositionX;
    const direction = deltaX > 0 ? 'right' : 'left';
    this.setState({
      moveDeltaX: deltaX,
      direction,
      translateX: -(width * currentIndex) + deltaX,
    });
  },

  handleTouchEnd() {
    const { width } = this.props;
    const { moveDeltaX } = this.state;
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
  },

  handleSwipe() {
    const { children, width } = this.props;
    const { currentIndex, direction, translateX } = this.state;
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

    this.step(0, translateX, endValue, newIndex);

    // this.tweenState('translateX', {
    //   easing: tweenState.easingTypes.easeInOutQuad,
    //   duration: 500,
    //   endValue,
    //   onEnd: this.handleAnimationEnd.bind(null, newIndex),
    // });
  },

  step(i, start, end, newIndex) {
    const { width } = this.props;
    const translateX = start + (((end - start) / 10) * i);
    this.setState({
      translateX,
    });
    if (i < 10) {
      this.rafId = window.requestAnimationFrame(this.step.bind(null, i + 1, start, end, newIndex));
    } else {
      this.setState({
        direction: null,
        startPositionX: 0,
        moveDeltaX: 0,
        currentIndex: newIndex,
        translateX: -(width) * newIndex,
      });
      window.cancelAnimationFrame(this.rafId);
    }
  },

  handleMisoperation() {
    const { width } = this.props;
    const { currentIndex } = this.state;

    this.tweenState('translateX', {
      easing: tweenState.easingTypes.easeInOutQuad,
      duration: 500,
      endValue: -(width) * currentIndex,
      onEnd: this.handleAnimationEnd.bind(null, currentIndex),
    });
  },

  handleAnimationEnd(newIndex) {
    const { width } = this.props;

    this.setState({
      direction: null,
      startPositionX: 0,
      moveDeltaX: 0,
      currentIndex: newIndex,
      translateX: -(width) * newIndex,
    });
  },

  handleMouseDown(e) {
    this.setState({
      dragging: true,
    });
    this.handleTouchStart(e);
  },

  handleMouseMove(e) {
    if (!this.state.dragging) {
      return;
    }
    this.handleTouchMove(e);
  },

  handleMouseUp() {
    if (!this.state.dragging) {
      return;
    }
    this.handleTouchEnd();
  },

  handleMouseLeave() {
    if (!this.state.dragging) {
      return;
    }
    this.handleTouchEnd();
  },

  renderSilderList() {
    const { children, height, width } = this.props;
    const { translateX } = this.state;
    const count = size(children);

    return (<Frame>
      <SliderList
        height={height}
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
  },

  render() {
    return (
      <Container {...omit(this.props, ['children', 'height', 'width'])}>
        {this.renderSilderList()}
      </Container>
    );
  },

});

export default Carousel;
