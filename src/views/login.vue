<template>
    <div id="login">
    <Registerheader>
        <div slot="right" @click="$router.push('/register')" class="login_btn">
        切换到注册页面
        </div>
    </Registerheader>
    <Registertext label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res=>model.username=res"/>
    <Registertext label="密码" placeholder="请输入密码" type="password" rule="^.{6,16}$" @inputChange="res=>model.password=res"/>
    <Registerbutton btntext="登录" @registerSubmit="registerSubmit"/>
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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async registerSubmit () {
      const rulg = /^.{6,16}$/
      if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post('/login', this.model)
        this.$msg.fail(res.data.msg)
        if (res.data.code === 301 || res.data.code === 302) {
          return
        }
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)
        setTimeout(() => {
          this.$router.push('/userinfo')
        }, 1000)
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
.login_btn{
  background-color:#fb7a9f;
  text-align:center;
  padding-top:8px;
  font-weight:700;
  color:white;
  border-radius:6px;
  cursor:pointer;
}
</style>
