import React, { Component } from 'react';
import faq from 'assets/faq.svg';
import { Input } from '../../../components';

class Demo extends Component {
  handleChange = (evt) => {
    console.log(`Value changed: ${evt.target.value}`);
  }

  handleEnter = () => {
    console.log('Enter pressed!');
  }

  render() {
    return (
      <div className="mobileComponent-content">
        <div className="component-section">
          <div className="component-title">Default</div>
          <Input />
        </div>
        <div className="component-section">
          <div className="component-title">With Icon</div>
          <Input imgUrl={faq} />
        </div>
        <div className="component-section">
          <div className="component-title">AutoFocus</div>
          <Input
            autoFocus
          />
        </div>
        <div className="component-section">
          <div className="component-title">Callback</div>
          <Input
            onChange={this.handleChange}
            onPressEnter={this.handleEnter}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
