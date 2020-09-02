import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './font/iconfont'
import 'element-ui/lib/theme-chalk/display.css';
import {
  Container,
  Header,
  Footer,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col,
  Input,
  Popover,
  Tabs,
  TabPane,
  Drawer,
  Card,
  Calendar,
  Select,
  Form,
  FormItem,
  Button,
} from 'element-ui'
import layoutMain from './components/layout-main.vue'

Vue.component('layout-main', layoutMain)

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Drawer)
Vue.use(Card)
Vue.use(Calendar)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
