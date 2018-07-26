<template lang="pug">
  .slider
    v-touch.slider_wrapper(:style="'transform:translateX(calc(' + offset + ' * '+ currentSlide +'))'"
                           @swipeleft="slideRight" @swiperight="slideLeft"
                           :swipe-options="{ direction: 'horizontal', threshold: 30 }")
      template(v-for="n in slides")
        img.slider_image(:src="'https://picsum.photos/400/300?image='+n*100")
    .slider_nav
      .slider_button.slider_button__left(@click="slideLeft" :class="{'slider_button__disabled': currentSlide <= 0}")
        .slider_arrow
      .slider_button.slider_button__right(@click="slideRight" :class="{'slider_button__disabled': currentSlide >= slides - slidesPerPage}")
        .slider_arrow
</template>

<script>
// Mixins
import WindowWidth from './mixins/windowwidth.js';

export default {
  mixins: [WindowWidth],
  data() {
    return {
      slides: 10,
      currentSlide: 0,
      slidesPerPage: 0,
    }
  },
  methods: {
    getWindowWidth () {
      if (window.innerWidth > 992) {
        this.slidesPerPage = 3;
      } else if (window.innerWidth > 576) {
        this.slidesPerPage = 2;
      } else {
        this.slidesPerPage = 1;
      }
      // Move slides for preventings show white spaces after resize
      if (this.currentSlide >= this.slides - this.slidesPerPage) {
        this.currentSlide = this.slides - this.slidesPerPage
      }
    },
    slideLeft () {
      if (this.currentSlide > 0) {this.currentSlide--}
    },
    slideRight () {
      if (this.currentSlide < this.slides - this.slidesPerPage) {this.currentSlide++}
    }
  },
  computed: {
    offset () {
      return '-100vw/'+this.slidesPerPage
    }
  }
}
</script>
