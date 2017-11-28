import React, { Component } from 'react';
import { SeoLinkGroup } from '../../../components';

const BLOCKS = [{
  title: 'Popular Store',
  links: [{
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }],
}];

const MULTI_BLOCKS = [{
  title: 'Popular Store',
  links: [{
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }],
}, {
  title: 'Popular Store',
  links: [{
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }],
}, {
  title: 'Popular Store',
  links: [{
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }, {
    text: 'Lazada Promo Codes',
    link: '/lazada',
  }],
}];

class Demo extends Component {
  render() {
    return (
      <div className="desktopComponent-content">
        <div className="title">SeoLinkGroup</div>
        <div className="desc">LinkGroup for internal links.</div>
        <div className="examples">Examples</div>
        <div className="component-section">
          <div className="component-title">Default</div>
          <SeoLinkGroup
            data={BLOCKS}
          />
        </div>
        <div className="component-section">
          <div className="component-title">Layout - Vertical</div>
          <SeoLinkGroup
            data={BLOCKS}
            layout="vertical"
          />
        </div>
        <div className="component-section">
          <div className="component-title">Multiple Blocks</div>
          <SeoLinkGroup
            data={MULTI_BLOCKS}
          />
        </div>
        <div className="component-section">
          <div className="component-title">Multiple Blocks - Vertical</div>
          <SeoLinkGroup
            data={MULTI_BLOCKS}
            layout="vertical"
          />
        </div>
      </div>
    );
  }
}

export default Demo;
