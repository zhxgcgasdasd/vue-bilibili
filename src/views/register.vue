<template>
    <div id="register">
        <Registerheader>
          <div slot="right" @click="$router.push('/login')" class="register_btn">切换到登陆页面</div>
        </Registerheader>
        <Registertext label="姓名" placeholder="请输入姓名" rule="^.{6,16}$" @inputChange="res=>model.name=res"/>
        <Registertext label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res=>model.username=res"/>
        <Registertext label="密码" placeholder="请输入密码" type="password" rule="^.{6,16}$" @inputChange="res=>model.password=res"/>
        <Registerbutton btntext="注册" @registerSubmit="registerSubmit"/>
    </div>
</template>

<script>
import Registerheader from '../components/Registerheader'
import Registertext from '../components/Registertext'
import Registerbutton from '../components/Registerbutton'
export default {
  name: 'Register',
  components: {
    Registerheader,
    Registertext,
    Registerbutton
  },
  data () {
    return {
      model: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async registerSubmit () {
      const rulg = /^.{6,16}$/
      if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post('/register', this.model)
        console.log(res)
        this.$msg.fail(res.data.msg)
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.objtoken)
        setTimeout(() => {
          this.$router.push('/userinfo')
        }, 1000)
        this.model.name = ''
        this.model.username = ''
        this.model.password = ''
      } else {
        this.$msg.fail('格式不正确，重新输入')
      }
    }
  }
}
</script>

<style>
.register_btn{
  background-color:#fb7a9f;
  text-align:center;
  padding-top:8px;
  font-weight:700;
  color:white;
  border-radius:6px;
  cursor:pointer;
}
</style>
