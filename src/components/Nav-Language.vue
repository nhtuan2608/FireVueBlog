<template>
  <div class="languages" v-if="!getLanguagesPackage.isOff">
        <div class="dropdown">
        <button class="dropbtn">
            <i class="material-icons">language</i>
            <i class="material-icons">arrow_drop_down</i>
        </button>
        <div class="dropdown-content">
            <span v-for="(language, index) in getLanguagesPackage.languages" :key="index">
                <a href="#" @click="changeLanguage(language)">
                    <img :src="require(`../assets/flag/${language}-flag.png`)" height="30px"/>
                    <span class="txt">{{language}}</span>
                    <span v-if="language == getLanguagesPackage.chosenLanguage">
                        <i class="material-icons">done</i>
                    </span>
                </a>
            </span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav-Language',
    data() {
        return {
        }
    },
    methods: {
        changeLanguage(strLaguage) {
            this.$store.commit("changeLanguage", strLaguage);

        },
    },
    computed: {
        getLanguagesPackage() {
            return this.$store.state.languagesPackage;
        },
    }
}
</script>

<style lang="scss" scoped>
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
        color: aqua;
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

        a.router-link-exact-active.router-link-active {
            color: aqua;
        }
        
        .txt {
          margin: 5px 5px;
          text-transform: uppercase;
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
</style>