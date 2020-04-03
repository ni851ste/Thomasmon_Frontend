<template>
    <div class="scrollable-content">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

</template>

<script>
    import HelloWorld from "../HelloWorld";

    export default {
        name: "ScrollableContent",
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>
    @media (max-width: 1024px) {
        .scrollable-content {
            text-align: center;

            margin-bottom: 30px;
        }
    }

    @media (min-width: 1024px) {
        .scrollable-content {
            text-align: center;
            width: 640px;
        }
    }
        .scrollable-content{
        border: 2px solid white;
        border-radius: 8px;

        margin-bottom: 16px;
    }

    .scrollable-content:hover{
        background-color: #2B2B2B;
    }
</style>
