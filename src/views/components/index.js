import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import components from 'components/componentsMap';
import './style.scss';

class Components extends Component {
  renderComponentList = () => (
    map(components, (componentGroup, idx) => (
      <div className="componentGroup" key={idx}>
        <div className="groupName">{componentGroup.title}</div>
        {map(componentGroup.components, (component, index) => (
          <Link
            key={index}
            to={`/components/${component.name}`}
            className="component"
          >
            {component.title}
          </Link>
        ))}
      </div>
    ))
  )

  render() {
    return (
      <div className="view-components">
        <h1 className="title">SEA MOBILE</h1>
        <div className="subtitle">Mobile UI Library by ShopBack UED</div>
        {this.renderComponentList()}
      </div>
    );
  }
}

export default Components;
