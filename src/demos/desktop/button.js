import React, { Component } from 'react';
import { Button } from '../../../components';

import './button.scss';

class Demo extends Component {
  renderColorSection = () => (
    <div className="component-section">
      <div className="component-title">Color</div>
      <div className="component-subtitle">red (default)</div>
      <Button className="component-item button-maxWidth">Button</Button>
      <div className="component-subtitle">green</div>
      <Button className="component-item button-maxWidth" uiColor="green">Button</Button>
      <div className="component-subtitle">blue</div>
      <Button className="component-item button-maxWidth" uiColor="blue">Button</Button>
    </div>
  )

  renderSizeSection = () => (
    <div className="component-section">
      <div className="component-title">Size</div>
      <div className="component-subtitle">md (default)</div>
      <Button className="component-item button-maxWidth">Button</Button>
      <div className="component-subtitle">lg</div>
      <Button className="component-item button-maxWidth" uiSize="lg">Button</Button>
      <div className="component-subtitle">s</div>
      <Button className="component-item button-maxWidth" uiSize="s">Button</Button>
    </div>
  )

  renderTypeSection = () => (
    <div className="component-section">
      <div className="component-title">Type</div>
      <div className="component-subtitle">fill (default)</div>
      <Button className="component-item button-maxWidth">Button</Button>
      <div className="component-subtitle">ghost</div>
      <Button className="component-item button-maxWidth" uiType="ghost">Button</Button>
      <div className="component-subtitle">flat</div>
      <Button className="component-item button-maxWidth" uiType="flat">Button</Button>
    </div>
  )

  render() {
    return (
      <div className="desktopComponent-content">
        <div className="title">Button</div>
        <div className="desc">To trigger actions.</div>
        <div className="examples">Examples</div>
        {this.renderColorSection()}
        {this.renderSizeSection()}
        {this.renderTypeSection()}
      </div>
    );
  }
}

export default Demo;
