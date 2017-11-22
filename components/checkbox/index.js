import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import keys from 'lodash/keys';
import omit from 'lodash/omit';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
};

const defaultProps = {
  className: '',
  text: '',
  checked: false,
  disabled: false,
  onSelect: () => {},
};

class Checkbox extends Component {
  render() {
    const {
      className, text, checked, disabled, onSelect,
    } = this.props;
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('seaui-checkbox', className);
    const valueClasses = classnames({
      checkboxValue: true,
      'checkboxValue-disabled': disabled,
    });

    return (
      <div
        {...rest}
        className={classes}
        role="presentation"
        onClick={onSelect}
        onKeyPress={onSelect}
      >
        <input
          className="checkboxInput"
          type="checkbox"
          checked={checked}
          onChange={() => {}}
          disabled={disabled}
        />
        <span className={valueClasses}>{text}</span>
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default Checkbox;
