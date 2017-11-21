import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import keys from 'lodash/keys';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  openNewTab: PropTypes.bool,
};

const defaultProps = {
  className: '',
  imgSrc: '',
  imgAlt: '',
  text: '',
  url: '',
  openNewTab: true,
};

class Row extends Component {
  render() {
    const {
      imgSrc, imgAlt, text, url, openNewTab,
    } = this.props;
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('sea-row', this.props.className);

    if (url !== '') {
      return (
        <a href={url} target={openNewTab ? '_blank' : ''}>
          <div {...rest} className={classes}>
            <img className="rowIcon" src={imgSrc} alt={imgAlt} />
            <span className="rowText">{text}</span>
          </div>
        </a>
      );
    }

    return (
      <div {...rest} className={classes}>
        <img className="rowIcon" src={imgSrc} alt={imgAlt} />
        <span className="rowText">{text}</span>
      </div>
    );
  }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;
