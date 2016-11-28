<template>
    <div class="article">
        <div class="article-item ait-header">
            <p class="article-title">{{article.title}}</p>
        </div>
        <div class="article-info article-item">
            <div class="article-info-item ait-community"><span>时间：</span>{{article.time}}</div>
            <div class="article-info-item ait-community"><span>体检项目：</span>{{article.item}}</div>
            <div class="article-info-item ait-community"><span>地点：</span>{{article.place}}</div>

        </div>
        <div class="article-content article-item">

                <p class="article-section-content">{{article.content}}</p>


        </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                article:{
                    time:'2016-11-26',
                    title:'科大医院全民体检进大谭山社区',
                    place:'大谭山X座地下会所一楼',
                    item:'血压检测、视力检测、老年人饮食健康咨询',
                    content:'房间爱我我了几分垃圾堆里看风景啊诶佛奥激烈的咖啡机爱儿健放辣椒发哦微积分快递劫匪来微积分来得及佛爱叫我飞机积分来问价覅解放啦没放假啦点击FILA文件分类看得见覅微积分俩积分就FILA耳温计法拉盛大家发问IE'
                },


            }
        },

    }
</script>
<style lang="sass">
    .ait-community{
        font-size: 18px;
        line-height: 2.0;

        span{
            color:#3c9;
            font-weight: bold;
        }
    }
    .ait-header{
        width: 100vw;
        height: 200px;
        padding: 20px;
        box-sizing: border-box;
        background-image: url('../image/picture-375.jpg');
    }
</style>