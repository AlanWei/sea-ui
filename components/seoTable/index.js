import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import map from 'lodash/map';
import omit from 'lodash/omit';
import keys from 'lodash/keys';

import './index.scss';

const propTypes = {
  className: PropTypes.string,
  thData: PropTypes.array,
  tdData: PropTypes.array,
};

const defaultProps = {
  className: '',
  thData: [],
  tdData: [],
};

class SeoTable extends Component {
  renderTh = () => (
    <thead>
      <tr>
        {map(this.props.thData, (cell, idx) => (
          <th key={idx}>{cell.text}</th>
        ))}
      </tr>
    </thead>
  )

  renderTd = () => (
    <tbody>
      {map(this.props.tdData, (row, idx) => (
        <tr key={idx}>
          {map(row, (cell, index) => (
            <td key={index}>{cell.text}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )

  render() {
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('seaui-seoTable', this.props.className);
    return (
      <div {...rest} className={classes}>
        <table>
          {this.renderTh()}
          {this.renderTd()}
        </table>
      </div>
    );
  }
}

SeoTable.propTypes = propTypes;
SeoTable.defaultProps = defaultProps;
export default SeoTable;
