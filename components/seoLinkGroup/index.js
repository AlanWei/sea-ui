import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import map from 'lodash/map';
import omit from 'lodash/omit';
import keys from 'lodash/keys';
import Link from './Link';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
    })),
  })),
  layout: PropTypes.oneOf('horizontal', 'vertical'),
};

const defaultProps = {
  className: '',
  data: [],
  layout: 'horizontal',
};

class SeoLinkGroup extends Component {
  render() {
    const { data, layout } = this.props;
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames({
      'seaui-seoLinkGroup': true,
      [this.props.className]: true,
    });
    const linkClasses = classnames({
      'link-horizontal': layout === 'horizontal',
      'link-vertical': layout === 'vertical',
    });

    return (
      <div
        {...rest}
        className={classes}
      >
        {
          map(data, (block, idx) => (
            <div
              className="linkGroup"
              key={idx}
            >
              <div className="groupTitle">{block.title}</div>
              {map(block.links, (link, index) => (
                <Link
                  className={linkClasses}
                  key={index}
                  text={link.text}
                  link={link.link}
                />
              ))}
            </div>
          ))
        }
      </div>
    );
  }
}

SeoLinkGroup.propTypes = propTypes;
SeoLinkGroup.defaultProps = defaultProps;
export default SeoLinkGroup;
