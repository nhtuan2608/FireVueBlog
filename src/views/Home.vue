<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
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
        }
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
  .home {
    margin-top: 80px;
  }
</style>
