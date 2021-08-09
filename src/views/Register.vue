<template>
  <div class="form-wrap">
      <form class="register" >
          <h2>Create Yours World</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" id="firstNameInText" placeholder="First Name" v-model="firstName" />
                  <UserIcon class="icon" />
              </div>
              <div class="input">
                  <input type="text" id="lastNameInText" placeholder="Last Name" v-model="lastName" />
                  <UserIcon class="icon" />
              </div>
              <div class="input">
                  <input type="text" id="userNameInText" placeholder="Username" v-model="userName" />
                  <UserIcon class="icon" />
              </div>
              <div class="input">
                  <input type="text" id="emailInText" placeholder="Email" v-model="email" />
                  <EmailIcon class="icon" />
              </div>
              <div class="input">
                  <input type="password" id="passwordInText" placeholder="Password" v-model="password" />
                  <PwdIcon class="icon" />
              </div>
              <div class="errMessage" v-show="error">{{this.errMessage}}</div>
          </div>
          <button type="button" @click.prevent="registerAccount">Sign Up</button>
          <p class="login-register">
              Already have an account?
              <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
          </p>
      </form>
  </div>
</template>

<script>
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PwdIcon from "../assets/Icons/lock-alt-solid.svg";
import UserIcon from "../assets/Icons/user-alt-light.svg";
/** Firebase connection */ 
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
/** Firebase connection */ 
const $ = require('jquery');
export default {
  name: "Register",
  components: {
    EmailIcon,
    PwdIcon,
    UserIcon,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      error: false,
      errMessage: '',
      errCssClass: '',
    }
  },
  methods: {
    async registerAccount() {
      if (!this.validateInput()) {
        return;
      } else {
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        const result = await createUser;
        const database = db.collection("users").doc(result.user.uid);
        await database.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
        });
        this.$router.push({name: 'Home'});
        return;
      }
    },

    validateInput() {
      $('input').removeClass(this.errCssClass);
      this.error = false;
      if (this.firstName === "") {
        this.error = true;
        this.errCssClass = 'error';
        $('input#firstNameInText').addClass(this.errCssClass);
      }
      if (this.lastName === "") {
        this.error = true;
        this.errCssClass = 'error';
        $('input#lastNameInText').addClass(this.errCssClass);
      }
      if (this.userName === "") {
        this.error = true;
        this.errCssClass = 'error';
        $('input#userNameInText').addClass(this.errCssClass);
      }
      if (this.email === "") {
        this.error = true;
        this.errCssClass = 'error';
        $('input#emailInText').addClass(this.errCssClass);
      }
      if (this.password === "") {
        this.error = true;
        this.errCssClass = 'error';
        $('input#passwordInText').addClass(this.errCssClass);
      }

      if (this.error) {
        this.errMessage = 'Please fill out all the fields';
        return false;
      }
      this.errMessage = '';
      return true;
    }
  }
}
</script>

<style lang="scss">
  .error {
    background-color: antiquewhite !important;
  }
</style>