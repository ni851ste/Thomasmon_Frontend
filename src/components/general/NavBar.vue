<template>
    <div class="topnav">
        <div class="topnav-container">
            <a class="active" id="top-nav-home">Home</a>
            <!--a id="top-nav-game">Game</a-->
            <!--a id="top-nav-jtk">JaronTheKid</a-->
            <a id="top-nav-tgs">TGS Game Picker</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    @media (max-width: 1024px) {
        .topnav-container {
            padding-left: 20px;
        }

        .topnav a {
            text-align: center;
            float: left;
            color: dimgray;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }
    }

    @media (min-width: 1024px) {
        .topnav-container {
            padding-left: calc(50% - 485px);
        }

        .topnav a {
            text-align: center;
            float: left;
            color: dimgray;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }
    }

    a:visited {
        color: #3DCC00;
    }

    .topnav {
        overflow: hidden;
        /* position: fixed; */
        background-color: #4C4C4C;
    }

    .topnav a:hover {
        background-color: #ddd;
        color: black;
        cursor: pointer;
    }

    .topnav a.active {
        background-color: dimgray;
        color: white;
    }
</style>
