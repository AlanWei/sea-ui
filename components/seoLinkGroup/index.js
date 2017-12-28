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
    children: PropTypes.array,
  })),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
};

const defaultProps = {
  className: '',
  data: [],
  layout: 'horizontal',
};

class SeoLinkGroup extends Component {
  renderHeader = (title, idx) => (
    <div
      key={idx}
      className="groupTitle"
    >
      {title}
    </div>
  )

  renderHref = (linkClasses, text, link, idx) => (
    <Link
      key={idx}
      className={linkClasses}
      text={text}
      link={link}
    />
  );

  renderBlock = (block, linkClasses) => (
    map(block.children, (obj, idx) => {
      switch (obj.type) {
        case 'HEADER':
          return this.renderHeader(obj.text, idx);
        case 'HREF':
          return this.renderHref(linkClasses, obj.label, obj.url, idx);
        default:
          return null;
      }
    })
  )

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
              key={idx}
              className="linkGroup"
            >
              {this.renderBlock(block, linkClasses)}
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
