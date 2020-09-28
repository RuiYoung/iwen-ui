import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import iwenUi from "../packages/index";
// import "wy-zf-ui/dist/zf-ui.css";
Vue.config.productionTip = false
// 注册组件库
Vue.use(iwenUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
