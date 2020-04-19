<template>
    <div id="tgs-roll-config-counter">
        <button class="own-button-big" id="tgs-roll-games">Roll</button>
        <div id="tgs-random-game-counter-div">
            <button class="own-button" id="tgs-random-game-minus" v-on:click="count = decreaseCounter(count)">-</button>
            <div id="tgs-random-game-counter"> {{ count }}</div>
            <button class="own-button" id="tgs-random-game-plus" v-on:click="count = increaseCounter(count)">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TgsRollConfigCounter",
        data() {
            return {
                count: 1
            }
        },
        methods: {
            increaseCounter(currCount)
            {
                if (currCount < 15) {
                    return currCount + 1;
                }
                return currCount;
            },

            decreaseCounter(currCount)
            {
                if (currCount > 1) {
                    return currCount - 1;
                }
                return currCount;
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

</style>
