<!--template>
  <label for=""><input type="text"></label>
</template>
<script>
export default {
  name: 'inputtext',
  data() {
    return {
      msg: '这是inputtext组件'
    };
  }
};
</script>

<style scoped>

</style-->


<script>
import Vue from 'vue'
export default Vue.component('input-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: [Number,String],
    // use `checked` as the prop which take the place of `value`
    checked: {
      type: [Number,String],
      default: 0
    }
  },
  template:`
    <input />
  `
  // ...
})

</script>