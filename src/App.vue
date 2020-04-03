<template>
    <div id="app">
        <NavBar/>
        <CenteredContent/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import NavBar from "./components/general/NavBar";
    import CenteredContent from "./components/general/CenteredContent";

    export default {
        name: 'App',
        components: {
            NavBar,
            CenteredContent
        }
    }
</script>

<style>
    body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #232323;

        color: white;
    }
</style>
