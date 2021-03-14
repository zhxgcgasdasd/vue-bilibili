<template>
    <div id="Home">
        <Navbar></Navbar>
        <div>
         <van-tabs v-model="active" swipeable sticky>
         <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
           <van-list v-model="item.loading" :finished="item.finished" finished-text="没有更多了" @load="onLoad" immediate-check="false">
           <div class="detailparent">
             <Detail class="detailitem" :detailitem="categoryitem" v-for="(categoryitem,categoryindex) in item.list" :key="categoryindex"></Detail>
           </div>
           </van-list>
         </van-tab>
         </van-tabs>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Detail from './detail'
export default {
  name: 'Home',
  components: {
    Navbar,
    Detail
  },
  data () {
    return {
      category: [],
      active: 0
    }
  },
  methods: {
    async selectCategory () {
      const res = await this.$http.get('/category')
      this.changeCategory(res.data)
    },
    changeCategory (data) {
      const category1 = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        item.finished = false
        item.loading = false
        return item
      })
      this.category = category1
    },
    categoryItem () {
      const categoryitem = this.category[this.active]
      return categoryitem
    },
    async selectArticle () {
      const categoryitem = this.categoryItem()
      const res = await this.$http.get('/detail/' + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      })
      categoryitem.list.push(...res.data)
      categoryitem.loading = false
      if (res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true
      }
    },
    onLoad () {
      const categoryitem = this.categoryItem()
      setTimeout(() => {
        categoryitem.page += 1
        this.selectArticle()
      }, 1000)
    }
  },
  created () {
    this.selectCategory()
  },
  watch: {
    active () {
      this.selectArticle()
    }
  }
}
</script>

<style>
.detailparent{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding:40px
}
.detailitem{
  width:45%;
  margin-bottom:70px;
}
</style>
