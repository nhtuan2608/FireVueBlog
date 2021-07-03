<template>
  <div class="app-wrapper" @mousewheel="checkScroll">
    <div class="app">
      <Navigation />
      <ToTopScreen :classMain="appWrapper"/>
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
import ToTopScreen from './components/ToTopScreen.vue';
const $ = require('jquery');

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
    ToTopScreen,
  },
  data() {
    return {
      appWrapper: "app-wrapper",
      isTopPage: true,
    };
  },
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {
    checkLoadPage() {
      if (!this.isTopPage) {
        window.scroll(0, 0);
        return false;
      }
    },
    checkScroll() {
      $(window).on('scroll', function () {
          var $this = $(this),
              $body = $('body');

          var percent = Math.round($this.scrollTop() / ($body.height() - $this.height()) * 100);
          // console.log('Scroll at: ' + percent + '% screen');
          
          if(percent >= 90) {
            $('#scrollTopButton').addClass('scrollTopButton-Background');
            $('#scrollTopButton').css('top', 'calc(100% - 200px)');
            this.isTopPage = false
          } else {
            $('#scrollTopButton').removeClass('scrollTopButton-Background');
            $('#scrollTopButton').css('top', 'calc(100% - 100px)');
          }

          this.isTopPage = percent == 0 ? true : false;
      });
    },
  },
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  user-select: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

html {
  scroll-behavior: smooth;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  widows: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

.scrollTopButton-Background {
  background-color:#fff;
  border-radius: 15px;

  &:hover {
    opacity: 1;
  }
}
</style>
