import Button from './desktop/button';
import Card from './desktop/card';
import Carousel from './desktop/carousel';
import Checkbox from './desktop/checkbox';
import Input from './desktop/input';
import Modal from './desktop/modal';
import SeoLinkGroup from './desktop/seoLinkGroup';
import SeoTable from './desktop/seoTable';

const componentsFlatMap = [{
  name: 'button',
  title: 'Button',
  component: Button,
}, {
  name: 'card',
  title: 'Card',
  component: Card,
}, {
  name: 'carousel',
  title: 'Carousel',
  component: Carousel,
}, {
  name: 'checkbox',
  title: 'Checkbox',
  component: Checkbox,
}, {
  name: 'input',
  title: 'Input',
  component: Input,
}, {
  name: 'modal',
  title: 'Modal',
  component: Modal,
}, {
  name: 'seoLinkGroup',
  title: 'SeoLinkGroup',
  component: SeoLinkGroup,
}, {
  name: 'seoTable',
  title: 'SeoTable',
  component: SeoTable,
}];

export default componentsFlatMap;
