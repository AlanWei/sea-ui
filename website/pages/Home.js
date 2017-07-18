import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './home.less';

class Home extends Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.demo} />
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
