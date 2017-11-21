import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import keys from 'lodash/keys';
import Toast from './Toast';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  dismissText: PropTypes.string,
  onDismiss: PropTypes.func,
  autoDismiss: PropTypes.bool,
  autoDismissInterval: PropTypes.number,
};

const defaultProps = {
  className: '',
  dismissText: 'OK',
  onDismiss: () => {},
  autoDismiss: true,
  autoDismissInterval: 2000,
};

class Notification extends React.Component {
  componentDidMount() {
    if (this.props.autoDismiss) {
      setTimeout(this.handleDismiss, this.props.autoDismissInterval);
    }
  }

  handleDismiss = () => {
    this.props.onDismiss();
  }

  render() {
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('seaui-notification', this.props.className);
    return (
      <div {...rest} className={classes}>
        <Toast
          text={this.props.text}
          dismissText={this.props.dismissText}
          onDismiss={this.handleDismiss}
        />
      </div>
    );
  }
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
export default Notification;
