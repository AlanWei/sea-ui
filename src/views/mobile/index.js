import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import components from 'demos/mobileComponentsMap';
import next from '../../assets/next.svg';
import './style.scss';

class Mobile extends Component {
  renderComponentList = () => (
    map(components, (componentGroup, idx) => (
      <div className="componentGroup" key={idx}>
        <div className="groupName">{componentGroup.title}</div>
        {map(componentGroup.components, (component, index) => (
          <Link
            key={index}
            to={`/mobile/${component.name}`}
            className="component"
          >
            <span>{component.title}</span>
            <img src={next} alt="" />
          </Link>
        ))}
      </div>
    ))
  )

  render() {
    return (
      <div className="view-mobile">
        <h1 className="title">SEA UI MOBILE</h1>
        <div className="subtitle">Mobile UI Library by ShopBack UED</div>
        {this.renderComponentList()}
      </div>
    );
  }
}

export default Mobile;
