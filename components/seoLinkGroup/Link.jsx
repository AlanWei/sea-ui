import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import keys from 'lodash/keys';
import './Link.scss';

const propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};

const defaultProps = {
  className: '',
  link: '',
  text: '',
};

class Link extends Component {
  render() {
    const { link, text } = this.props;
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames({
      'seaui-seoLink': true,
      [this.props.className]: true,
    });

    return (
      <a
        {...rest}
        className={classes}
        href={link}
      >
        {text}
      </a>
    );
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
export default Link;
