import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import keys from 'lodash/keys';

import './index.scss';

const propTypes = {
  className: PropTypes.string,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  autoFocus: PropTypes.bool,
  onPressEnter: PropTypes.func,
};

const defaultProps = {
  className: '',
  imgUrl: '',
  imgAlt: '',
  autoFocus: false,
  onPressEnter: () => {},
};

class Input extends Component {
  componentDidMount() {
    if (this.props.autoFocus) {
      this.textInput.focus();
    }
  }

  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.props.onPressEnter();
    }
  }

  renderImg = () => {
    const { imgUrl, imgAlt } = this.props;
    if (imgUrl === '') {
      return null;
    }
    return <img className="image" src={imgUrl} alt={imgAlt} />;
  }

  render() {
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('seaui-input', this.props.className);
    const inputClasses = classnames({
      input: true,
      'input-withImage': this.props.imgUrl !== '',
    });
    return (
      <div className={classes}>
        {this.renderImg()}
        <input
          {...rest}
          ref={(input) => { this.textInput = input; }}
          className={inputClasses}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default Input;
