import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/app.scss';
import 'animate.css';
import 'virtual:svg-icons-register';
import Button from './components/Base/Button.vue';
import Icon from './components/Base/Icon.vue';
import Modal from './components/Base/Modal/index.vue';
import ModalCard from './components/Base/Modal/Card.vue';
import Input from './components/Base/Input.vue';
import Spinner from './components/Base/Spinner.vue';
import Select from './components/Base/Select.vue';
import InnerLoading from './components/Base/InnerLoading.vue';
import Notifications from '@kyvg/vue3-notification';

const app = createApp(App);

app.use(Notifications);

app.component('BaseButton', Button);
app.component('BaseIcon', Icon);
app.component('BaseModal', Modal);
app.component('BaseModalCard', ModalCard);
app.component('BaseInput', Input);
app.component('BaseSpinner', Spinner);
app.component('BaseSelect', Select);
app.component('BaseInnerLoading', InnerLoading);

app.mount('#app');
