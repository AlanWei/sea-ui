import React from 'react';
import { Button } from '../../components/index.web';

const Demo = () => (
  <div className="component-content">
    <div className="component-section">
      <div className="component-title">Type</div>
      <div className="component-subtitle">primary</div>
      <Button
        className="component-item"
      >
        <span>Primary</span>
      </Button>
      <div className="component-subtitle">ghost</div>
      <Button
        className="component-item"
        type="ghost"
      >
        <span>Ghost</span>
      </Button>
      <div className="component-subtitle">blank</div>
      <Button
        className="component-item"
        type="blank"
      >
        <span>Blank</span>
      </Button>
    </div>
    <div className="component-section">
      <div className="component-title">Size</div>
      <div className="component-subtitle">large</div>
      <Button
        className="component-item"
        size="large"
      >
        <span>Primary</span>
      </Button>
      <div className="component-subtitle">regular</div>
      <Button
        className="component-item"
      >
        <span>Primary</span>
      </Button>
      <div className="component-subtitle">small</div>
      <Button
        className="component-item"
        size="small"
      >
        <span>Primary</span>
      </Button>
    </div>
  </div>
);

export default Demo;
