import React, { Component } from 'react';
import style from './home.less';

class Home extends Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.demo}>
          <iframe className={style.iframe} src="/components" />
        </div>
        <div className={style.bannerTextWrapper}>
          <div className={style.bannerText}>
            FrontEnd UI Library
          </div>
          <div className={style.bannerText}>
            for Mobile Devices
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
