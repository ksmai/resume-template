import Vue from 'vue';
import Router from 'vue-router';

import Hello from './components/hello/Hello';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';

Vue.use(Router);

const routes = [
  { path: '/hello', component: Hello },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: Portfolio },
  { path: '*', redirect: '/resume' },
];

export default new Router({ routes, mode: 'history' });
