import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import keys from 'lodash/keys';
import Toast from './Toast';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  text: PropTypes.string,
  dismissText: PropTypes.string,
  onDismiss: PropTypes.func,
  autoDismiss: PropTypes.bool,
  autoDismissInterval: PropTypes.number,
};

const defaultProps = {
  className: '',
  show: true,
  text: '',
  dismissText: 'OK',
  onDismiss: () => {},
  autoDismiss: true,
  autoDismissInterval: 2000,
};

class Notification extends React.Component {
  componentDidMount() {
    if (this.props.autoDismiss) {
      setTimeout(this.props.onDismiss, this.props.autoDismissInterval);
    }
  }

  render() {
    const { show, text, dismissText } = this.props;
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames({
      'seaui-notification': true,
      'seaui-notification-hidden': !show,
      [this.props.className]: true,
    });
    return (
      <div {...rest} className={classes}>
        <Toast
          text={text}
          dismissText={dismissText}
          onDismiss={this.props.onDismiss}
        />
      </div>
    );
  }
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
export default Notification;
