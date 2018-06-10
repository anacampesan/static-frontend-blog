import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/components/layouts/HomeLayout'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Post from '@/components/Post'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomeLayout',
            component: HomeLayout,
        },
        {
            path: '/post',
            name: 'post',
            component: DefaultLayout,
            children: [
                {
                    path: '1',
                    component: Post
                }
            ]
        },
        {
            path: '/posts',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'postscomp',
                    component: Posts
                }
            ]
        }
    ]
})
