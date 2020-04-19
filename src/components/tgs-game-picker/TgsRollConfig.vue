<template>
    <div id="tgs-picker-middle">
        <h1>middle</h1>
        <TgsRollConfigCounter/>
    </div>
</template>

<script>
    import TgsRollConfigCounter from "./TgsRollConfigCounter";

    export default {
        name: "TgsRollConfig",
        components: {TgsRollConfigCounter},
    }


</script>

<style scoped>
    #tgs-picker-middle {
        padding: 1em;
    }
</style>
