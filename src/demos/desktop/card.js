import React, { Component } from 'react';
import { Card } from '../../../components';
import './card.scss';

class Demo extends Component {
  renderActions = () => (
    <div className="card-demoActions">
      <div className="action">Action 1</div>
      <div className="action">Action 2</div>
    </div>
  )

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
        <div className="component-section">
          <div className="component-title">Without Header</div>
          <Card>
            Card Content
          </Card>
        </div>
        <div className="component-section">
          <div className="component-title">With Actions</div>
          <Card actions={this.renderActions()}>
            Card Content
          </Card>
        </div>
      </div>
    );
  }
}

export default Demo;
