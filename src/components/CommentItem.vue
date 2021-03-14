<template>
    <div class="commentitems">
         <div class="commentItem" v-for="(item,index) in commentChild" :key="index">
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
    </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: ['commentChild']
}
</script>

<style>
.commentitems{
    padding:0 30px;
}
</style>
