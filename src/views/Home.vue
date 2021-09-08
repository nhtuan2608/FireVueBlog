<template>
  <div class="home-wrap">
    <BlogPost v-show="!getUser" :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>

    <div class="article-cards-wrap">
      <div class="container">
        <h3>※Lastest Articles</h3>
        <span class="hr"></span>
        <div class="article-cards">
          <ArticleCard :article="article" v-for="(article, index) in sampleArticleCards" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import ArticleCard from '../components/ArticleCard.vue'
export default {
  name: "Home",
  components: {
    BlogPost,
    ArticleCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        isFirstScreen: true,
        photo: "coding",
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
      ],
      /**
       * Move to store to control state
       * Using computed 
       */
      // sampleArticleCards: [
      //   { articleTitle: "Article #1", articleCoverPhoto: "stock-1", createdDate: "May 1, 2021"},
      //   { articleTitle: "Article #2", articleCoverPhoto: "stock-2", createdDate: "May 7, 2021" },
      //   { articleTitle: "Article #3", articleCoverPhoto: "stock-3", createdDate: "May 14, 2021" },
      //   { articleTitle: "Article #4", articleCoverPhoto: "stock-4", createdDate: "May 21, 2021" },
      // ],
    }
  },
  computed: {
    sampleArticleCards() {
      return this.$store.state.sampleArticleCards;
    },
    getUser() {
      return this.$store.state.user != null ? true : false;
    },
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
  .article-cards-wrap {
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 10px;
    }

    .hr {
      margin-bottom: 32px;
      border-bottom: 2px solid #000;
      display: flex;
      width: 50%;
    }
  }
</style>
