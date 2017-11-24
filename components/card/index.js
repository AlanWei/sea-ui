import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  className: '',
  title: '',
};

class Card extends Component {
  render() {
    const classes = classnames('seaui-card', this.props.className);
    return (
      <div className={classes}>
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">{this.props.children}</div>
      </div>
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
