import React, { Component } from 'react';
import { Modal, Button } from '../../../components';

class Demo extends Component {
  state = {
    showFirst: false,
    showSecond: false,
  }

  handleFirstClick = (show) => {
    this.setState({
      showFirst: show,
    });
  }

  handleSecondClick = (show) => {
    this.setState({
      showSecond: show,
    });
  }

  renderFirstActions = () => (
    <Button onClick={() => this.handleFirstClick(false)} uiColor="blue">OK</Button>
  )

  renderSecondActions = () => (
    <Button onClick={() => this.handleSecondClick(false)} uiColor="blue">OK</Button>
  )

  render() {
    return (
      <div className="mobileComponent-content">
        <div className="component-section">
          <div className="component-title">Normal</div>
          <Button
            uiType="fill"
            uiColor="white"
            onClick={() => this.handleFirstClick(true)}
          >
            Normal
          </Button>
        </div>
        <div className="component-section">
          <div className="component-title">Long Content</div>
          <Button
            uiType="fill"
            uiColor="white"
            onClick={() => this.handleSecondClick(true)}
          >
            Long Content
          </Button>
        </div>
        <Modal
          className="component-item"
          header="Header"
          content="This is the modal content."
          actions={this.renderFirstActions()}
          show={this.state.showFirst}
        />
        <Modal
          className="component-item"
          header="Header"
          content="This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content.
          This is the long content.This is the long content."
          actions={this.renderSecondActions()}
          show={this.state.showSecond}
        />
      </div>
    );
  }
}

export default Demo;
