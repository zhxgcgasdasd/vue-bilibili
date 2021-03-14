<template>
    <div class="edit" v-if="model">
        <Navbar></Navbar>
        <div id="space"></div>
        <div class="uploadfile">
          <van-uploader class="uploading" preview-size="150px" :after-read="afterRead"/>
          <span>Photo Upload</span>
          <Editbanner left="头像">
            <van-image
              slot="right"
              round
              width="2.5rem"
              height="2.5rem"
              :src="model.user_img"
              v-if="model.user_img"
            />
            <van-image
              slot="right"
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            v-else/>
          </Editbanner>
        </div>
        <Editbanner left="昵称" @bannerClick="show=true" class="Ni_Chen">
          <a href="javascript:;" class="font" slot="right">{{model.name}}</a>
        </Editbanner>
        <Editbanner left="账号">
          <a href="javascript:;" class="font" slot="right">{{model.username}}</a>
        </Editbanner>
        <Editbanner left="个性签名" @bannerClick="textshow=true" class="Ge_Qian">
          <a href="javascript:;" class="font" slot="right">{{model.user_desc}}</a>
        </Editbanner>
        <Editbanner left="性别" @bannerClick="gendershow=true" class="Xin_Bie">
          <a href="javascript:;" slot="right" class="font">{{model.gender?'男':'女'}}</a>
        </Editbanner>
        <div class="editback" @click="$router.push('/userinfo')">返回个人中心</div>
        <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirmClick" @cancel="content=''">
          <van-field v-model="content" type="text" autofocus/>
        </van-dialog>
        <van-dialog v-model="textshow" title="个性签名" show-cancel-button @confirm="textareaClick" @cancel="content=''">
          <van-field v-model="content" type="textarea" autofocus/>
        </van-dialog>
        <van-action-sheet v-model="gendershow" :actions="actions" @select="onSelect" cancel-text="取消"/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Editbanner from '../components/editBanner'
export default {
  name: 'Edit',
  components: {
    Navbar,
    Editbanner
  },
  data () {
    return {
      model: {},
      show: false,
      content: '',
      textshow: false,
      gendershow: false,
      actions: [
        { name: '女', val: 0 },
        { name: '男', val: 1 }
      ]
    }
  },
  methods: {
    async selectUser () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    },
    async afterRead (file) {
      const formdata = new FormData()
      formdata.append('file', file.file)
      const res = await this.$http.post('/upload', formdata)
      this.model.user_img = res.data.url
      this.UserUpdate()
    },
    async UserUpdate () {
      const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.model)
      if (res.data.code === 200) {
        this.$msg.fail('修改成功')
      }
    },
    confirmClick () {
      this.model.name = this.content
      this.UserUpdate()
      this.content = ''
    },
    textareaClick () {
      this.model.user_desc = this.content
      this.UserUpdate()
      this.content = ''
    },
    onSelect (data) {
      this.model.gender = data.val
      this.UserUpdate()
      this.gendershow = false
    }
  },
  created () {
    this.selectUser()
  }
}
</script>

<style>
.uploadfile{
  position:relative;
}
.uploading{
  position:absolute;
}
.edit{
    height:100%;
    background-color:#f1f2f5;
}
#space{
    margin-bottom:20px;
}
.font{
  text-decoration:none;
}
.Ni_Chen{
  cursor:pointer;
}
.Ge_Qian{
  cursor:pointer;
}
.Xin_Bie{
  cursor:pointer;
}
.editback{
  margin-top:10px;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#999;
  padding:20px 0;
  font-size:15px;
  cursor:pointer;
}
.editback:hover{
  background-color:#999;
  color:white;
}
</style>
