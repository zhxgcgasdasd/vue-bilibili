<template>
    <div id="userinfo">
        <Navbar></Navbar>
        <img src="../assets/facebook-006.jpg" class="back_img">
        <Userdetail :userInfo="model"></Userdetail>
        <Userarticle></Userarticle>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Userdetail from '../components/Userdetail'
import Userarticle from '../components/Userarticle'
export default {
  name: 'Userinfo',
  components: {
    Navbar,
    Userdetail,
    Userarticle
  },
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async UserinfoData () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    }
  },
  created () {
    this.UserinfoData()
  }
}
</script>

<style>
#userinfo{
    height:100%;
    background-color:#eff2f5;
}
.back_img{
    width:100%;
    height:320px;
}
</style>
