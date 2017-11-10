import React, { Component } from 'react';
import Header from '../container/Header';
import Footer from '../container/Footer';

import './style.scss';

class Components extends Component {
  renderSideBar = () => {
    return (
      <div className="sidebar">
      </div>
    );
  }

  renderMainContent = () => {
    return (
      <div className="main">
      </div>
    );
  }

  render() {
    return (
      <div className="view-components">
        <Header />
        <div className="content">
          <div className="container">
            {this.renderSideBar()}
            {this.renderMainContent()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Components;
