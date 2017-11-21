import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import map from 'lodash/map';
import omit from 'lodash/omit';
import keys from 'lodash/keys';
import tick from '../assets/tick.svg';

import './index.scss';

const propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  activeDataIndex: PropTypes.number,
};

const defaultProps = {
  className: '',
  data: [],
  activeDataIndex: 0,
};

class Steps extends Component {
  renderSteps = () => (
    map(this.props.data, (step, idx) => {
      const isFirst = idx === 0;
      const isComplete = idx < this.props.activeDataIndex;
      const isActive = idx === this.props.activeDataIndex;
      const isLast = idx === this.props.data.length - 1;

      const classes = classnames({
        stepCircle: true,
        isFirst,
        isActive,
        isLast,
      });
      const iconClasses = classnames({
        completeIcon: true,
        isFirst,
        isLast,
      });
      return (
        <div className="step" key={idx}>
          {isComplete ?
            <img className={iconClasses} src={tick} alt="" />
            :
            <div className={classes}>{step.text}</div>
          }
          {isLast ?
            null :
            <div className="connectLine" />
          }
        </div>
      );
    })
  );

  render() {
    const rest = omit(this.props, keys(defaultProps));
    const classes = classnames('seaui-steps', this.props.className);
    return (
      <div {...rest} className={classes}>
        {this.renderSteps()}
      </div>
    );
  }
}

Steps.propTypes = propTypes;
Steps.defaultProps = defaultProps;
export default Steps;
