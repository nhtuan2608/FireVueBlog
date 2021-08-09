<template>
  <div class="article-cards-wrap">
      <div class="article-cards container">
          <div class="toolbox">
            <div class="left">
              <!-- <SearchBar /> -->
              <SearchBar />
              <!-- <SearchBar :isCustomized="true"/> -->
            </div>
            <div class="right">
              <div class="switch">
                <span>Editing Mode</span>
                <input type="checkbox" name="editToggleButton" v-model="isEditingMode"/>
              </div>
            </div>
          </div>
          <div class="articles">
            <ArticleCard :article="article" v-for="(article, index) in sampleArticleCards" :key="index"/>
          </div>
      </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue';
import SearchBar from '../components/SearchBar.vue';
const $ = require('jquery');
export default {
  name: "Articles",
  components: {
    ArticleCard,
    SearchBar,
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
    padding: 50px 16px;

    .article-cards.container {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr !important;

      .toolbox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-width: 500px) {
          flex-direction: column;
          max-height: 80px;
          
            row-gap: 16px;
        }

        .left {
          flex-direction: column;

          @media (max-width: 500px) {
            align-items: flex-end;
            flex-direction: row;
            gap: 0;
          }
        }

        .right {
          flex-direction: column;

          @media (max-width: 500px) {
            align-items: flex-end;
            flex-direction: row;
          }

          .switch {
            display: flex;
            align-items: center;
            position: relative;
            flex: 3;
            // top: -70px;
            // right: 0;

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
    }
  }

  .activeEdit {
    background: rgba(74, 74, 74, 1) !important;
  }

  
</style>
