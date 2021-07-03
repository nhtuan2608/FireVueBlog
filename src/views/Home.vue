<template>
  <div class="home" @click="checkNavMobile">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
const $ = require('jquery');
export default {
  name: "Home",
  components: {BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        isFirstScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "The First BLogPost!",
          blogHTML: "This is Brand-new Site BlogPost",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "The First BLogPost!",
          blogHTML: "This is Brand-new Site BlogPost",
          blogCoverPhoto: "designed-for-everyone",
        },
        {
          title: "The First BLogPost!",
          blogHTML: "This is Brand-new Site BlogPost",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "The First BLogPost!",
          blogHTML: "This is Brand-new Site BlogPost",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    }
  },
  methods: {
    checkNavMobile() {
      var isOpenning = $('.mobile-nav').hasClass('isActive');
      console.log('before' + isOpenning);
      if (isOpenning) {
        // this.isInActive = false;
        // console.log('######' + this.isInActive);
        // $('.mobile-nav').toggleClass('mobile-nav-leave-active');
        // $('.mobile-nav').toggleClass('mobile-nav-leave-to');
        // $('.mobile-nav').removeClass('isActive');
        $('.mobile-nav').addClass('requestClose');
      } else if (!isOpenning) {
        // $('.mobile-nav').toggleClass('mobile-nav-enter-to')
        // console.log('@@@@@@' + this.isInActive);
        // this.isInActive = true;
        // document.getElementsByClassName('mobile-nav')[0].style.transform = 'translateX(-250px)';
      }
      console.log('after' + isOpenning);
    },
  }
};
</script>

<style lang="scss" scoped>
  .home {
    margin-top: 80px;
    z-index: 0;
  }
</style>
