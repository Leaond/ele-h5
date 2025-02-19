import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (deviceWidth*rootValue)/rootWidth + 'px'

createApp(App).use(router).mount('#app');
