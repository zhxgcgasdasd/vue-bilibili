<template>
    <div class="article" v-if="model">
        <Navbar></Navbar>
        <div class="detailinfo">
            <div class="video">
                <video controls="controls" :src="model.content"></video>
            </div>
            <div class="detailinfoText">
                <div class="name">
                    <span class="title">{{model.category.title}}</span>
                    <span>{{model.name}}</span>
                </div>
                <div class="userinfo">
                    <span class="userinfo_name">{{model.userinfo.name}}</span>
                    <span class="Guan_Kan">146.4万次观看</span>
                    <span class="Dan_Mu">5281弹幕</span>
                </div>
                <div class="icon">
                    <p>
                        <span><van-icon class="icon1" name="star" size="23" /></span>
                        <span class="font_size">收藏</span>
                    </p>
                    <p>
                        <span><van-icon class="icon1" name="add-square" size="23"/></span>
                        <span class="font_size">缓存</span>
                    </p>
                    <p>
                        <span><van-icon class="icon1" name="share" size="23"/></span>
                        <span class="font_size">分享</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="recommend">
            <Detail class="detailitem" v-for="(item,index) in commendList" :key="index" :detailitem="item"></Detail>
        </div>
        <Comment @Postcomment="PostSuccess"></Comment>
        <RealComment></RealComment>
    </div>
</template>

<script>
import RealComment from '../components/RealComment'
import Navbar from '../components/Navbar'
import Detail from './detail'
import Comment from '../components/Comment'
export default {
  name: 'Article',
  components: {
    Navbar,
    Detail,
    Comment,
    RealComment
  },
  data () {
    return {
      model: null,
      commendList: null,
      Postcom: {
        comment_content: '',
        comment_date: '',
        parent_id: null,
        article_id: null
      }
    }
  },
  methods: {
    async articleitemData () {
      const res = await this.$http.get('/article/' + this.$route.params.id)
      console.log(res)
      this.model = res.data[0]
    },
    async commendData () {
      const res = await this.$http.get('/commend')
      this.commendList = res.data
    },
    async PostSuccess (res) {
      const date = new Date()
      let m = date.getMonth() + 1
      let d = date.getDate()
      if (m < 10) {
        m = '0' + m
      }
      if (d < 10) {
        d = '0' + d
      }
      const str = `${m}-${d}`
      this.Postcom.comment_content = res
      this.Postcom.comment_date = str
      this.Postcom.article_id = this.$route.params.id
      const result = await this.$http.post('/comment_post/' + localStorage.getItem('id'), this.Postcom)
      console.log(result)
    }
  },
  created () {
    this.articleitemData()
    this.commendData()
  },
  watch: {
    $route () {
      this.articleitemData()
      this.commendData()
    }
  }
}
</script>

<style>
.video{
    width:100%;
    display:flex;
    justify-content:center;
    padding-top:30px;
}
.video > video{
    width:75%;
}
.detailinfoText{
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:17px;
}
.title{
    padding:0 10px;
    margin-right:20px;
    color:#fb7299;
    background-color:#f4f4f4;
    border-radius:4px;
}
.userinfo{
    padding:10px 10px;
}
.Guan_Kan{
    font-size:15px;
    color:#aaa;
    padding:20px;
}
.Dan_Mu{
    font-size:15px;
    color:#aaa;
}
.userinfo_name{
    font-size:17px;
    padding-right:130px;
}
.icon{
    display:flex;
}
.icon > p{
    display:flex;
    align-items:center;
    color:#757575;
    margin-right:75px;
}
.font_size{
    font-size:14px;
}
.icon1{
    padding:5px;
}
.recommend{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding:40px;
}
.detailitem{
  width:45%;
  margin-bottom:70px;
}
</style>
