<template>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/logo.png" alt="" @click="$router.push('/')" class="vue_logo">
            <div class="header_input">
                <van-icon name="search" />
                <input type="text" placeholder="搜索..."/>
            </div>
        </div>
        <div class="avatar">
            <span @click="$router.push('/login')" class="DEN_LU">登录</span>
            <span @click="$router.push('/userinfo')" class="GE_REN_ZHU_YE">个人主页</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar{
    height:50px;
    background-color:white;
    display:flex;
    box-shadow:0px 5px 8px -9px rgba(0,0,0,0.75);
    z-index:100;
    justify-content:space-between;
}
.logo{
    margin-left:120px;
    display:flex;
    width:50px;
    justify-content:center;
    align-items:center;
}
.logo > img{
    width:40px;
}
.avatar{
    display:flex;
    align-items:center;
    margin-right:20px;
}
.avatar > h4{
 padding-left:10px;
}
.header_input{
    margin-left:10px;
    align-items:center;
    display:flex;
    background-color:#eff2f5;
    padding:10px;
    border-radius:999px;
}
.header_input > input{
    border:none;
    outline-width:0;
    background-color:transparent;
}
.vue_logo{
    cursor:pointer;
}
.GE_REN_ZHU_YE{
    margin-left:19px;
    cursor:pointer;
    font-weight:200;
    font-size:13px;
}
.DEN_LU{
    cursor:pointer;
    font-weight:200;
    font-size:13px;
}
</style>
