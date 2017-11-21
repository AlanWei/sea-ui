import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import keys from 'lodash/keys';
import omit from 'lodash/omit';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool,
  onSelect: PropTypes.func,
};

const defaultProps = {
  className: '',
  text: '',
  isActive: false,
  onSelect: () => {},
};

class Checkbox extends Component {
  handleClick = evt => (
    this.props.onSelect(evt, this.props.text)
  )

  render() {
    const { className, text, isActive } = this.props;
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('seaui-checkbox', className);
    const checkboxClasses = classnames({
      checkboxInput: true,
      'checkboxInput-active': isActive,
    });

    return (
      <div
        {...rest}
        className={classes}
        role="presentation"
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
      >
        <span className={checkboxClasses} />
        <span className="checkbox-value">{text}</span>
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default Checkbox;
