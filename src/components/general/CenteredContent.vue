<template>
    <div id="main-content-body">
        <div id="centered-content">
            <ScrollableContent/>
            <SideContent/>
        </div>
    </div>
</template>

<script>
    import ScrollableContent from "../home/ScrollableContent";
    import SideContent from "../home/SideContent";

    export default {
        name: "CenteredContent",
        components: {
            ScrollableContent,
            SideContent
        }
    }
</script>

<style scoped>
    @media (max-width: 1024px) {
        #centered-content {
            display: block;

            color: white;

            width: calc(100% - 40px);
            margin-left: 20px;
            margin-right: 20px;
        }


    }

    @media (min-width: 1024px) {
        #centered-content {
            display: flex;

            width: 100%;
        }

    }

    #main-content-body {
        justify-content: center;
        display: flex;
        box-sizing: border-box;
    }

    #centered-content {
        vertical-align: baseline;
        justify-content: center;

        color: white;
        margin-top: 20px;
    }
</style>
