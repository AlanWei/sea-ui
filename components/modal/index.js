import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import keys from 'lodash/keys';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  node: PropTypes.object,
  header: PropTypes.any,
  content: PropTypes.any,
  actions: PropTypes.any,
};

const defaultProps = {
  className: '',
  show: false,
  node: window.document.body,
  header: '',
  content: '',
  actions: '',
};

class Modal extends Component {
  renderModal = () => {
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('seaui-modal', this.props.className);
    return (
      <div {...rest} className={classes}>
        <div className="mask" />
        <div className="container">
          <div className="modal">
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
        </div>
      </div>
    );
  }

  render() {
    if (typeof window !== 'undefined' && this.props.show) {
      return ReactDOM.createPortal(
        this.renderModal(),
        this.props.node,
      );
    }
    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
