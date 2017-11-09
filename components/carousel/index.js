import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import tweenFunctions from 'tween-functions';
import requestAnimationFrame from 'raf';
import prefixAll from 'inline-style-prefixer/static';
import get from 'lodash/get';
import map from 'lodash/map';
import size from 'lodash/size';
import omit from 'lodash/omit';
import head from 'lodash/head';
import last from 'lodash/last';
import isEmpty from 'lodash/isEmpty';
import { getPosition } from '../utils/domUtils';
import './index.scss';

const FPS = 60;
const UPDATE_INTERVAL = 1000 / FPS;
const THRESHOLD_PERCENTAGE = 0.1;
const MISOPERATION_TIME_PERCENTAGE = THRESHOLD_PERCENTAGE * 2;
const START_INDEX = 1;

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.element,
  ).isRequired,
  speed: PropTypes.number,
};

const defaultProps = {
  className: '',
  children: [],
  speed: 500,
};

class Carousel extends Component {
  state = {
    width: 0,
    currentIndex: START_INDEX,
    translateX: 0,
    startPositionX: 0,
    moveDeltaX: 0,
    dragging: false,
    direction: null,
  };

  componentDidMount() {
    this.getContainerWidth();
  }

  componentWillUnmount() {
    requestAnimationFrame.cancel(this.rafId);
    this.rafId = null;
  }

  getContainerWidth = () => {
    const width = get(this.container.getBoundingClientRect(), 'width');
    this.setState({
      width,
      translateX: -(width) * START_INDEX,
    });
  }

  getTweenQueue = (beginValue, endValue, speed) => {
    const tweenQueue = [];
    const updateTimes = speed / UPDATE_INTERVAL;
    for (let i = 0; i < updateTimes; i += 1) {
      tweenQueue.push(
        tweenFunctions.easeInOutQuad(UPDATE_INTERVAL * i, beginValue, endValue, speed),
      );
    }
    return tweenQueue;
  }

  handleTouchStart = (evt) => {
    const { x } = getPosition(evt);
    this.setState({
      startPositionX: x,
    });
  }

  handleTouchMove = (evt) => {
    const { width, currentIndex, startPositionX } = this.state;
    const { x } = getPosition(evt);

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
    let endValue;
    if (direction === 'left') {
      newIndex = currentIndex !== count ? currentIndex + 1 : START_INDEX;
      endValue = -(width) * (currentIndex + 1);
    } else {
      newIndex = currentIndex !== START_INDEX ? currentIndex - 1 : count;
      endValue = -(width) * (currentIndex - 1);
    }

    const tweenQueue = this.getTweenQueue(translateX, endValue, speed);
    this.rafId = requestAnimationFrame(() => this.animation(tweenQueue, newIndex));
  }

  handleMisoperation = () => {
    const { speed } = this.props;
    const { width, currentIndex, translateX } = this.state;

    const endValue = -(width) * currentIndex;
    const tweenQueue = this.getTweenQueue(
      translateX, endValue, speed * MISOPERATION_TIME_PERCENTAGE,
    );
    this.rafId = requestAnimationFrame(() => this.animation(tweenQueue, currentIndex));
  }

  animation = (tweenQueue, newIndex) => {
    if (isEmpty(tweenQueue)) {
      this.handleOperationEnd(newIndex);
      return;
    }

    this.setState({
      translateX: head(tweenQueue),
    });
    tweenQueue.shift();
    this.rafId = requestAnimationFrame(() => this.animation(tweenQueue, newIndex));
  }

  handleOperationEnd = (newIndex) => {
    const { width } = this.state;

    this.setState({
      currentIndex: newIndex,
      translateX: -(width) * newIndex,
      startPositionX: 0,
      moveDeltaX: 0,
      dragging: false,
      direction: null,
    });
  }

  handleMouseDown = (evt) => {
    this.setState({
      dragging: true,
    });
    this.handleTouchStart(evt);
  }

  handleMouseMove = (evt) => {
    if (!this.state.dragging) {
      return;
    }
    this.handleTouchMove(evt);
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
    const count = size(children) + 2;
    const firstElement = head(children);
    const lastElement = last(children);

    const sliderStyle = prefixAll({
      transform: `translateX(${translateX}px)`,
      width: width * count,
    });
    return (<div
      className="sliderWrapper"
    >
      <div
        className="slider"
        style={sliderStyle}
      >
        <div
          className="slide"
          role="presentation"
          style={{ width }}
        >
          {lastElement}
        </div>
        {map(children, (c, i) => (
          <div
            className="slide"
            role="presentation"
            key={i}
            style={{ width }}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
            onMouseLeave={this.handleMouseLeave}
          >
            {c}
          </div>
        ))}
        <div
          className="slide"
          role="presentation"
          style={{ width }}
        >
          {firstElement}
        </div>
      </div>
    </div>);
  }

  renderDots = () => {
    const { children } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="dots">
        {map(children, (c, i) => {
          const classes = classnames({
            dot: true,
            'dot-active': i + START_INDEX === currentIndex,
          });
          return (<div key={i} className={classes} />);
        })}
      </div>
    );
  }

  render() {
    const rest = omit(this.props, Object.keys(defaultProps));
    const classes = classnames('seaui-carousel', this.props.className);
    return (
      <div
        {...rest}
        className={classes}
        ref={(node) => { this.container = node; }}
      >
        {this.renderSilderList()}
        {this.renderDots()}
      </div>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
export default Carousel;
