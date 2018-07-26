var WindowWidth = {
  mounted () {
    this.$nextTick(function() {
				window.addEventListener('resize', this.getWindowWidth);
        this.getWindowWidth();
		})
  },
  methods: {
    getWindowWidth () {
      return window.innerWidth;
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth);
  }
}

module.exports = WindowWidth;
