<template>
    <div class="editBanner" @click="bannerClick">
        <span>{{left}}</span>
        <span><slot name="right"/></span>
    </div>
</template>

<script>
export default {
  name: 'Editbanner',
  props: ['left', 'right'],
  methods: {
    bannerClick () {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style>
.editBanner{
    background-color:white;
    padding:15px 0px;
    border-bottom:1px solid #fafafa;
    display:flex;
    justify-content:space-between;
}
</style>
