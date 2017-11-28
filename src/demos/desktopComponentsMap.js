import Button from './desktop/button';
import Card from './desktop/card';
import Carousel from './desktop/carousel';
import Checkbox from './desktop/checkbox';
import Input from './desktop/input';
import Modal from './desktop/modal';
import SeoLinkGroup from './desktop/seoLinkGroup';
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
    name: 'card',
    title: 'Card',
    component: Card,
  }, {
    name: 'carousel',
    title: 'Carousel',
    component: Carousel,
  }],
}, {
  title: 'Feedback',
  components: [{
    name: 'modal',
    title: 'Modal',
    component: Modal,
  }],
}, {
  title: 'SEO',
  components: [{
    name: 'seoLinkGroup',
    title: 'SeoLinkGroup',
    component: SeoLinkGroup,
  }, {
    name: 'seoTable',
    title: 'SeoTable',
    component: SeoTable,
  }],
}];

export default componentsMap;
