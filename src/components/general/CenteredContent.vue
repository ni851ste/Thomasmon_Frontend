<template>
    <div id="main-content-body">

        <template v-if="index === 0">
            <div class="centered-content">
                <ScrollableContent/>
                <SideContent/>
            </div>
        </template>
        <template v-else-if="index === 1">
            <div class="centered-content">
                <div id="tgs-game-picker">
                    <h1>TGS Game Picker</h1>
                    <div id="tgs-frame">
                        <TgsGameList/>
                        <TgsRollConfig/>
                        <TgsPickedGames/>
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
    import ScrollableContent from "../home/ScrollableContent";
    import SideContent from "../home/SideContent";
    import TgsGameList from "../tgs-game-picker/TgsGameList";
    import TgsRollConfig from "../tgs-game-picker/TgsRollConfig";
    import TgsPickedGames from "../tgs-game-picker/TgsPickedGames";

    export default {
        name: "CenteredContent",
        components: {
            TgsPickedGames,
            TgsRollConfig,
            TgsGameList,
            ScrollableContent,
            SideContent
        },
        props: {
            index: Number
        }
    }
</script>

<style scoped>
    @media (max-width: 1024px) {
        .centered-content {
            display: block;

            color: white;

            width: calc(100% - 40px);
            margin-left: 20px;
            margin-right: 20px;
        }


    }

    @media (min-width: 1024px) {
        .centered-content {
            display: flex;

            width: 100%;
        }

    }

    #main-content-body {
        justify-content: center;
        display: flex;
        box-sizing: border-box;
    }

    .centered-content {
        vertical-align: baseline;
        justify-content: center;

        color: white;
        margin-top: 20px;
    }
</style>
