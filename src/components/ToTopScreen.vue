<template>
    <!-- <router-link to="#" @click.native="toTop">
        <img src="../assets/Icons/1.png" 
            @mousewheel="checkIsTopScreen"
            alt="scroll to top of Screen" 
            width="30px"
            height="30px"
            id="scrollTopButton"
            class="scrollBtn lazyloaded"/>

    </router-link> -->
    <img src="../assets/Icons/1.png" 
            @click="toTopScreen(classMain)"
            alt="scroll to top of Screen" 
            width="30px"
            height="30px"
            id="scrollTopButton" 
            class="scrollBtn lazyloaded"/>
</template>

<script>
const $ = require('jquery');
export default {
    name: 'TopNavigator',
    props: ["classMain", "currentRoute"],
    components: {},
    created() {
        this.checkMouseScroll();
    },
    mounted() {},
    methods: {
        toTopScreen(element) {
            var chageLocation = 5;
            window.scroll($('.' + element).clientHeight - chageLocation, 0);
            setTimeout(function() {
                window.scroll(0, 0);
            }, 100);
        },
        toTop() {
            window.scrollTo(0,0);
        },
        checkMouseScroll() {
            $(window).on('scroll', function () {
                var $this = $(this),
                    $body = $('body');

                var percent = Math.round($this.scrollTop() / ($body.height() - $this.height()) * 100);
                // console.log('Scroll at: ' + percent + '% screen');
                
                if (percent <= 1) {
                  $('.scrollBtn').css('visibility', 'hidden');
                } else {
                  $('.scrollBtn').css('visibility', 'visible');
                }

                if(percent >= 90) {
                  $('.scrollBtn').addClass('endPage-Background');
                } 
                else {
                  $('.scrollBtn').removeClass('endPage-Background');
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
    .scrollBtn {
        visibility: hidden;
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 100;
        cursor: pointer;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }

    .endPage-Background {
        background-color:#fff;
        border-radius: 15px;
        opacity: 1 !important;
    }
</style>