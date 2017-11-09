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

function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }

  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft';
  const isWindow = target === window;

  const ret = isWindow ? target[prop] : target[method];

  return ret;
}

function getTargetRect(target) {
  if (typeof window === 'undefined') {
    return {};
  }

  return target !== window ?
    target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}

function getOffset(element, target) {
  if (typeof window === 'undefined' || isNil(element)) {
    return {};
  }

  const elemRect = element.getBoundingClientRect();

  const targetRect = getTargetRect(target);

  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target, false);

  const docElem = get(window, 'document.body');
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: (elemRect.top - targetRect.top) + (scrollTop - clientTop),
    left: (elemRect.left - targetRect.left) + (scrollLeft - clientLeft),
    width: elemRect.width,
    height: elemRect.height,
  };
}

function getBodyCurrentTop() {
  if (typeof window === 'undefined') {
    return 0;
  }

  return get(window, 'document.body.offsetTop');
}

export {
  getPosition,
  getScroll,
  getTargetRect,
  getOffset,
  getBodyCurrentTop,
};
