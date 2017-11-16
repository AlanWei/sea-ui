import Button from './desktop/button';
import Carousel from './desktop/carousel';
import SeoTable from './desktop/seoTable';

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
    name: 'seoTable',
    title: 'SeoTable',
    component: SeoTable,
  }],
}];

export default componentsMap;
