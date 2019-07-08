<template>
  <div class="home">
    <header class="g-header-container">
        <home-header :class="{'header-transition': isHeaderTransition}" ref="header"></home-header>
          <!-- <home-header class="header-transition" ref="header"></home-header> -->
    </header>
    <me-scroll :updateDate="recommends"
    pullDown
    @pull-down="pullToRefresh"
    pullUp
    @pull-up="pullToLoadMore"
    @scroll="scroll"
    @scroll-end="scrollEnd"
    ref="scroll"
    @pull-down-transition-end="pullDownTransitionEnd"
    >
      <home-slider ref="slider"></home-slider>
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommends" ref="recommend"></home-recommend>
    </me-scroll>

    <div class="g-backtop-container">
      <me-backtop
        :visible="isBacktopVisible"
        @backtop="backToTop"
      ></me-backtop>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll';
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';
  import MeBacktop from 'base/backtop';
  import {HEADER_TRANSITION_HEIGHT} from './config';
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      HomeNav,
      HomeRecommend,
      MeBacktop
    },
    data() {
      return {
        recommends: [],
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    },

    methods: {
      updateScroll() {},
      getRecommends(data) {
        this.recommends = data;
      },
      pullToRefresh(callback) {
        this.$refs.slider.update().then(callback);
      // setTimeout(() => {
      //   callback();
      // }, 1000);
      },
      pullToLoadMore(callback) {
        this.$refs.recommend.update().then(callback).catch(err => {
          if (err) {
            console.log(err);
          }
          callback();
        });
      // setTimeout(() => {
      //   callback();
      // }, 1000);
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return null;
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;

}
</style>
