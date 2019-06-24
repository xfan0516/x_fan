<template>
    <header class="header">
        <span class="header-l">
            <x-icon @click="$router.go(-1)" v-if="back" type="ios-arrow-back" size="big"/>
        </span>
        <h1>{{title}}</h1>
        <span class="header-r" v-if="headerR">完成</span>
        <slot class="header-r" name="header-right"></slot>
    </header>
</template>
<script>
export default {
    name:'Header',
    props:{
        title:{
            type: String,
            default: '这是标题'
        },
        back:{
            type: Boolean,
            default:true
        },
        headerR:{
            type: Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    created(){
    }

}
</script>

<style lang="stylus">
    .header{
        position fixed
        top 0
        left 0
        width 100%
        height .44rem
        line-height .44rem
        z-index 999999
        border-bottom 1px solid #eee
        background #fff
        text-align center
        h1{
          width 100%
          height inherit
        }
        span{
            position absolute
            top 0
            width .44rem
            height inherit
        }
        .header-l{
          left 0
        }
        .header-r{
          right 0
          transition all .3s
        }

    }
    .header-r
        color #09f
    .flex{
        display flex
        flex-direction row
        flex-wrap wrap
        align-items center
        justify-content space-between
    }
    
</style>
