<template>
    <div class="btnparent" @click="registerClick">
        <div class="loginbtn">{{btntext}}</div>
    </div>
</template>
<script>
export default {
  name: 'Registerbutton',
  props: ['btntext'],
  methods: {
    registerClick () {
      this.$emit('registerSubmit')
    }
  }
}
</script>
<style>
.btnparent{
    padding:4.167px 2.778px;
}
.loginbtn{
    height:25px;
    background-color:#ff9db5;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:4.444px;
    border-radius:6.25px;
}
</style>
