<template>
    <div id="registerheader">
        <div id="header_left">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div>
        </div>
        <div id="header_right">
            <slot name="right"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Registerheader'
}
</script>

<style>
#registerheader{
    display:flex;
    background-color:white;
    box-shadow:0px 5px 8px -9px rgba(0,0,0,0.75);
    justify-content:space-between;
    position:sticky;
    top:0;
    z-index:100;
}
#header_left > img{
    height:40px;
}
#header_left{
    margin-left:10px;
    display:flex;
    align-items:center;
}
#header_right{
    display:flex;
}
#header_right > div{
    align-items:center;
}
</style>
