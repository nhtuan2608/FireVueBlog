<template>
  <div v-if="this.hasUser" class="profile-wrap">
        <div class="dropdown">
            <button href="javascript:void(0);" class="dropbtn" >
                <i class="material-icons contentBtn">account_circle</i>
                <span class="contentBtn">{{ this.$store.state.userProfile.userName }}</span>
                <i class="material-icons contentBtn">arrow_drop_down</i>
            </button>
            <div class="dropdown-content">
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
                      <div @click="signOut" class="option">
                          <a class="option">
                            <signOutIcon class="icon"/>
                            <p>Sign Out</p>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>

import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";

/** Firebase connection */
import firebase from "firebase/app";
import "firebase/auth";
/** Firebase connection */

export default {
    name: 'Nav-Profile',
    components: {
        userIcon,
        adminIcon,
        signOutIcon,
    },
    props: ['hasUser'],
    data() {
        return {
        }
    },
    methods: {
        signOut() {
            firebase.auth().signOut();
            window.location.reload()
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
    .profile-wrap {
      margin-top: 5px;

      /* The dropdown container */
      .dropdown {
        float: left;
        overflow: hidden;
      }

      
      /* Dropdown button */
      .dropdown button.dropbtn {
        padding: 12px 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        border: none;
        outline: none;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        margin: 0; /* Important for vertical align on mobile phones */
        color: #000;

        .contentBtn {
            margin: 2px;
            text-align: center;
        }
      }

      /* Add a red background color to navbar links on hover */
      .navbar a:hover, .dropdown:hover .dropbtn {
        // color: aqua;
      }

      /* Dropdown content (hidden by default) */
      .dropdown-content {
        display: none;
        position: absolute;
        right: 120px;
        background-color: #f9f9f9;
        min-width: 120px;
        // box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border: 1px solid #C7D9FF;
        box-shadow: 0 0 10px #050608;
        -webkit-box-shadow: 0 0 10px #050608;
        -moz-box-shadow: 0 0 10px #050608;

        .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #000;

            .initials {
                position: initial;
                width: 40px;
                height: 40px;
                background-color: #000;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                text-transform: uppercase;
            }

            .right {
                flex: 1;
                margin-left: 24px;

                p:nth-child(1) {
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                p:nth-child(2),
                p:nth-child(3) {
                    font-size: 12px;
                }
            }
        }

        .options {
            text-decoration: none;
            margin-bottom: 12px;

            .icon {
                width: 18px;
                height: auto;
            }

            p {
                font-size: 14px;
                margin-left: 12px;
            }

            &:last-child {
                margin-bottom: 0px;
            }
        }
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