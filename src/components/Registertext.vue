<template>
  <div id="registertext">
      <van-field :label="label" :type="type" :placeholder="placeholder" :rule="rule" v-model="content"/>
  </div>
</template>

<script>
export default {
  name: 'Registertext',
  props: ['label', 'type', 'placeholder', 'rule'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    handlerulg () {
      const rue = new RegExp(this.rule)
      if (rue.test(this.content)) {
        this.$emit('inputChange', this.content)
      }
    }
  },
  watch: {
    content () {
      this.handlerulg()
    }
  }
}
</script>

<style>
</style>
