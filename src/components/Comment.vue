<template>
    <div class="comment">
        <p class="comment-title">
            <span>评论</span>
            <span class="PIN_LUN_Number">(4070)</span>
        </p>
        <div class="commentMyinfo">
            <van-image round :src="myuser.user_img" width="2.5rem" height="2.5rem" v-if="myuser"/>
            <van-image round  src="https://img01.yzcdn.cn/vant/cat.jpeg" width="2.5rem" height="2.5rem" v-else/>
            <input v-model="comcontent" type="text" class="input" placeholder="说点什么吧..." />
            <button @click="commentPublish"><span>发表</span></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      myuser: null,
      comcontent: ''
    }
  },
  methods: {
    async myUserinfo () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.myuser = res.data[0]
    },
    commentPublish () {
      if (!this.myuser && localStorage.getItem('token') && localStorage.getItem('id')) {
        this.$msg.fail('请先登录')
      }
      this.$emit('Postcomment', this.comcontent)
    }
  },
  created () {
    this.myUserinfo()
  }
}
</script>
<style>
.comment{
    padding:30px 10px;
}
.PIN_LUN_Number{
    color:#aaa;
}
.commentMyinfo{
    padding-top:10px;
    display:flex;
    align-items:center;
}
.commentMyinfo > input{
    outline-width:none;
    border:none;
    background-color:#eff2f5;
    padding:10px;
    border-radius:999px;
    margin-left:2px;
}
button{
    outline:none;
    border:0px;
    border-radius:12px;
    background-color:#2e81f4;
    color:white;
    font-size:12px;
    padding:5px 15px;
    margin-left:3px;
    cursor:pointer;
}
button > span{
    color:white;
    font-weight:600;
}
</style>
