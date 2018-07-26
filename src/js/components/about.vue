<template lang="pug">
  div
    site-header
    .container
      h1 About us
    lipsum
</template>

<script>
import SiteHeader from './header.vue'
import Lipsum from './lipsum.vue'

export default {
  components: {
    SiteHeader,
    Lipsum
  }
}
</script>
