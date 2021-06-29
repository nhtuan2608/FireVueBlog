<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">
          FireBlogs
        </router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobie">
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create/ Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon class="menu-icon" @click="toggleMobileNav" v-show="mobie"/>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <h2 class="header" style="color: #fff;">FireBlogs</h2>
        <hr/>
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create/ Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "navigation",
  components: {
    menuIcon,
  },
  data() {
    return {
      mobie: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobie = true;
        return false;
      }
      this.mobie = false;
      this.mobileNav = false;
      return false;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    background-color: #fff;
    padding: 0 25px;
    z-index: 0;
    box-shadow: 0 0 1px rgba(40, 41, 61, 0.4), 0 2px 4px rgba(96, 97, 112, 0.4);
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;

    &:hover {
        color: aqua;
    }
}

 nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;
      }

      .link:last-child {
        margin-right: 0;
      }
    }
 }

 .menu-icon {
   cursor: pointer;
   position: absolute;
   top: 32px;
   right: 25px;
   height: 25px;
   width: auto;
 }

 .mobile-nav {
   padding: 20px;
   width: 70%;
   max-width: 250px;
   display: flex;
   flex-direction: column;
   position: fixed;
   height: 100%;
   background-color: #000;
   top: 0;
   left: 0;

   .link {
     padding: 15px 0;
     color: #fff;
   }
 }

 .mobile-nav-enter-active,
 .mobile-nav-leave-active {
   transition: all 1s ease;
 }

 .mobile-nav-enter {
   transform: translateX(-250px);
 }

 .mobile-nav-enter-to {
   transform: translateX(0px);
 }

 .mobile-nav-leave-to {
   transform: translateX(-250px);
 }
</style>
