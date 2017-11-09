import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  stretch: PropTypes.bool,
  uiColor: PropTypes.oneOf(['red', 'green', 'blue', 'white', 'black']),
  uiSize: PropTypes.oneOf(['xs', 's', 'md', 'lg']),
  uiType: PropTypes.oneOf(['fill', 'ghost', 'flat']),
};

const defaultProps = {
  className: '',
  stretch: true,
  uiColor: 'red',
  uiSize: 'md',
  uiType: 'fill',
};

const Button = (props) => {
  const rest = omit(props, Object.keys(defaultProps));
  const classes = classnames(
    'seaui-button',
    `seaui-button-${props.uiType}`,
    `seaui-button-${props.uiColor}`,
    `seaui-button-${props.uiSize}`,
    {
      'seaui-button-stretch': props.stretch,
    },
    props.className,
  );

  return (
    <button {...rest} className={classes}>
      {props.children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
