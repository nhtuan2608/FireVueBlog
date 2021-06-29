<template>
    <div>
        <scrollIcon @click="toTopScreen" class="scrollBtn"/>
    </div>
    
</template>

<script>
import scrollIcon from "../assets/Icons/to-top-triangle.svg";
export default {
    name: 'TopNavigator',
    components: {
        scrollIcon
    },
    created() {
        this.toTopScreen();
    },
    methods: {
        toTopScreen() {
            document.getElementById('home').scrollTop;
        },
        checkisTopScreen() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .scrollBtn {
        position: fixed;
        opacity: 50%;
        left: calc(100% - 100px);
        top: calc(100% - 80px);
        z-index: 10;

        // @media (max-device-width: 689px) {
        //     top: calc(100% - 300px);
        // }
    }

    .scrollBtn:hover {
        box-shadow: 1px 4px #857a7a;
        border-radius: 35px;
    }
</style>