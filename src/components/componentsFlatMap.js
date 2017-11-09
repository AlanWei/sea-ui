import Button from './button';
import Carousel from './carousel';
import Modal from './modal';
import Notification from './notification';
import Row from './row';
import Steps from './steps';

const componentsFlatMap = [{
  name: 'button',
  title: 'Button',
  component: Button,
}, {
  name: 'carousel',
  title: 'Carousel',
  component: Carousel,
}, {
  name: 'modal',
  title: 'Modal',
  component: Modal,
}, {
  name: 'notification',
  title: 'Notification',
  component: Notification,
}, {
  name: 'row',
  title: 'Row',
  component: Row,
}, {
  name: 'steps',
  title: 'Steps',
  component: Steps,
}];

export default componentsFlatMap;
