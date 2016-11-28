<template>
    <div id="activityInfo">
        <div id="activity-header">

        </div>
        <div id="activity-content">

                <div class="activity-item" v-for="l in list">
                    <router-link to="./community">
                        <div>
                            <img src="../image/picture-150.jpg" alt="">
                            <div class="activity-item-header">
                                <div class="aih-title">{{article.title}}</div>
                                <div class="aih-time">{{article.time}}</div>
                            </div>
                        </div>
                    </router-link>


                </div>

        </div>
    </div>
</template>
<style lang="sass">
    #activityInfo{
        box-sizing: border-box;
        padding-bottom: 80px;
    }
    #activity-header{

        width:100vw;
        height: 200px;
        margin-bottom: 5px;
        background:{
              image:url('../image/picture-375.jpg');
        }


    }

    #activity-content{
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .activity-item{
        width: 150px;
        box-sizing: border-box;
        border-radius: 4px;
        margin: 4px;
        img{
            border-radius: 4px 4px 0 0;
        }
        .activity-item-header{
            font-size: 12px;
            line-height: 1.5;
            padding:10px;
            .aih-title{
                font-weight: bold;
            }
            .aih-time{
                color: #999;
            }
        }
    }
</style>
<script>
    export default {
        data: function(){
            return {
                list:[0,1,2,3,4,5,6,7,8,9],
                article:{
                    time:'2016-11-26',
                    title:'科大医院全民体检进大谭山社区',
                    place:'大谭山X座地下会所一楼',
                    item:'血压检测、视力检测、老年人饮食健康咨询',
                    content:'房间爱我我了几分垃圾堆里看风景啊诶佛奥激烈的咖啡机爱儿健放辣椒发哦微积分快递劫匪来微积分来得及佛爱叫我飞机积分来问价覅解放啦没放假啦点击FILA文件分类看得见覅微积分俩积分就FILA耳温计法拉盛大家发问IE'
                },


            }
        },
//        mounted(){
//            var that = this;
//            window.addEventListener('scroll',function(){
//                console.log(document.body.scrollHeight);
//                console.log(document.body.offsetHeight);
//
//                if(document.body.scrollTop == document.body.offsetHeight){
//                    that.list.push(that.list.length);
//                    that.list.push(that.list.length);
//
//                }
//            })
//        }

    }
</script>