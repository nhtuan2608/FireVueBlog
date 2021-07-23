<template>
  <div class="form-wrap">
      <form class="login">
          <p class="login-register">
              Don't have an account?
              <router-link class="link" :to="{name: 'Register'}"></router-link>
          </p>
          <h2>Login to FireBlogs</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="" v-model="email" />
              </div>
          </div>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>