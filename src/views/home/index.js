import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import map from 'lodash/map';
import { routes } from 'app';
import './style.scss';

const propTypes = {
  pathname: PropTypes.string.isRequired,
};

class Home extends Component {
  renderHeader = () => (
    <header className="header">
      <Link to="/"><span className="title">SEA UI</span></Link>
      {this.renderMenu()}
    </header>
  )

  renderMenu = () => (
    <ul className="menu">
      {
        map(routes, (route) => {
          if (route.isMenu) {
            const path = route.path;
            const classes = classnames({
              menuItem: true,
              'menuItem-active': path === this.props.pathname,
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

  renderContent = () => (
    <div className="body">
      <div className="demo">
        <iframe className="iframe" title="components" src="/components" />
      </div>
    </div>
  )

  renderFooter = () => (
    <footer className="footer">
      Copyright © 2017
    </footer>
  )

  render() {
    return (
      <div className="view-home">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

Home.propTypes = propTypes;
export default connect(mapStateToProps)(Home);
