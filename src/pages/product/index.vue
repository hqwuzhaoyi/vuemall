<template>
    <div class="product">
        <product-header></product-header>
        <me-scroll>
          <product-slider
            :sliders="sliderImgs"
          />
          <p class="title">{{data.title}}</p>
        </me-scroll>
    </div>
</template>

<script>
  import ProductHeader from './header';
  import {getProductDetail} from 'api/product';
  import MeScroll from 'base/scroll';
  import ProductSlider from './slider';
  export default {
    name: 'Product',
    components: {
      ProductHeader,
      MeScroll,
      ProductSlider
    },
    data() {
      return {
        data: {},
        sliderImgs: []
      };
    },
    created() {
      getProductDetail(this.$route.params.id).then(data => {
        console.log(data.item);
        this.data = data.item;
        this.sliderImgs = data.item.images;
      });
    }
  };
</script>

<style lang="scss" scoped>

  @import "~assets/scss/mixins";
    .product {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      z-index: $product-z-index;
      width: 100%;
      height: 100%;
      background-color: #fff;
    }

</style>
