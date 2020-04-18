<template>
    <div>
        <NavBar v-bind:active-index="1"/>
        <CenteredContent v-bind:index="1"/>
    </div>
</template>

<script>
    //TODO make the indices dynamic
    import NavBar from "../general/NavBar";
    import CenteredContent from "../general/CenteredContent";

    export default {
        name: "TgsGamePicker",
        components: {CenteredContent, NavBar}
    }
</script>

<style>
    @media (max-width: 1024px) {
        #tgs-frame {
            margin: 0 15px;
        }

        #tgs-game-picker {
            text-align: center;
            width: 100%;

            border: 2px solid white;
            border-radius: 8px;
        }
    }

    @media (min-width: 1024px) {
        #tgs-game-picker {
            text-align: center;
            width: 976px;

            border: 2px solid white;
            border-radius: 8px;
        }

    }

    #tgs-frame {
        justify-content: center;
        display: flex;
    }

    #tgs-picker-left, #tgs-picker-right {
        width: 37%;

        border: 2px solid white;
        border-radius: 8px;

        padding: 1em;
        margin-bottom: 2em;
    }


</style>
