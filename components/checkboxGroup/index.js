import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import map from 'lodash/map';
import clone from 'lodash/clone';
import Checkbox from '../checkbox';
import './index.scss';

const propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  checked: PropTypes.arrayOf(PropTypes.bool),
  onSelect: PropTypes.func,
};

const defaultProps = {
  className: '',
  data: [],
  checked: [],
  onSelect: () => {},
};

class CheckboxGroup extends Component {
  handleSelect = (idx) => {
    const temp = clone(this.props.checked);
    temp[idx] = !temp[idx];
    this.props.onSelect(temp);
  }

  render() {
    const { className, data, checked } = this.props;
    const classes = classnames('seaui-checkboxGroup', className);

    return (
      <div className={classes}>
        {map(data, (checkbox, idx) => {
          const itemClasses = classnames(
            'seaui-checkboxGroup-item',
            checkbox.className,
          );
          return (
            <Checkbox
              {...checkbox}
              key={idx}
              className={itemClasses}
              onSelect={() => this.handleSelect(idx)}
              checked={checked[idx]}
            />
          );
        })}
      </div>
    );
  }
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
export default CheckboxGroup;
