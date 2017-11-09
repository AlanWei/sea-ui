import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

const propTypes = {
  header: PropTypes.any,
  content: PropTypes.any,
  actions: PropTypes.any,
};

const defaultProps = {
  header: '',
  content: '',
  actions: '',
};

class Modal extends Component {
  render() {
    const classes = classnames('seaui-modal', this.props.className);
    return (
      <div className={classes}>
        <div className="modalHeader">
          {this.props.header}
        </div>
        <div className="modalContent">
          {this.props.content}
        </div>
        <div className="modalActions">
          {this.props.actions}
        </div>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
