import React, { Component } from 'react';
import { Modal, Button } from '../../../components';

class Demo extends Component {
  renderActions = () => (
    <Button uiColor="blue">OK</Button>
  )

  render() {
    return (
      <div className="mobileComponent-content">
        <div className="component-section">
          <div className="component-title">Normal</div>
          <Modal
            className="component-item"
            header="Header"
            content="This is the modal content."
            actions={this.renderActions()}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
