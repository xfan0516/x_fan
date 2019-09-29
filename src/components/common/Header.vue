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

