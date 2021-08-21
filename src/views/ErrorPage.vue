<template>
  <div class="error-page-wrap">
      isErrorPage
  </div>
</template>

<script>
export default {
    created() {
        this.init();
    },
    beforeDestroy() {
        this.beforeLeave();
    },
    methods: {
        init() {
            console.log('errrrr: ' + this.isError);
        },
        beforeLeave() {
            if(this.isError) {
                this.$store.commit("setIsErrorPage", false);
            } else {
                if(this.disabledNavigation) {
                    this.$store.commit("setDisabledNavigation", false);
                }
            }
        }
    },
    computed: {
        isError: {
            get() {
                return this.$store.state.isError;
            },
            set(payload) {
                this.$store.commit("setIsErrorPage", payload);
            }
        },
        disabledNavigation: {
            get() {
                return this.$store.state.disabledNavigation;
            },
            set(payload) {
                this.$store.commit("setDisabledNavigation", payload);
            }
        },
    },
    watch: {

    },
}
</script>

<style lang="scss" scoped>
    .error-page-wrap {
        top: 400px;
    }
</style>