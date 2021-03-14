<template>
  <div class="user-article">
      <div>
          <span class="Biao_Qian">动态</span>
          <span class="Biao_Qian">视频</span>
      </div>
      <div></div>
  </div>
</template>

<script>
export default {
  name: 'Userarticle'
}
</script>

<style>
.user-article{
    display: flex;
    align-items: center;
    background-color: white;
    height: 7vw;
    padding: 0 3px;
    border-top: 0.278vw solid #ddd;
}
.Biao_Qian{
    margin-right:10vw;
    color:#777;
    padding:17px;
    border-bottom:1px dotted lightgray;
}
</style>
