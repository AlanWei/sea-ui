import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import map from 'lodash/map';
import includes from 'lodash/includes';
import { routes } from 'app';

import './header.scss';

const propTypes = {
  location: PropTypes.object.isRequired,
};

class Header extends Component {
  renderMenu = () => (
    <ul className="menu">
      {
        map(routes, (route) => {
          if (route.isMenu) {
            const { path } = route;
            const classes = classnames({
              menuItem: true,
              'home-active': path === this.props.location.pathname,
              'menuItem-active': includes(this.props.location.pathname, path) && path !== '/',
            });
            return (
              <Link
                to={path}
                className={classes}
                key={path}
              >
                <li>{route.name}</li>
              </Link>
            );
          }
          return null;
        })
      }
    </ul>
  )

  render() {
    return (
      <header className="header">
        <Link to="/">
          <span className="title">SEA UI</span>
        </Link>
        {this.renderMenu()}
      </header>
    );
  }
}

Header.propTypes = propTypes;
export default withRouter(Header);
