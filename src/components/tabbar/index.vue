<template>
  <div class="g-tabbar">
    <router-link
      to="/home"
      class="g-tabbar-item"
    >
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link
      to="/category"
      class="g-tabbar-item"
    >
      <i class="iconfont icon-category"></i>
      <span>分类页</span>
    </router-link>
    <router-link
      to="/cart"
      class="g-tabbar-item"
    >
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link
      to="/item"
      class="g-tabbar-item"
    >
      <i class="iconfont icon-personal"></i>
      <span>个人中心</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CTabbar'
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
  .router-link-active {
    // color: $link-active-color;
    color: yellow;
  }
</style>
