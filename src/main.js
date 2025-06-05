import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/app.scss';
import 'virtual:svg-icons-register';
import Button from './components/Base/Button.vue';

const app = createApp(App);

app.component('BaseButton', Button);

app.mount('#app');
