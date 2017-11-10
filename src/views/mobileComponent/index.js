import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import find from 'lodash/find';
import isNil from 'lodash/isNil';
import get from 'lodash/get';
import components from 'demos/mobileComponentsFlatMap';
import home from '../../assets/home.svg';

import './style.scss';

const propTypes = {
  match: PropTypes.object.isRequired,
};

class MobileComponent extends Component {
  state = {
    component: null,
  }

  componentWillMount() {
    this.findComponent();
  }

  findComponent = () => {
    const component = find(components, comp => (
      comp.name === get(this.props.match, 'params.componentName', '')
    ));

    this.setState({
      component,
    });
  }

  renderHeader = () => (
    <header className="header">
      <Link to="/mobile">
        <img className="list" src={home} alt="" />
      </Link>
      <span className="componentName">{get(this.state.component, 'title', '')}</span>
    </header>
  )

  renderComponent = () => {
    const Demo = get(this.state.component, 'component');
    if (isNil(Demo)) {
      return null;
    }
    return <Demo />;
  }

  render() {
    return (
      <div className="view-mobileComponent">
        {this.renderHeader()}
        {this.renderComponent()}
      </div>
    );
  }
}

MobileComponent.propTypes = propTypes;
export default withRouter(MobileComponent);
