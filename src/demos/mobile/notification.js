import React, { Component } from 'react';
import { Notification } from '../../../components';

class Demo extends Component {
  state = {
    showFirstNotification: true,
    showSecondNotification: true,
  }

  handleFirst = () => {
    this.setState({
      showFirstNotification: false,
    });
  }

  handleSecond = () => {
    this.setState({
      showSecondNotification: false,
    });
  }

  render() {
    return (
      <div className="mobileComponent-content">
        <div className="component-section">
          <div className="component-title">Normal</div>
          <Notification
            show={this.state.showFirstNotification}
            text="Login Success"
            onDismiss={this.handleFirst}
          />
        </div>
        <div className="component-section">
          <div className="component-title">Disable Auto Dismiss</div>
          <Notification
            show={this.state.showSecondNotification}
            text="Signup Success"
            autoDismiss={false}
            onDismiss={this.handleSecond}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
