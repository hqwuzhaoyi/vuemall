<template>
    <transition name="search">
      <div class="search">
        <header class="g-header-container">
          <search-header @query="getSearchResult" ref="history"></search-header>
        </header>
        <div class="g-content-container">
          <me-scroll>
            <search-hot></search-hot>
            <search-history @show-confirm="showConfirm"></search-history>
          </me-scroll>
        </div>
        <me-confirm
          msg="确定要清空吗"
          ref="confirm"
          @confirm="clearAllSearchHistory"
        />
      </div>
    </transition>
</template>

<script>
  import searchHeader from './header';
  import MeScroll from 'base/scroll';
  import SearchHot from './hot';
  import SearchHistory from './history';
  import MeConfirm from 'base/confirm';

  export default {
    name: 'search',
    components: {
      searchHeader,
      MeScroll,
      SearchHot,
      SearchHistory,
      MeConfirm
    },
    methods: {
      getSearchResult(value) {
        this.searchValue = value;
      },
      showConfirm() {
        this.$refs.confirm.show();
      },
      clearAllSearchHistory() {
        this.$refs.history.clear();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .search {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
  }

  .search-enter-active,
  .search-leave-active {
    transition: all .3s;
  }

  .search-enter,
  .search-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
