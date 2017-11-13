import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import map from 'lodash/map';

import './index.scss';

const propTypes = {
  thData: PropTypes.array.isRequired,
  tdData: PropTypes.array.isRequired,
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
    const classes = classnames('seaui-seoTable', this.props.className);
    return (
      <table className={classes}>
        {this.renderTh()}
        {this.renderTd()}
      </table>
    );
  }
}

SeoTable.propTypes = propTypes;
export default SeoTable;
