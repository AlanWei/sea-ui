import React, { Component } from 'react';
import { Button } from '../../components/index.web';

class Demo extends Component {
  render() {
    return (
      <div className="component-content">
        <div className="component-section">
          <div className="component-title">Type</div>
          <Button
            className="component-item"
          >
            <span>Primary</span>
          </Button>
          <Button
            className="component-item"
            type="ghost"
          >
            <span>Ghost</span>
          </Button>
          <Button
            className="component-item"
            type="blank"
          >
            <span>Blank</span>
          </Button>
        </div>
        <div className="component-section">
          <div className="component-title">Size</div>
          <Button
            className="component-item"
            size="large"
          >
            <span>Primary</span>
          </Button>
          <Button
            className="component-item"
          >
            <span>Primary</span>
          </Button>
          <Button
            className="component-item"
            size="small"
          >
            <span>Primary</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default Demo;
