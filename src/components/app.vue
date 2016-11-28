<template>

<div >
    <div id="app">
        <div id="backToTop" @click="backToTop" v-if="isBackToTop">返<br/>回<br/>顶<br/>部</div>
        <div id="nav-panel">
            <ul >
                <li class="nav-item">
                    <router-link to="/healthInfo">
                        <img src="../icon/nav-bar-icon/health.png" alt="">
                        <p>健康资讯</p></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/activityInfo">
                        <img src="../icon/nav-bar-icon/community.png" alt="">

                        <p>社区活动</p></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/volunteer">
                        <img src="../icon/nav-bar-icon/volunteer.png" alt="">
                        <p>志愿者团队</p></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/personalInfo">
                        <img src="../icon/nav-bar-icon/person.png" alt="">

                        <p>我的信息</p></router-link>
                </li>
            </ul>

        </div>

        <div id="header">

            <div id="nav-bar">
                <ul >
                    <li class="nav-item">
                        <router-link to="/healthInfo">健康资讯</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/activityInfo">社区活动</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/volunteer">志愿者团队</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/personalInfo">我的信息</router-link>
                    </li>
                </ul>

            </div>
            <div id="search">
                <input type="text" id="search-input">
                <span id="search-btn"></span>
            </div>
        </div>
        <div id="content">
            <router-view></router-view>
        </div>
        <div id="footer"></div>
    </div>
</div>
</template>
<script>
    module.exports = {
//        directives:{
//            scroll:{
//                bind(el, binding, vnode){
//                    el.addEventListener('scroll', binding.value);
//                },
//                unbind(el,binding, vnode){
//                    el.removeEventListener('scroll', binding.value);
//                }
//
//            }
//        },
        data:function(){
          return{
              isBackToTop : false,
          }
        },
        mounted:function(){
            var that = this;
            window.addEventListener('scroll',function(){
               if(document.body.scrollTop > 400){

                    that.isBackToTop = true;
               }else{
                   that.isBackToTop = false;
               }
            });
        },
        methods:{
            onScroll(event){
                var target = event.target;

            },
            backToTop(){
//                console.log(document.body.scrollTop);
//                var currentTop = document.body.scrollTop;
//                var speed = 100;
//                var timer = null;
//                timer = setInterval(move, 10);
//
//                function move(){
//                    if(document.body.scrollTop <= 0){
//
//
//                        timer = null;
//                    }else{
//                        console.log(document.body.scrollTop);
//                        document.body.scrollTop =currentTop - speed;
//                        currentTop = document.body.scrollTop;
//                    }
//
//                }
                document.body.scrollTop = 0;


            }
        }
    }
</script>
<style lang="sass">

</style>