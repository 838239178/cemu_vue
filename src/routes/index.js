import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('@/views/index/Index.vue'),
        // children: manager
    },
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
        // children: login
    },
    {
        path: '/community',
        component: () => import('@/views/community/Community.vue')
    },
    {
        path: '/compost',
        component: () => import('@/views/community/Post.vue')
    },
    {
        path: '/gamecenter',
        component: () => import('@/views/game/GameCenter.vue')
    },
    {
        path: '/gamedetail',
        component: () => import('@/views/game/GameDetail.vue')
    },
    {
        path: '/rank',
        component: () => import('@/views/rank/GameRank.vue')
    },
    {
        path: '/test',
        component: () => import('@/views/Test.vue')
    }
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
