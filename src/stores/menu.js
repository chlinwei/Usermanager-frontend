import { defineStore } from 'pinia'
export const useMnuStore = defineStore('menu',{
    state: ()=> ({
        menuList: [],
        routerList: [], // 动态路由数据，也就是左侧菜单的路由信息
        tabList: [{title:'首页',path:"/index",isClose: false}],// 所有的tab
        activeTab: '/index'// 当前选中的tab，通过path体现
    }),
    getters: {
        Array: (state) => state.menuList,
        Array: (state) => state.routerList,
        Array: (state) => state.tabList,
        String: (state) => state.activeTab
    },
    actions: {
        setMenuList(data) {
            this.menuList = data;
        },
        setRouterList(data) {
            this.routerList = data;
        },
        set
    }
})