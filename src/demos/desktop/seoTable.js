import React, { Component } from 'react';
import { SeoTable } from '../../../components';

const TH1 = [{
  text: 'Row Title',
}];

const TD1 = [[{
  text: 'List Item',
}], [{
  text: 'List Item',
}]];

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
      <div className="desktopComponent-content">
        <div className="title">SeoTable</div>
        <div className="desc">Table for SEO contents.</div>
        <div className="examples">Examples</div>
        <div className="component-section">
          <div className="component-title">1 Columns</div>
          <SeoTable
            thData={TH1}
            tdData={TD1}
          />
        </div>
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
