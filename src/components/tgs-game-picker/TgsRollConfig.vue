<template>
    <div id="tgs-picker-middle">
        <h1>middle</h1>
        <button class="own-button-big" id="tgs-roll-games">Roll</button>
        <div id="tgs-random-game-counter-div">
            <button class="own-button" id="tgs-random-game-minus" v-on:click="this.minus()">-</button>
            <div id="tgs-random-game-counter">1</div>
            <button class="own-button" id="tgs-random-game-plus" v-on:click="plus">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TgsRollConfig",
        methods: {
            plus() {
                let currentElement = $('#tgs-random-game-counter');
                let counter = parseInt(currentElement.text());
                if (counter < 15) {
                    currentElement.text(++counter);
                }
            },

            minus() {
                let currentElement = $('#tgs-random-game-counter');
                let counter = parseInt(currentElement.text());
                if (counter > 1) {
                    currentElement.text(--counter);
                }
            }

        }
    }


</script>

<style scoped>
    #tgs-random-game-counter-div {
        margin-top: 1em;
        display: flex;
        justify-content: center;
    }

    #tgs-random-game-counter {
        padding: 5px 10px;
    }

    #tgs-picker-middle {
        padding: 1em;
    }
</style>
