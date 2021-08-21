<template>
  <div class="form-wrap">
      <form class="register">
          <h2>Create Yours World</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="First Name" v-model="firstName" />
                  <UserIcon class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="Last Name" v-model="lastName" />
                  <UserIcon class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="Username" v-model="username" />
                  <UserIcon class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="Email" v-model="email" />
                  <EmailIcon class="icon" />
              </div>
              <div class="input">
                  <input type="password" placeholder="Password" v-model="Password" />
                  <PwdIcon class="icon" />
              </div>
          </div>
          <button type="button">Sign Up</button>
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

export default {
  name: "Register",
  components: {
    EmailIcon,
    PwdIcon,
    UserIcon,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
    }
  },
}
</script>

<style lang="scss">
</style>