import Button from './mobile/button';
import Carousel from './mobile/carousel';
import SeoTable from './desktop/seoTable';
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
  name: 'seoTable',
  title: 'SeoTable',
  component: SeoTable,
}, {
  name: 'steps',
  title: 'Steps',
  component: Steps,
}];

export default componentsFlatMap;
