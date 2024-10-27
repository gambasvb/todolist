import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'; // Misalnya menggunakan tema gelap


createApp(App).use(pinia).use(router).use(ElementPlus).mount('#app');
