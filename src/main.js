import Vue from 'vue';
import App from './App';

import router from './router';
import './styles/styles.scss';

export default new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
