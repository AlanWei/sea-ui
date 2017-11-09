import Button from './button';
import Carousel from './carousel';
import Modal from './modal';
import Notification from './notification';
import Row from './row';
import Steps from './steps';

const componentsMap = [{
  title: 'Data Entry',
  components: [{
    name: 'button',
    title: 'Button',
    component: Button,
  }],
}, {
  title: 'Data Display',
  components: [{
    name: 'carousel',
    title: 'Carousel',
    component: Carousel,
  }, {
    name: 'row',
    title: 'Row',
    component: Row,
  }, {
    name: 'steps',
    title: 'Steps',
    component: Steps,
  }],
}, {
  title: 'Feedback',
  components: [{
    name: 'modal',
    title: 'Modal',
    component: Modal,
  }, {
    name: 'notification',
    title: 'Notification',
    component: Notification,
  }],
}];

export default componentsMap;
