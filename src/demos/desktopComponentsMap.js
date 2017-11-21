import Button from './desktop/button';
import Carousel from './desktop/carousel';
import Checkbox from './desktop/checkbox';
import Input from './desktop/input';
import Modal from './desktop/modal';
import SeoTable from './desktop/seoTable';

const componentsMap = [{
  title: 'Data Entry',
  components: [{
    name: 'button',
    title: 'Button',
    component: Button,
  }, {
    name: 'checkbox',
    title: 'Checkbox',
    component: Checkbox,
  }, {
    name: 'input',
    title: 'Input',
    component: Input,
  }],
}, {
  title: 'Data Display',
  components: [{
    name: 'carousel',
    title: 'Carousel',
    component: Carousel,
  }, {
    name: 'seoTable',
    title: 'SeoTable',
    component: SeoTable,
  }],
}, {
  title: 'Feedback',
  components: [{
    name: 'modal',
    title: 'Modal',
    component: Modal,
  }],
}];

export default componentsMap;
