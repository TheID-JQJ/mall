import Vue from 'vue';
import VueRouter from 'vue-router';

const home = () => import('@/views/home/Home');

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    }
]

const router = new VueRouter({
    routes
});

export default router;