<template>
    <div class="commentParent">
        <div v-for="(item,index) in commentList" :key="index">
            <div class="commentItem">
                <div class="userImg">
                     <van-image round  :src="item.userinfo.user_img" width="2.5rem" height="2.5rem" v-if="item.userinfo"/>
                     <van-image round  src="https://img01.yzcdn.cn/vant/cat.jpeg" width="2.5rem" height="2.5rem" v-else/>
                </div>
                <div class="commentContent">
                    <p>
                        <span v-if="item.userinfo">{{item.userinfo.name}}</span>
                        <span>{{item.comment_date}}</span>
                    </p>
                    <div>
                      {{item.comment_content}}
                    </div>
                </div>
            </div>
            <CommentItem :commentChild="item.child"></CommentItem>
        </div>
    </div>
</template>

<script>
import CommentItem from '../components/CommentItem'
export default {
  name: 'RealComment',
  components: {
    CommentItem
  },
  data () {
    return {
      commentList: null
    }
  },
  methods: {
    async commentData () {
      const res = await this.$http.get('/comment/' + this.$route.params.id)
      console.log(res.data)
      this.commentList = this.changeCommentData(res.data)
      console.log(this.commentList)
    },
    changeCommentData (data) {
      function fn (temp) {
        const arr1 = []
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id === temp) {
            arr1.push(data[i])
            data[i].child = fn(data[i].comment_id)
          }
        }
        return arr1
      }
      return fn(null)
    }
  },
  created () {
    this.commentData()
  }
}
</script>

<style>
.commentParent{
    padding:20px 10px;
}
.commentParent > div{
    border-bottom:1px solid #e7e7e7;
}
.commentItem{
    display:flex;
}
.userImg{
    margin-right:10px;
}
.commentContent > p{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:13px;
    color:#aaa;
    margin-bottom:5px;
}
.commentContent{
    flex:1;
}
.commentContent > div{
    font-size:13px;
}
</style>
