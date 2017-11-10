import Home from 'views/home';
import Components from 'views/components';
import Mobile from 'views/mobile';
import MobileComponent from 'views/mobileComponent';

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
  isMenu: true,
  component: Components,
}, {
  path: '/mobile',
  exact: true,
  name: 'Mobile',
  isMenu: true,
  component: Mobile,
}, {
  path: '/mobile/:componentName',
  exact: true,
  isMenu: false,
  component: MobileComponent,
}];

export default routes;
