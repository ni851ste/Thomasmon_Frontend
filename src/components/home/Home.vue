<template>
    <div>
        <NavBar v-bind:active-index="0"/>
        <CenteredContent v-bind:index="0"/>
    </div>
</template>

<script>
    import NavBar from "../general/NavBar";
    import CenteredContent from "../general/CenteredContent";

    export default {
        name: 'Home',
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

    .own-button {
        border: none;
        background-color: dimgray;
        color: white;
    }

    .own-button-big {
        border: none;
        padding: 1.2em;
        background-color: dimgray;
        color: white;
    }

    .own-button-big:hover, .own-button:hover {
        background-color: #ddd;
        color: black;
        cursor: pointer;
    }
</style>
