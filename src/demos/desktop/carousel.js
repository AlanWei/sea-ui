import React, { Component } from 'react';
import map from 'lodash/map';
import { Carousel } from '../../../components/index';

const RED = '#FF4E4E';
const BLUE = '#286FDC';
const GREEN = '#3AC88E';

const DATA = [{
  name: '1',
  color: RED,
}, {
  name: '2',
  color: BLUE,
}, {
  name: '3',
  color: GREEN,
}];

const IMG = 'https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/12386/hero-banner_mb_c44588e4.jpg';

class Demo extends Component {
  renderItems = () => (
    map(DATA, item => (
      <div
        style={{
          background: item.color,
          height: '10em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
        key={item.color}
      >
        {item.name}
      </div>
    ))
  )

  renderImages = () => (
    map(DATA, item => (
      <div
        key={item.color}
      >
        <img
          width="100%"
          src={IMG}
          alt=""
        />
      </div>
    ))
  )

  render() {
    return (
      <div className="desktopComponent-content">
        <div className="title">Carousel</div>
        <div className="desc">Display a group of data in the same level.</div>
        <div className="examples">Examples</div>
        <div className="component-section">
          <div className="component-title">DOM Elements</div>
          <Carousel
            className="component-item"
          >
            {this.renderItems()}
          </Carousel>
        </div>
        <div className="component-section">
          <div className="component-title">Images</div>
          <Carousel
            className="component-item"
          >
            {this.renderImages()}
          </Carousel>
        </div>
        <div className="component-section">
          <div className="component-title">AutoPlay</div>
          <Carousel
            className="component-item"
            autoPlay
          >
            {this.renderItems()}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Demo;
