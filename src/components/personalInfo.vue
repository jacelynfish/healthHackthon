<template>
    <div id="person-container">
        <div id="basic-info" class="person-item">
            <div id="person-icon"></div>
            <div>
                <div id="person-name">{{user.name}}</div>
                <div id="person-age">年龄：{{user.age}}</div>
            </div>

        </div>
        <div id="person-util"  class="person-item">
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
        <div id="person-record" class="person-item">
            <div class="util-section-header">
                我的记录
            </div>

            <div class="record-item" v-for="record in records">
                <div class="record-item-icon"><img :src="iconURL[record.type]" alt=""></div>
                <div class="record-item-info">
                    <div class="record-item-name">{{recordInfo[record.type]}}</div>
                    <div class="record-item-time">{{record.time}}</div>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
    import logo1 from '../icon/community.png';
    import logo2 from '../icon/doctor.png';
    import logo3 from '../icon/medicine.png';
    export default {
        data:function(){
            return{
                user:{
                    name:'张秉川',
                    age:79,
                },
                iconURL:[logo1,logo2,logo3],
                recordInfo:['在院治疗记录','预约医生上门就诊','预约Uber送药'],
                //1:住院记录 2:预约医生记录 3:买药记录
                records:[
                    {
                        type:0,
                        time:'2016-11-16'
                    },
                    {
                        type:1,
                        time:'2016-11-10'
                    },
                    {
                        type:2,
                        time:'2016-10-20'
                    },
                    {
                        type:0,
                        time:'2016-07-11'
                    },
                    {
                        type:1,
                        time:'2016-05-19'
                    }
                ]
            }
        }
    }
</script>
<style lang="sass">
    $maincolor:#33CC99;
    $mainfont:'微软雅黑', Helvetica;

    #person-container{
        display: flex;
        flex-direction: column;
        background-color: rgba(204,204,204,0.1);
        box-sizing: border-box;
        padding-bottom: 80px;
    }
    .person-item{
        padding: 10px 0;
        box-sizing: border-box;
        background-color: white;
        margin: 6px 0;
        border{
            top: 1px solid #999;
            bottom: 1px solid #999;
        }
    }
    .person-item:first-child{
        margin-top: 0px;
    }

    #basic-info{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        /*align-items: center;*/
        /*align-content: space-around;*/
    }
    #person-icon{
        border-radius:32px;
        border:2px solid white;
        box-shadow: 0 0 0 1px #eee;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        border: 3px solid white;
        background: {
            image:url('../image/person-icon.jpg');
            repeat:no-repeat;
            size:contain;
        }
        margin:0 20px;
    }
    #person-name{
        font-family: $mainfont;
        font-size: 20px;
        color: $maincolor;
        line-height: 48px;
    }

    .util-section-header{
        box-sizing: border-box;
        font-size: 16px;
        padding:{
            bottom: 10px;
            left: 10px;
        }
        margin-bottom: 10px;
        font-family: $mainfont;
        border-bottom: 1px solid #eee;
    }
    #person-util ul{
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        li{
            text-align: center;
            color:#666;
            line-height: 1.5;
            font-size: 12px;
        }
    }

    .record-item{
        background-color: white;
        border-radius: 4px;
        border: 1px solid $maincolor;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 18px;
    }
    .record-item-icon{
        padding: 12px;
        border-right:2px dotted #ccc
    }
    .record-item-info{
        padding: 12px;
    }
    .record-item-name{
        font-size: 16px;
        font-weight: bold;
        color: #666;
        line-height: 2;
    }
    .record-item-time{
        font-size: 12px;
        color: #999;
        line-height: 1.5;
    }

</style>