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
          transition(name="menu-fade")
            ul.menu_items(v-if="isDesktop || showMenu ")
              li.menu_item
                router-link.menu_link(:to="{name: 'index'}"  exact-active-class="menu_link__active") Home
              li.menu_item
                router-link.menu_link(:to="{name: 'about'}"  exact-active-class="menu_link__active") About us
              li.menu_item
                router-link.menu_link(:to="{name: 'contact'}"  exact-active-class="menu_link__active") Contact us
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
      this.contentFixation();
    },
    switchMenu () {
      this.showMenu = !this.showMenu;
      this.contentFixation();
    },
    // Prevent content scroll when mobile menu is open
    contentFixation () {
      if (this.showMenu && !this.isDesktop) {
        document.getElementsByTagName( 'html' )[0].style.overflow = 'hidden';
      } else {
        document.getElementsByTagName( 'html' )[0].style.overflow = '';
      }
    }
  },
}
</script>
