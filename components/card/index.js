import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  actions: PropTypes.any,
};

const defaultProps = {
  className: '',
  title: '',
  actions: null,
};

class Card extends Component {
  render() {
    const classes = classnames('seaui-card', this.props.className);
    return (
      <div className={classes}>
        {this.props.title ?
          <div className="card-header">{this.props.title}</div>
          :
          null
        }
        <div className="card-body">{this.props.children}</div>
        {this.props.actions ?
          <div className="card-actions">{this.props.actions}</div>
          :
          null
        }
      </div>
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
