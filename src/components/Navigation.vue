<template>
  <header>
    <!-- Nav PC -->
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: '/' }">
          FireBlogs
        </router-link>
      </div>
      
      <div class="nav-links" v-show="!mobie || !!disabledNavigation">
        <ul>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Articles' }">Articles</router-link>
          <router-link class="link" to="#">Create/ Post</router-link>
          <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link>
        </ul>
        <!-- <NavProfileUser /> -->
        <NavLanguage />
      </div>
    </nav>
    <!-- Nav PC -->

    <!-- Nav Mobile -->
    <a href="javascript:void(0)" class="menuLink" v-bind:class="isToggling">
      <menuIcon class="menu-icon" @click="toggleMobileNav" v-show="mobie"/>
    </a>
    <transition name="mobile-nav" v-on:before-enter="beforeEnter" v-on:enter="entered">
      <div class="mobile-nav" v-show="mobileNav">
        <div class="navlink-left">
          <h2 class="header" style="color: #fff;">FireBlogs</h2>
          <hr/>
          <router-link class="link" @click.native="toggleMobileNav" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" @click.native="toggleMobileNav" :to="{ name: 'Articles' }">Articles</router-link>
          <router-link class="link" @click.native="toggleMobileNav" to="#">Create/Post</router-link>
          <router-link class="link" @click.native="toggleMobileNav" :to="{ name: 'Login' }">Login/Register</router-link>
        </div>
        <div class="navlink-right" @click="toggleMobileNav"></div>
      </div>
    </transition>
    <!-- Nav Mobile -->
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import NavLanguage from "../components/Nav-Language.vue";
// import NavProfileUser from "../components/Nav-ProfileUser.vue";
const $ = require('jquery');
export default {
  name: "navigation",
  components: {
    menuIcon,
    NavLanguage,
    // NavProfileUser,
  },
  props: ['disabledNavigation'],
  data() {
    return {
      mobie: null,
      mobileNav: null,
      windowWidth: null,
      isToggling: null,
      currentUrl: '',
    };
  },
  created() {
    // window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    this.initNav();
  },
  mounted() {
  },
  computed: {},
  methods: {
    initNav() {
      this.currentUrl = window.location.pathname.split('/')[1];
      var arrLink = $('nav.container').find('a.link');
      $.each(arrLink, function(key, val) {
        // console.log('this.url: ' + this.currentUrl);
        if (val.href.split('/')[3] == this.currentUrl) {
          arrLink[key].addClass('router-link-exact-active.router-link-active');
          return false;
        }
      })
    },
    beforeEnter() {
      this.isToggling = 'link-disabled';
    },
    entered() {
      this.isToggling = '';
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobie = true;
        return false;
      }
      this.mobie = false;
      this.mobileNav = false;
      $('.mobile-nav').removeClass('isActive');
      return false;
    },

    toggleMobileNav() {
      var isRequested = $('.mobile-nav').hasClass('requestClose');
      console.log(isRequested);

      // Click outside the Nav Moblie
      if (isRequested) {
        this.mobileNav = !this.mobileNav;
        $('.mobile-nav').removeClass('requestClose');
      }

      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        $('.mobile-nav').addClass('isActive');
      } else {
        $('.mobile-nav').removeClass('isActive');
      }
    },
  }
};
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    background-color: #fff;
    padding: 0 25px;
    z-index: 1;
    box-shadow: 0 0 1px rgba(40, 41, 61, 0.4), 0 2px 4px rgba(96, 97, 112, 0.4);

    .languages {
      margin-top: 5px;

      /* The dropdown container */
      .dropdown {
        float: left;
        overflow: hidden;
      }

      /* Dropdown button */
      .dropdown .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        margin: 0; /* Important for vertical align on mobile phones */
      }

      /* Add a red background color to navbar links on hover */
      .navbar a:hover, .dropdown:hover .dropbtn {
        // color: aqua;
      }

      /* Dropdown content (hidden by default) */
      .dropdown-content {
        display: none;
        position: absolute;
        right: 10px;
        background-color: #f9f9f9;
        min-width: 120px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }

      /* Links inside the dropdown */
      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: center;
        display: flex;

        .txt {
          margin: 5px 5px;
        }
      }

      /* Add a grey background color to dropdown links on hover */
      .dropdown-content a:hover {
        background-color: #ddd;
      }

      /* Show the dropdown menu on hover */
      .dropdown:hover .dropdown-content {
        display: block;
      }
    }
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;

    &:hover {
        color: aqua;
    }
}
a.router-link-exact-active.router-link-active {
  color: aqua;
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
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;

  .navlink-left {
    padding: 20px;
    width: 55%;
    background-color: #000;
    display: flex;
    max-width: 250px;
    flex-direction: column;
    flex: 1;
    flex-basis: auto;

    .link {
      padding: 15px 0;
      color: #fff;
      width: 30%;
    }
  }

  .navlink-right {
    opacity: 0;
    flex: 2;
    visibility: visible;
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

 .requestClose {
    transition: all 1s ease;
    transform: translateX(-250px);
  }

  .link-disabled {
    pointer-events: none;
  }
</style>
