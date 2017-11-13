import React, { Component } from 'react';
import Header from '../container/Header';
import Footer from '../container/Footer';

import './style.scss';

class Components extends Component {
  renderSideBar = () => (
    <div className="sidebar" />
  );

  renderMainContent = () => (
    <div className="main" />
  );

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
