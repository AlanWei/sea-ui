import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import map from 'lodash/map';
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
            const path = route.path;
            const classes = classnames({
              menuItem: true,
              'menuItem-active': path === this.props.location.pathname,
            });
            return (
              <li className={classes} key={path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
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
