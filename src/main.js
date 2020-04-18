import Vue from 'vue'
import App from './App.vue'
import Home from "./components/home/Home";
import VueRouter from "vue-router";
import TgsGamePicker from "./components/tgs-game-picker/TgsGamePicker";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/game', component: TgsGamePicker },
    //{path: '/rules', component: Rules }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
