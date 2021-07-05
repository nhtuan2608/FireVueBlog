<template>
  <div class="article-cards-wrap">
      <div class="article-cards container">
          <div class="switch">
              <span>Editing Mode</span>
              <input type="checkbox" name="editToggleButton" v-model="isEditingMode"/>
          </div>
          <ArticleCard :article="article" v-for="(article, index) in sampleArticleCards" :key="index"/>
      </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'
const $ = require('jquery');
export default {
  name: "Articles",
  components: {
    ArticleCard,
  },
  data() {
    return {
    }
  },
  watch: {
    isEditingMode() {
      if (this.isEditingMode) {
        $('input[name="editToggleButton"]').addClass('activeEdit');
      } else {
        $('input[name="editToggleButton"]').removeClass('activeEdit');
      }
    }
  },
  computed: {
    sampleArticleCards() {
      return this.$store.state.sampleArticleCards;
    },
    isEditingMode: {
      get() {
        return this.$store.state.isEditingMode;
      },
      set(payload) {
        this.$store.commit("toggleEditingMode", payload);
      },
    }
  },
  beforeDestroy() {
    this.$store.commit("toggleEditingMode", false);
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
  .article-cards-wrap {

    .article-cards {
      position: relative;

      .switch {
        display: flex;
        align-items: center;
        position: absolute;
        top: -70px;
        right: 0;

        span {
          margin-right: 16px;
        }

        input[type="checkbox"] {
          opacity: 0.5;
          position: relative;
          border: none;
          -webkit-appearance: none;
          background: #fff;
          outline: none;
          width: 80px;
          height: 30px;
          border-radius: 20px;
          box-shadow: 0 4px 6px -1px rbga(0, 0, 0, 0.1), 0 2px 4px -1px rbga(0, 0, 0, 0.06);
        }

        input[type="checkbox"]:before {
          content: "";
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 20px;
          top: 0;
          left: 0;
          background: #303030;
          transform: scale(1.1);
          transition: 750ms ease all;
          box-shadow: 0 4px 6px -1px rbga(0, 0, 0, 0.1), 0 2px 4px -1px rbga(0, 0, 0, 0.06);
        }

        input:checked[type="checkbox"]:before {
          background: #000;
          left: 52px;
        }
      }
    }
  }

  .activeEdit {
    background: rgba(74, 74, 74, 1) !important;
  }

  
</style>
