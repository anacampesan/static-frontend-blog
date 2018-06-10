import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/components/layouts/HomeLayout'
import DefaultLayout from '@/components/layouts/DefaultLayout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomeLayout',
            component: HomeLayout
        },
        {
            path: '/posts',
            name: 'Default Layout',
            component: DefaultLayout
        }
    ]
})
