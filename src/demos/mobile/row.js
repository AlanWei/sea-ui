import React, { Component } from 'react';
import faq from 'assets/faq.svg';
import { Row } from '../../../components';

class Demo extends Component {
  render() {
    return (
      <div className="mobileComponent-content">
        <div className="component-section">
          <div className="component-title">Plain Text</div>
          <Row
            text="Content"
          />
        </div>
        <div className="component-section">
          <div className="component-title">With Icon</div>
          <Row
            imgSrc={faq}
            text="Help Center"
          />
        </div>
        <div className="component-section">
          <div className="component-title">Hyperlink</div>
          <Row
            text="ShopBack SG"
            url="https://www.shopback.sg"
          />
        </div>
      </div>
    );
  }
}

export default Demo;
