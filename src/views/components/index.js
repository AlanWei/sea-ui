import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import map from 'lodash/map';
import find from 'lodash/find';
import isNil from 'lodash/isNil';
import get from 'lodash/get';
import components from 'demos/desktopComponentsMap';
import componentsMap from 'demos/desktopComponentsFlatMap';
import Header from '../container/Header';
import Footer from '../container/Footer';

import './style.scss';

const propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

class Components extends Component {
  state = {
    component: null,
  }

  componentWillMount() {
    this.findComponent(this.props);
  }

  componentWillUpdate(nextProps) {
    if (this.props.match.params.componentName !== nextProps.match.params.componentName) {
      this.findComponent(nextProps);
    }
  }

  findComponent = (props) => {
    const component = find(componentsMap, comp => (
      comp.name === get(props.match, 'params.componentName', '')
    ));

    this.setState({
      component,
    });
  }

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

  renderComponent = () => {
    const Demo = get(this.state.component, 'component');
    const desc = [
      'SEA UI is a pattern library which targets for Southeast Asia market, ',
      'suitable for both desktop and mobile devices ',
      'with full i18n support and browser compatibility.',
    ].join('');
    const js = "import { Button } from 'sea-ui'";
    const css = "import 'sea-ui/lib/seaui.css'";
    if (isNil(Demo)) {
      return (
        <div className="desktopComponent-content">
          <h1 className="title">Getting Started</h1>
          <div>{desc}</div>
          <h3>Installing</h3>
          <div className="code-block">
            <code>npm install sea-ui</code>
          </div>
          <h3>Usage</h3>
          <div className="code-block">
            <code>{js}</code>
            <code>{css}</code>
          </div>
        </div>
      );
    }
    return <Demo />;
  }

  renderMainContent = () => (
    <div className="main">
      {this.renderComponent()}
    </div>
  );

  render() {
    return (
      <div className="view-components">
        <Header />
        <div className="view-content">
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
