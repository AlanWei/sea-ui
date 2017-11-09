import Home from 'views/home';
import Components from 'views/components';
import ComponentContainer from 'views/componentContainer';

const routes = [{
  path: '/',
  exact: true,
  name: 'Home',
  isMenu: true,
  component: Home,
}, {
  path: '/components',
  exact: true,
  name: 'Components',
  isMenu: false,
  component: Components,
}, {
  path: '/components/:componentName',
  exact: true,
  isMenu: false,
  component: ComponentContainer,
}];

export default routes;
