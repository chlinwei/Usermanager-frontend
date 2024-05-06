import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Login from './views/login/Login.vue';
import Index from  '@/layout/Index.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '',redirect: "/login"},
  { path: '/login', name: 'login',component: Login },
  {path: '/index',name: 'index',component: Index}
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // `routes: routes` 的缩写
})
const  app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
