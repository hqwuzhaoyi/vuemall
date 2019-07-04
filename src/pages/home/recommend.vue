<template>
    <div>HomeRecommend</div>
</template>

<script>
  import {getHomeRecommend} from 'api/home';

  export default {
    name: 'HomeRecommend',
    data() {
      return {
        recommends: [],
        curPage: 1,
        totalPage: 1
      };
    },
    created() {
      this.getRecommend();
    },
    methods: {
      getRecommend() {
        if (this.curPage > this.totalPage) return;
        getHomeRecommend(this.curPage).then(data => {
          if (data) {
            console.log(data);
            this.curPage++;
            this.totalPage = data.totalPage;
            this.recommends = this.recommends.concat(data.itemList);
          }
        });
      }
    }

  };
</script>

<style>

</style>
