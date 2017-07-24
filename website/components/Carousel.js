import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import map from 'lodash/map';
import { Carousel } from '../../components/index.web';

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
            height="10em"
            width={345}
          >
            {this.renderItems()}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Demo;
