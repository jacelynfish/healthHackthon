<template>
    <div id="articles">
        <div class="articles-item">
            <img id="ai-img" src="../image/picture-375.jpg" alt="">
        </div>
        <div class="articles-item" id="ai-util">
                <div class="util-section-header">
                    我的存档
                </div>
                <ul>
                    <li class="util-item">
                        <img src="../icon/person-icon/article.png" alt="">
                        <p>文章收藏</p>
                    </li>
                    <li class="util-item">
                        <img src="../icon/person-icon/medicine.png" alt="">
                        <p>医疗记录</p>
                    </li>
                    <li class="util-item">
                        <img src="../icon/person-icon/activity.png" alt="">
                        <p>我的活动</p>
                    </li>
                    <li class="util-item">
                        <img src="../icon/person-icon/doctor.png" alt="">
                        <p>医生预约</p>
                    </li>
                </ul>

        </div>
        <div class="articles-item" v-for="article in articles">

            <router-link to="/article">

                    <img src="../image/picture-375.jpg" class="ai-img">
                <div class="ai">
                    <p class="articles-title">{{article.title}}</p>
                    <p class="articles-brief">{{article.brief}}</p>
                </div>



            </router-link>
            <!--dzxcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor enim error quaerat reiciendis. Amet assumenda atque corporis harum id iste maiores vero! Autem ea eaque minima non sit. <In class="lorem"></In>-->


        </div>
    </div>
</template>
<style lang="sass">
    $maincolor:#33CC99;
    $mainfont:'微软雅黑', Helvetica;

    #articles{
        /*display: flex;*/
        /*flex-flow: column;*/
        /*justify-content: flex-start;*/
        background-color: #eee;
        padding-bottom: 80px;
        box-sizing: border-box;
    }
    .articles-item{
        margin:6px 0;
        background-color: white;
        padding-bottom: 12px;

    }
    .articles-item:first-child{
        padding-bottom: 0;
    }
    #ai-util{
        padding-top:12px;

    }
    #ai-util ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: flex-start;
        li{
            text-align: center;
            font-size: 12px;
            /*display: flex;*/
            /*flex-direction: column;*/
            /*justify-content: center;*/
        }

    }
    .ai-img{
        width: 100vw;
    }
    .articles-item:first-child{
        margin-top: 0;
    }.articles-item #ai-img{
        width: 100vw;
    }
    .ai{
        background-color: white;
        padding: 6px 24px;
    }
    .articles-title{
        color: $maincolor;
        font-size: 16px;
        line-height: 2;
        font-weight: bold;
        text-align: center;
    }
    .articles-brief{
        color: #bbb;
        font-size: 14px;
        line-height:1.2;
    }

</style>
<script>

    import article from './article.vue'
    export default{
        data:function(){
            return{
                articles:[
                    {
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
                    {
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
                    {
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
                    {
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
                ]
            }
        },

    }
</script>