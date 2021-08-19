<template>
  <div class="form-wrap">
    <form class="login">
      <h2>Enjoy Your World</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" id="emailInText" placeholder="Email" v-model="email" />
          <EmailIcon class="icon" />
        </div>
        <div class="input">
          <input type="password" id="passwordInText" placeholder="Password" v-model="password" />
          <PwdIcon class="icon" />
        </div>
        <div class="errMessage" v-show="error">
          {{ this.errMessage }}
        </div>
      </div>
      <button type="button" @click.prevent="signIn">Sign In</button>
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>
      <router-link class="forget-password" :to="{ name: 'ForgotPassword' }"
        >Forget your password?</router-link
      >
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PwdIcon from "../assets/Icons/lock-alt-solid.svg";
/** Firebase connection */
import firebase from "firebase/app";
import "firebase/auth";
// import db from "../firebase/firebaseInit";
/** Firebase connection */
const $ = require("jquery");
export default {
  name: "Login",
  components: {
    EmailIcon,
    PwdIcon,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      errMessage: "",
      errCssClass: "",
    };
  },
  methods: {
    signIn() {
      if (this.validateInput()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: "Home" });
            this.error = false;
            this.errMessage = "";
            console.log(firebase.auth().currentUser.uid);
          })
          .catch((err) => {
            this.error = true;
            this.errMessage = err;
          });
      } else {
          return;
      }
    },
    validateInput() {
      $("input").removeClass(this.errCssClass);
      this.error = false;
      if (this.email === "") {
        this.error = true;
        this.errCssClass = "error";
        $("input#emailInText").addClass(this.errCssClass);
      }
      if (this.password === "") {
        this.error = true;
        this.errCssClass = "error";
        $("input#passwordInText").addClass(this.errCssClass);
      }
      if (this.error) {
        this.errMessage = 'Please fill out all the fields';
        return false;
      }
      this.errMessage = "";
      return true;
    },
  },
};
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100%;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-top: 15px;

    .router-link {
      color: #000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }

        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .forget-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }
  }
}
</style>
