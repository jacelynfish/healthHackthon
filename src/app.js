import Vue from 'vue'
import VueRouter from 'vue-router'
// import Vuex from 'vuex'
// import store from './store/store'


//components
import myapp from './components/app.vue'
import article from './components/article.vue'
import personalInfo from './components/personalInfo.vue'

import healthInfo from './components/healthInfoComp.vue'
import community from './components/community.vue'
import communityComp from './components/communityComp.vue'

require('./style/_reset.scss');
require('./style/headnav.scss');

Vue.use(VueRouter);
// Vue.use(Vuex);

const router = new VueRouter({
    routes:[
        {
            path:'/healthInfo',
            component:healthInfo,

            // name:
        },
        {
            path:'/activityInfo',
            component:communityComp,
        },
        {
            path:'/volunteer',
            component:article,
        },
        {
            path:'/personalInfo',
            component:personalInfo,
        },
        {
            path:'/article',
            component: article
        },
        {
            path:'/community',
            component: community
        },{
            path:'*',
            component:healthInfo
        }
    ],
    linkActiveClass:'nav-item-active'
})



var app = new Vue({
    template:'<myapp></myapp>',
    el:'#container',

    components:{
        myapp
    },
    router,


})

// module.exports = app;