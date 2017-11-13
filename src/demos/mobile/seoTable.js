import React, { Component } from 'react';
import { SeoTable } from '../../../components';

const TH = [{
  text: 'Row Title',
}, {
  text: 'Row Title',
}];

const TD = [[{
  text: 'List Item',
}, {
  text: 'List Item',
}], [{
  text: 'List Item',
}, {
  text: 'List Item',
}]];

class Demo extends Component {
  render() {
    return (
      <div className="component-content">
        <div className="component-section">
          <div className="component-title">Normal</div>
          <SeoTable
            thData={TH}
            tdData={TD}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
