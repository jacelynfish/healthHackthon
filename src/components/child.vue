
<template>
    <section>
        <ul>
            <li v-for="item of items">{{item}}</li>
        </ul>
        <input type="text" v-model="message">
        <span>{{j}}</span>
        <dog></dog>

        <img src="../icon/family.png" alt="family">
    </section>

</template>
<style lang="sass">
    li{
        color:white;
        background-color: yellow;
        display: block;

    }
    section{
        box-shadow: 1px 1px 1px 1px #cccccc;
        input{
            border: 1px solid salmon;
        }

        span{
            background-image: url('../icon/family.png');
        }
    }


</style>
<script>
    import dog from './dog.vue';

    module.exports = {
        data: function(){
            return {
                items:[1,2,3,4,6],
                message:10
            }
        },
        components:{
            dog,
        },
        computed:{
            j (){
                return this.message * 10;
            }
        }
    }

</script>