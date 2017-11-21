import React, { Component } from 'react';
import { Checkbox } from '../../../components';

class Demo extends Component {
  render() {
    return (
      <div className="desktopComponent-content">
        <div className="title">Checkbox</div>
        <div className="desc">User selects multiple values from several options.</div>
        <div className="examples">Examples</div>
        <div className="component-section">
          <div className="component-title">Default</div>
          <Checkbox
            text="Checkbox"
            isActive={false}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
