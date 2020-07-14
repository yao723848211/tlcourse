import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入ifonfont阿里图标库
import "./assets/font/iconfont"


import {
  Icon,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Dialog,
  Form,
  FormItem,
  Input,
  Message,
  Button,
  Checkbox, Tag
} from 'element-ui';
import store from "./store";
Vue.use(VueAxios, axios)
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Carousel )
Vue.use(CarouselItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)


Vue.use(Checkbox)
Vue.use(Tag)



Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
