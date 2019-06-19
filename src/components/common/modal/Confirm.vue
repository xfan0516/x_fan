<template>
  <div class="modal" v-if="isShow" @click="close">
    <div class="modal-body" @click.stop>
      <div class="modal-header">
        <h1>{{title}}</h1>
      </div>
      <div class="modal-main">
        <slot v-if="!msg" name="modal-main"></slot>
        {{msg}}
      </div>
      <div class="modal-footer x_flex-between">
        <span @click="cancel">{{cancelText}}</span>
        <span @click="confirm">{{confirmText}}</span>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'confirm',
  props:{
    isShow:{
      type: Boolean,
      default: false
    },
    title: String,
    msg: String,
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
  },
  data () {
    return {}
  },
  computed:{

  },
  methods:{
    close (e) {
      this.$emit('onClose', e)
    },
    cancel (e) {
      this.$emit('onCancel', e)
    },
    confirm (e) {
      this.$emit('onConfirm', e)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .modal
    position fixed
    top 0
    left 0
    z-index 90000
    width 100%
    height 100%
    background rgba(0,0,0,.2)
    .modal-body
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 80%
      text-align center
      background #ffffff
      border-radius .05rem
    .modal-header
      height .4rem
      line-height .4rem
      border-bottom .5px solid #fafafa
    .modal-main
      line-height .4rem
      padding .05rem 0
    .modal-footer
      line-height .45rem
      border-top .5px solid #eee
      span 
        width 50%
        line-height inherit
        font-size .14rem
        color: #09f
        border-right .5px solid #eee
</style>