<template>
    <div class="detail" @click="pathPush">
      <div>
        <img :src="detailitem.img" alt="" style="width:100%"/>
        <div class="icon">
          <span class="play-icon"><van-icon name="play-circle" size="30"/>1233 </span>
          <span class="comment-icon"><van-icon name="comment" size="30" />7000 </span>
        </div>
        <p>{{detailitem.name}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['detailitem'],
  methods: {
    pathPush () {
      if (this.$route.path !== `/article/${this.detailitem.id}`) {
        this.$router.push(`/article/${this.detailitem.id}`)
      }
    }
  }
}
</script>

<style>
.detail{
  width:430px;
  height:400px;
  border:2px solid #eff2f5;
  box-shadow:0px 5px 9px -8px rgba(0,0,0,0.75);
}
.play-icon{
  font-size:30px;
}
.comment-icon{
  font-size:30px;
  margin-left:80px;
}
.detail{
  transition:transform 100ms ease-in;
  border-radius:15px;
}
.detail:hover{
  cursor:pointer;
  transform:scale(1.07);
}
</style>
