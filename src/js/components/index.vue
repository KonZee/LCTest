<template lang="pug">
    div
      site-header
      slider
      lipsum
</template>

<script>
import SiteHeader from './header.vue'
import Slider from './slider.vue'
import Lipsum from './lipsum.vue'

export default {
  components: {
    SiteHeader,
    Slider,
    Lipsum
  }
}
</script>
