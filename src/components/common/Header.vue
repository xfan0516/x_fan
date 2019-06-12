<template>
    <header class="header flex">
        <span>返回</span>
        <h1>{{title}}</h1>
        <span class="header-r">完成</span>
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

<style lang="stylus" scoped>
    .header{
        position fixed
        top 0
        left 0
        width 100%
        height .4rem
        border-bottom 1px solid #eee
        background #fff
        text-align center

        span{

            width .4rem
            height .4rem
            line-height .4rem
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
