import { createRouter, createWebHashHistory } from "vue-router";

// 路由信息
const routes = [
    {
        path: '/',
        component: () => import('@/views/Welcome.vue'),
    },
    {
        path: '/welcome',
        component: () => import('@/views/Welcome.vue'),
    },
    {
        path: '/index',
        component: () => import('@/views/index/Index.vue'),
    },
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
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
        path: '/search',
        component: () => import('@/views/search/Search.vue')
    },
    {
        path: '/test',
        component: () => import('@/views/Test.vue')
    }
];

// 导出路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
