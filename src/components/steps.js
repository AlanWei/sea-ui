import React, { Component } from 'react';
import { Steps } from '../../components';

const STEPS = [{
  text: '1',
}, {
  text: '2',
}, {
  text: '3',
}];

class Demo extends Component {
  render() {
    return (
      <div className="component-content">
        <div className="component-section">
          <div className="component-title">Different Active Step</div>
          <div className="component-subtitle">0 (default)</div>
          <Steps
            className="component-item"
            data={STEPS}
          />
          <div className="component-subtitle">1</div>
          <Steps
            className="component-item"
            data={STEPS}
            activeDataIndex={1}
          />
          <div className="component-subtitle">2</div>
          <Steps
            className="component-item"
            data={STEPS}
            activeDataIndex={2}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
