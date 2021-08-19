<template>
  <div class="app-wrapper" 
        v-bind:oncontextmenu="disableOnContextMenu">
    
    <div class="app" v-if="!isError">
      <Navigation :disabledNavigation="disabledNavigation" v-if="!disabledNavigation"/>
      <div class="app-container">
        <ToTopScreen :currentRoute="currentRoute" v-if="!disabledNavigation"/>
        <router-view />
      </div>
      <Footer :isMaintenance="isMaintenance" v-if="!disabledNavigation"/>
    </div>
    <!-- <div class="app-errorPage" v-if="!!isError">
      <router-view />
    </div> -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
import ToTopScreen from './components/ToTopScreen.vue';

// const $ = require('jquery');

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
      disableOnContextMenu: false,
      currentHref: '',
    };
  },
  beforeCreate() {
  },
  beforeUpdate() {
  },
  created() {
    this.initPage();
  },
  mounted() {},
  beforeDestroy() {
  },
  computed: {
    isDevMode() {
      return this.$store.state.isDevMode;
    },
    isMaintenance() {
      return this.$store.state.isMaintenance;
    },
    disabledNavigation: {
      get() {
        return this.$store.state.disabledNavigation;
      },
      set(payload) {
        this.$store.commit("setDisabledNavigation", payload);
      }
    },
    isError: {
      get() {
        return this.$store.state.isError;
      },
      set(payload) {
        this.$store.commit("setIsErrorPage", payload);
      }
    }
  },
  methods: {
    // Initialize
    initPage() {
      this.currentRoute = this.$router.currentRoute;
      console.log(this.disabledNavigation);
      this.checkRouter();
      if (!this.checkIsErrorPage()) {
        this.checkIsDevMode();
      } 
      else {
        this.$router.push({ name: "Error" }).catch(()=>{});
        return;
      }
    },
    checkIsErrorPage() {
      if (this.isError) {
        return true;
      }
      return false;
    },
    checkRouter() {
      if (this.checkExceptionRouter()) {
        return;
      }
    },
    checkExceptionRouter() {
      if (!this.isError && this.isMaintenance) {
          this.$router.push({ name: "Maintenance" }).catch(()=>{});
          this.$store.commit("setDisabledNavigation", true);
      }
      return false;
    },
    checkIsDevMode() {
      if (!this.isDevMode) {
        this.disableOnContextMenu = 'return false';
      } else {
        this.disableOnContextMenu = '';
      }
      return false;
    },
  },
  watch: {
    // $route(to , from) {
    //   console.log(this.isError);
    //   console.log("to", to);
    //   console.log("from", from);
    // }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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

  .app-container {
    margin-top: 80px;
    z-index: 0;
  }
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
  path {
    fill: #000;
  }
}

.arrow-article {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

.router-button, button {
    transition: all .5s ease;
    cursor: pointer;
    margin-top: 24px;
    padding: 12px 24px;
    background-color: #303030;
    color: #fff;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;
}

.errMessage {
  text-align: center;
  font-size: 12px;
  color: red;
}

.blured {
  opacity: 0.5;
}

.article-cards-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;

  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .article-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    // Phone
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    // Ipad
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    // Pc, Desktop
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    .articles {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr;

      // Phone
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      // Ipad
      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
      // Pc, Desktop
      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
