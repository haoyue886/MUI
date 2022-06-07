import Vue from 'vue'
import App from './App.vue'

import '../UI/css/button.scss'
import Button from "../UI/packages/button/index";
import '../UI/css/badge.scss'
import Badge from "../UI/packages/badge/index";
Vue.use(Button);
Vue.use(Badge);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')