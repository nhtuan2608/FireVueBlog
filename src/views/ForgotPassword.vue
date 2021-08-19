<template>
  <div class="reset-password">
    <Modal v-if="modalActive" v-on:close-modal="closeModal" />
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
          <button type="button">Reset</button>
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
      email: null,
      modalActive: true,
      modalMessage: '',
      isLoading: false,
    };
  },
  methods: {
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