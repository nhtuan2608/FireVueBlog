<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="isLoading" />
    <div class="form-wrap">
      <form class="login">
          <h2>Reset Password</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="Email" v-model="email" />
                  <EmailIcon class="icon" />
              </div>
          </div>
          <button @click.prevent="resetPassword" type="button">Reset</button>
          <p class="login-register">
              Back to Login? 
              <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
          </p>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
export default {
  name: "ForgetPassword",
  components: {
    EmailIcon,
    Modal,
    Loading,
  },
  data() {
    return {
      email: '',
      modalActive: false,
      modalMessage: '',
      isLoading: false,
    };
  },
  methods: {
    resetPassword() {
      this.isLoading = true;
      if (this.email != '') {
        // Write your call method below
        ``````
        // Success call method
        this.modalMessage = 'If your account exists, you will receive an email!';
        // Catch err Falied
        var err;
        this.modalMessage = err.message;
        this.isLoading = false;
        this.modalActive = true;
      } else {
        this.modalMessage = 'Please fill out your email to recover your account!';
        this.isLoading = false;
        this.modalActive = true;
      }
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = '';
    },
  }
}
</script>

<style lang="scss" scoped>
  .reset-password {
    // position: relative;

    .form-wrap {
      .reset {
        h2 {
          margin-bottom: 8px;
        }
        p {
          margin-bottom: 32px;
        }
      }
    }
  }
</style>