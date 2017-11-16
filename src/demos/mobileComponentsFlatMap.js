import Button from './mobile/button';
import Carousel from './mobile/carousel';
import Input from './mobile/input';
import Modal from './mobile/modal';
import Notification from './mobile/notification';
import Row from './mobile/row';
import SeoTable from './mobile/seoTable';
import Steps from './mobile/steps';

const componentsFlatMap = [{
  name: 'button',
  title: 'Button',
  component: Button,
}, {
  name: 'carousel',
  title: 'Carousel',
  component: Carousel,
}, {
  name: 'input',
  title: 'Input',
  component: Input,
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
  name: 'seoTable',
  title: 'SeoTable',
  component: SeoTable,
}, {
  name: 'steps',
  title: 'Steps',
  component: Steps,
}];

export default componentsFlatMap;
