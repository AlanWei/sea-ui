import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from '../../../components';

class Demo extends Component {
  state = {
    checked: false,
    checkedGroup: [false, false, true],
  }

  handleSelect = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  handleGroupSelect = (checked) => {
    this.setState({
      checkedGroup: checked,
    });
  }

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
            onSelect={this.handleSelect}
            checked={this.state.checked}
          />
        </div>
        <div className="component-section">
          <div className="component-title">Disabled</div>
          <Checkbox
            text="Checkbox"
            checked
            disabled
          />
        </div>
        <div className="component-section">
          <div className="component-title">CheckboxGroup</div>
          <CheckboxGroup
            data={[{
              text: 'Samantha',
            }, {
              text: 'Swordfish',
            }, {
              text: 'Presto',
            }]}
            checked={this.state.checkedGroup}
            onSelect={this.handleGroupSelect}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
