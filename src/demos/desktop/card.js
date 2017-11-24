import React, { Component } from 'react';
import { Card } from '../../../components';

class Demo extends Component {
  render() {
    return (
      <div className="desktopComponent-content">
        <div className="title">Card</div>
        <div className="desc">Common container.</div>
        <div className="examples">Examples</div>
        <div className="component-section">
          <div className="component-title">Default</div>
          <Card title="Card Header">
            Card Content
          </Card>
        </div>
      </div>
    );
  }
}

export default Demo;
