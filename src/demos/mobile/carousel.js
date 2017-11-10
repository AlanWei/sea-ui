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

  render() {
    return (
      <div className="component-content">
        <div className="component-section">
          <div className="component-title">Normal</div>
          <Carousel
            className="component-item"
          >
            {this.renderItems()}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Demo;
