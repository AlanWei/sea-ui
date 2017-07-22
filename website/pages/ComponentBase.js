import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash/get';
import style from './componentbase.less';

class ComponentBase extends Component {
  render() {
    const componentName = get(this.props, 'location.state.componentName');
    return (
      <div className={style.root}>
        <header className={style.header}>
          <Link to="/components"><span className={style.home}>Home</span></Link>
          <span className={style.componentName}>{componentName}</span>
        </header>
      </div>
    );
  }
}

export default ComponentBase;
