<template>
  <div class="slider-wrapper">
    <me-loading :inline="true" v-if="!sliders.length"></me-loading>
    <me-slider
        :direction='direction'
        :loop='loop'
        :interval='interval'
        :pagination='pagination'
        :data= "sliders"
      v-else
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" class="slider-img"/>
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import { swiperSlide } from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlider} from 'api/home';
  import MeLoading from 'base/loading';
  export default {
    name: 'HomeSlider',
    components: {
      MeSlider,
      swiperSlide,
      MeLoading
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: [

        ]
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      // API
      update() {
        return this.getSliders();
      },

      getSliders() {
        return getHomeSlider().then(data => {
          this.sliders = data;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
    .slider-wrapper {
        height: 183px;
    }
    .slider-link,
    .slider-img {
        width: 100%;
        height: 100%;
    }
</style>
