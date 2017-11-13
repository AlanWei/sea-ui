import Button from './desktop/button';
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
    name: 'seoTable',
    title: 'SeoTable',
    component: SeoTable,
  }],
}];

export default componentsMap;
