import router from './router'
import store from './store'
import Vue from "vue";
import App from "./App.vue";
import "@aws-amplify/ui-vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import '@fortawesome/fontawesome-free/css/all.css'


Amplify.configure(awsconfig);
Vue.use(VueSidebarMenu)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


//Vue.config.productionTip = false
