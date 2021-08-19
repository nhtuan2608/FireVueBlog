<template>
  <div class="languages" ref="profile">
        <div class="dropdown">
        <button href="javascript:void(0);" class="dropbtn" >
            <i class="material-icons">account_circle</i>
            <i class="material-icons">arrow_drop_down</i>
        </button>
        <div class="dropdown-content">
            <span>{{ this.$store.state.userProfile.initials }}</span>
            <div class="profile-menu">
                <div class="info">
                    <p class="initials">{{ this.$store.state.userProfile.initials }}</p>
                    <div class="right">
                        <p>{{ this.$store.state.userProfile.firstName }} {{ this.$store.state.userProfile.lastName }}</p>
                        <p>{{ this.$store.state.userProfile.userName }}</p>
                        <p>{{ this.$store.state.userProfile.email }}</p>
                    </div>
                </div>
                <div class="options">
                    <div class="option">
                        <router-link class="option" to="#">
                            <userIcon class="icon"/>
                            <p>Profile</p>
                        </router-link>
                    </div>
                    <div class="option">
                        <router-link class="option" to="#">
                            <adminIcon class="icon"/>
                            <p>Admin</p>
                        </router-link>
                    </div>
                    <div class="option">
                        <router-link class="option" to="#">
                            <signOutIcon class="icon"/>
                            <p>Sign Out</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- <span v-for="(language, index) in getLanguagesPackage.languages" :key="index">
                <a href="#" @click="changeLanguage(language)">
                    <img :src="require(`../assets/flag/${language}-flag.png`)" height="30px"/>
                    <span class="txt">{{language}}</span>
                    <span v-if="language == getLanguagesPackage.chosenLanguage">
                        <i class="material-icons">done</i>
                    </span>
                </a>
            </span> -->
        </div>
        </div>
    </div>
</template>

<script>
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
export default {
    name: 'Nav-ProfileUser',
    data() {
        return {
            userIcon,
            adminIcon,
            signOutIcon,
        }
    },
    methods: {
        // changeLanguage(strLaguage) {
        //     this.$store.commit("changeLanguage", strLaguage);

        // },
    },
    computed: {
        // getLanguagesPackage() {
        //     return this.$store.state.languagesPackage;
        // },
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
      .dropdown button.dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        margin: 0; /* Important for vertical align on mobile phones */
        color: #000;
        padding: 12px 4px;
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