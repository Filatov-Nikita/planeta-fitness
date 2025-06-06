import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/app.scss';
import 'virtual:svg-icons-register';
import Button from './components/Base/Button.vue';
import Icon from './components/Base/Icon.vue';

const app = createApp(App);

app.component('BaseButton', Button);
app.component('BaseIcon', Icon);

app.mount('#app');
