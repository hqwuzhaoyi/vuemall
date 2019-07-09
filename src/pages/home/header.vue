<template>
        <me-navbar class="header" title='title' v-show="visible">
          <i class="iconfont icon-scan" slot="left"></i>
          <me-search-box
            placeholder="开学季有礼，五折起"
            slot="center"
            @query="getQuery"
            fake
            @click.native="goToSearch"
          ></me-search-box>
          <i class="iconfont icon-msg" slot="right"></i>
        </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';
  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar,
      MeSearchBox
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      getQuery(val) {
        console.log(val);
      },
      goToSearch() {
        this.$router.push('/search');
      }
    }
  };
</script>

<style lang="scss" scoped>

    @import "~assets/scss/mixins";
  .header {
    &.mine-navbar {
        background-color:transparent;
        transition: background-color .5s;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }
  }
</style>
