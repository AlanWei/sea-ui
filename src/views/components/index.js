import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import map from 'lodash/map';
import components from 'demos/desktopComponentsMap';
import Header from '../container/Header';
import Footer from '../container/Footer';

import './style.scss';

const propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

class Components extends Component {
  renderSideBar = () => {
    const rootClasses = classnames({
      groupName: true,
      'groupName-active': this.props.location.pathname === '/components',
    });
    return (
      <div className="sidebar">
        <div className="componentGroup">
          <Link
            className={rootClasses}
            to="/components"
          >
            Getting Started
          </Link>
        </div>
        {map(components, (componentGroup, idx) => (
          <div className="componentGroup" key={idx}>
            <div className="groupName">{componentGroup.title}</div>
            {map(componentGroup.components, (component, index) => {
              const classes = classnames({
                component: true,
                'component-active': component.name === this.props.match.params.componentName,
              });
              return (
                <Link
                  key={index}
                  to={`/components/${component.name}`}
                  className={classes}
                >
                  <span>{component.title}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

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

Components.propTypes = propTypes;
export default withRouter(Components);
