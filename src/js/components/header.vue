<template lang="pug">
  .header
    .header_container
      .header_logo
        a.logo(href="") SuperLogo
      .header_menu
        .menu
          .menu_burger(v-if="!isDesktop" @click="switchMenu")
            span.menu_burger-line
            span.menu_burger-line
            span.menu_burger-line
          transition(name="fade")
            ul.menu_items(v-if="isDesktop || showMenu ")
              li.menu_item
                a.menu_link(href="/") Home
              li.menu_item
                a.menu_link(href="/") About us
              li.menu_item
                a.menu_link(href="/") Contact us
</template>

<script>
// Mixins
import WindowWidth from './mixins/windowwidth.js';

export default {
  mixins: [WindowWidth],
  data () {
    return {
      showMenu: false,
      isDesktop: false,
    }
  },
  methods: {
    getWindowWidth () {
      this.isDesktop = window.innerWidth > 576 ? true : false;
    },
    switchMenu () {
      this.showMenu = !this.showMenu;
    }
  },
}
</script>
