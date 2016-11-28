<template>
    <div class="article">
        <div class="article-header article-item">
            <p class="article-title">{{article.title}}</p>
        </div>
        <div class="article-info article-item">
            <div class="article-info-item article-info-item-title">作者：{{article.author}}  发布时间：{{article.time}}</div>
            <div class="article-info-item article-info-item-brief">{{article.brief}}</div>
        </div>
        <div class="article-content article-item">
            <div class="content-para" v-for="para in article.paras">
                <h3 class="article-section-header">{{para.header}}</h3>
                <p class="article-section-content">{{para.content}}</p>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                article:{
                    author:'科大医院',
                    time:'2016-11-26',
                    title:'老人冬季晨练学问多',
                    brief:' 冬天虽寒冷，但还是有很多中老年人会进行健身行动。不过老年人晨练也是需要注意一些禁忌的，不然越练越危害身体。本文为大家介绍了老人晨练的注意事项',
                    paras:[{
                        header:'1.不宜“早”。',
                        content:'早晨气温低、雾气重、温度大，易患感冒、气喘、“老慢支”和肺心病等，还会使病情加重。故老年人宜在太阳初升后外出锻炼，这时的空气才真正清新。'
                    },
                        {
                            header:'2.不宜“空”。',
                            content:'晨起血流相对缓慢，血压、体温偏低，且经过一夜的消化，腹中空空。故晨练前应适当喝点热饮，如牛奶、蛋汤、豆浆和稀粥等，以补充人体水分，增加热量，加速血液循环，可防止心脑血管意外的发生。'
                        },{
                            header:'3.不宜“露”。',
                            content:'大清早去户外活动，要选择避风向阳、温暖安静、空气新鲜的旷野或有草坪的地方锻炼，不要顶风跑，更不要未锻炼先脱衣露体，以免着凉感冒。'
                        },{
                            header:'4.不宜“激”。',
                            content:'老年人体质较弱，适应能力差，故运动不宜激烈，要量力而行，循序渐进，适度为宜。可多作些低运动量和舒缓的运动，如散步、慢跑、打太极拳、做健身操、舞剑等。实践证明，老年人作激烈运动容易诱发心肺疾病，不利于身心健康。'
                        },{
                            header:'5.不宜“急”。',
                            content:'即不作无准备的锻炼。因老年人早晨起床后，肌肉松驰，关节、韧带僵硬，锻炼前应先做准备活动，如甩甩手臂，轻揉躯体，扭扭腰肢，活动活动关节，放松肌肉，待热身后再进行锻炼，防止行运过急而诱发意外伤害。'
                        },{
                            header:'6.不宜“猛”。',
                            content:'即猛蹲、猛立、猛回头。一般来说，老年人多有不同程度的脑动脉硬化、高血压、高血脂、颈椎骨质增生等症，大脑供血有一定程度的不足。若猛然蹲、立或猛回头向后看，会使大脑供血不足而出现眩晕、耳鸣、眼花、恶心、呕吐等症状，甚至会骤然昏倒。因此，老年人锻炼时速度要慢，动作要缓，切莫猛蹲、猛立、猛回头，以免发生意外。'
                        },{
                            header:'',
                            content:'另外，老年人晨炼前要进食应以松软、可口、温热的食物为宜，如热豆浆、热牛奶、点心、藕粉、发糕、粥、鸡蛋饼、燕麦片等和素炒胡萝卜丝，白菜丝等小菜，吃得既舒服又有营养。'
                        }]
                },


            }
        },

    }
</script>
<style lang="sass">

    $maincolor:#33CC99;
    $mainfont:'微软雅黑', Helvetica;

    .article{
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        padding-bottom: 80px;
        box-sizing: border-box;
    }
    .article-item{
        margin: 5px 0;
    }
    .article-item:first-child{
        margin: 0px;
    }

    .article-header{
        width: 100vw;
        height: 30vh;
        box-sizing: border-box;
        padding:20px;

    background: {
            image:url('http://img.cnys.com/upload/picture/2016/11-24/5FPlir.jpg');
            repeat:no-repeat;
            size:cover;
        }
    }
    .article-title{
        font-family: $mainfont;
        color:white;
        font-size: 24px;
        vertical-align: text-bottom;
        font-weight: bold;
        text-shadow: 2px 2px 2px #666;
    }

    .article-info{
        background-color: rgba(204,204,204,0.1);
        color: #666666;
        box-sizing: border-box;
        padding: 16px 40px;
        margin-top: 0px;

    }
    .article-info-item{
        margin:4px 0;
        line-height: 1.5;

    }
    .article-info-item-title{
        color: $maincolor;
    }
    .article-info-item-brief{
        color: #bbb;
    }
    .article-content{
        box-sizing: border-box;
        padding: 0 36px;
        margin-top: 24px;
        background-color: white;
    }

    .article-section-header{
        font-size: 20px;
        font-weight: bold;
        color: $maincolor;
        line-height: 2.4;
    }
    .article-section-content{
        margin: 4px 0;
        font-size: 14px;
        line-height:1.8;
        color: #444;
    }
</style>