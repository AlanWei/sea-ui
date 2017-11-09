import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import './Toast.scss';

const propTypes = {
  dismissText: PropTypes.string,
  onDismiss: PropTypes.func,
  text: PropTypes.string,
};

const defaultProps = {
  dismissText: '',
  onDismiss: null,
  text: PropTypes.string,
};

const renderButton = (dismissText, onDismiss) => (
  <Button
    className="toastButton"
    uiColor="green"
    uiType="flat"
    stretch={false}
    onClick={onDismiss}
  >
    {dismissText}
  </Button>
);

const Toast = props => (
  <div className="seaui-notificationToast">
    <div className="toastText">
      {props.text}
    </div>

    {props.dismissText && props.onDismiss
      ? renderButton(props.dismissText, props.onDismiss)
      : null
    }
  </div>
);

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;
export default Toast;
