import Vue from 'vue';
import Router from 'vue-router';

import Hello from './components/Hello';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

Vue.use(Router);

const routes = [
  { path: '/hello', component: Hello },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: Portfolio },
];

export default new Router({ routes, mode: 'history' });
