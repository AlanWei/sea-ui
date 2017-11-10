import React, { Component } from 'react';
import Header from '../container/Header';
import Footer from '../container/Footer';
import './style.scss';

class Home extends Component {
  renderContent = () => (
    <div className="content">
      UI library with fully i18n support, compatible with all major
       browsers and customised components for both desktop and mobile.
    </div>
  )

  render() {
    return (
      <div className="view-home">
        <Header />
        {this.renderContent()}
        <Footer />
      </div>
    );
  }
}

export default Home;
