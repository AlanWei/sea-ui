import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Toast from './Toast';
import './index.scss';

const propTypes = {
  text: PropTypes.string.isRequired,
  dismissText: PropTypes.string,
  onDismiss: PropTypes.func,
  autoDismiss: PropTypes.bool,
  autoDismissInterval: PropTypes.number,
};

const defaultProps = {
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
    const classes = classnames('seaui-notification', this.props.className);
    return (
      <div className={classes}>
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
