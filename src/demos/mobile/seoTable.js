import React, { Component } from 'react';
import { SeoTable } from '../../../components';

const TH2 = [{
  text: 'Row Title',
}, {
  text: 'Row Title',
}];

const TD2 = [[{
  text: 'List Item',
}, {
  text: 'List Item',
}], [{
  text: 'List Item',
}, {
  text: 'List Item',
}]];

const TH4 = [{
  text: 'Row Title',
}, {
  text: 'Row Title',
}, {
  text: 'Row Title',
}, {
  text: 'Row Title',
}];

const TD4 = [[{
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}], [{
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}]];

const TH6 = [{
  text: 'Row Title',
}, {
  text: 'Row Title',
}, {
  text: 'Row Title',
}, {
  text: 'Row Title',
}, {
  text: 'Row Title',
}, {
  text: 'Row Title',
}];

const TD6 = [[{
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}], [{
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}, {
  text: 'List Item',
}]];

class Demo extends Component {
  render() {
    return (
      <div className="component-content">
        <div className="component-section">
          <div className="component-title">2 Columns</div>
          <SeoTable
            thData={TH2}
            tdData={TD2}
          />
        </div>
        <div className="component-section">
          <div className="component-title">4 Columns</div>
          <SeoTable
            thData={TH4}
            tdData={TD4}
          />
        </div>
        <div className="component-section">
          <div className="component-title">6 Columns</div>
          <SeoTable
            thData={TH6}
            tdData={TD6}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
