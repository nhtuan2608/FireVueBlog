<template>
    <div>
        <img src="../assets/Icons/1.png" 
                @click="toTopScreen(classMain)"
                @mousewheel="checkIsTopScreen"
                alt="scroll to top of Screen" 
                width="30px"
                height="30px"
                id="scrollTopButton" 
                class="scrollBtn lazyloaded"/>
    </div>
    
</template>

<script>
const $ = require('jquery');
export default {
    name: 'TopNavigator',
    props: ["classMain"],
    components: {},
    created() {},
    mounted() {},
    methods: {
        toTopScreen(element) {
            var chageLocation = 5;
            window.scroll($('.' + element).clientHeight - chageLocation, 0);
            setTimeout(function() {
                window.scroll(0, 0);
            }, 100);
        },
        checkIsTopScreen() {
        },
    }
}
</script>

<style lang="scss" scoped>
    .scrollBtn {
        position: fixed;
        opacity: 0.5;
        left: calc(100% - 50px);
        // top: calc(100% - 5px);
        z-index: 3;

        &:hover {
            opacity: 1;
        }
    }
</style>