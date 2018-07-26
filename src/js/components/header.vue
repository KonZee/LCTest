<template lang="pug">
  .header
    .header_container
      .header_logo
        router-link.logo(:to="{name: 'index'}") SuperLogo
      .header_menu
        .menu
          .menu_burger(v-if="!isDesktop" @click="switchMenu")
            span.menu_burger-line
            span.menu_burger-line
            span.menu_burger-line
          transition(name="fade")
            ul.menu_items(v-if="isDesktop || showMenu ")
              li.menu_item
                router-link.menu_link(:to="{name: 'index'}") Home
              li.menu_item
                router-link.menu_link(:to="{name: 'about'}") About us
              li.menu_item
                router-link.menu_link(:to="{name: 'contact'}") Contact us
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
