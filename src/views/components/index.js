import React, { Component } from 'react';
import Header from '../container/Header';
import Footer from '../container/Footer';

import './style.scss';

class Components extends Component {
  render() {
    return (
      <div className="view-components">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Components;
