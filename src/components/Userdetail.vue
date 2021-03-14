<template>
    <div class="userdetail">
        <div>
            <div class="part1">
                <div class="user_img">
                    <van-image
                    round
                    width="5rem"
                    height="5rem"
                    :src="userInfo.user_img"
                    v-if="userInfo.user_img"
                    />
                    <van-image
                    round
                    width="5rem"
                    height="5rem"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    v-else/>
                </div>
                <div class="user_edit">
                    <div id="touchinterface">
                        <p>
                            <span>0</span>
                            <span class="font">粉丝</span>
                        </p>
                        <p>
                            <span>54</span>
                            <span class="font">关注</span>
                        </p>
                        <p>
                            <span>0</span>
                            <span class="font">获赞</span>
                        </p>
                    </div>
                    <div class="user_edit_button" @click="$router.push('/edit')">
                        <div>编辑资料</div>
                    </div>
                </div>
            </div>
            <div class="part2">
                <h2>{{userInfo.name}}</h2>
                <p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
                <p v-else>这个人很懒，什么都没有留下~~~~~</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Userdetail',
  props: ['userInfo']
}
</script>

<style>
.userdetail{
    padding:10px 12px;
}
.userdetail > div > .part1{
    display:flex;
}
#touchinterface{
    display:flex;
}
.user_img{
    margin-right:40px;
}
.useredit{
    flex:1;
}
#touchinterface > p{
    padding-right:90px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-right:1px solid #ccc;
    padding-left:80px;
}
.font{
    font-size:16px;
    color:#aaa;
}
.user_edit_button{
    border:3px solid #fb7a9f;
    text-align:center;
    cursor:pointer;
}
.user_edit_button > div{
    color:#fb7a9f;
}
.part2 > p{
    padding:0px;
    color:#999;
}
.part2 > h2{
    margin:10px 0;
}
.user_edit_button:hover{
    background-color:#fb7a9f;
}
.user_edit_button:hover >div{
    color:white;
}
</style>
