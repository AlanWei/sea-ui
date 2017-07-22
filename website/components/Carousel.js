import React, { Component } from 'react';
import map from 'lodash/map';
import { Carousel } from '../../components/index.web';

const RED = '#FF4E4E';
const BLUE = '#286FDC';
const GREEN = '#3AC88E';

const DATA = [{
  name: 'Carousel',
  color: RED,
}, {
  name: 'Carousel',
  color: BLUE,
}, {
  name: 'Carousel',
  color: GREEN,
}];

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
        }}
        key={item.color}
      >
        {item.name}
      </div>
    ))
  )

  render() {
    return (
      <div className="component-content">
        <div className="component-section">
          <Carousel
            className="component-item"
            style={{
              height: '10em',
            }}
          >
            {this.renderItems()}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Demo;
