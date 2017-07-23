import isNil from 'lodash/isNil';
import get from 'lodash/get';
import head from 'lodash/head';

function getPosition(event) {
  if (!isNil(get(event, 'touches'))) {
    const { pageX, pageY } = head(event.touches);
    return {
      x: pageX,
      y: pageY,
    };
  }

  return {
    x: get(event, 'clientX'),
    y: get(event, 'clientY'),
  };
}

export {
  getPosition,
};
