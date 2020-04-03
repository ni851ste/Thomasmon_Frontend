<template>
    <div id="side-content">
        <div class="side-content-block">
            <iframe allowfullscreen="true"
                    frameborder="<frameborder>"
                    id="twitch-embed" scrolling="false"
                    src="https://player.twitch.tv/?channel=jaronthekid&amp;parent=streamernews.example.com"
                    style="width: 307px; height: 174px;"></iframe>
            <p>This is the side content</p>
            <p>
                <button class="own-button-big" id="add-chr-btn" type="button">ADD CHRISHURT</button>
            </p>
            <img alt="Chrishi" src="/assets/images/chrischi_gobnik.png"></div>
    </div>
</template>

<script>
    export default {
        name: "SideContent"
    }
</script>

<style scoped>
    @media (max-width: 1024px) {
        #side-content {
            display: flex;
            vertical-align: baseline;

            width: 100%;
        }
    }

    @media (min-width: 1024px) {
        #side-content {
            vertical-align: baseline;
            width: 312px;

            margin-left: 24px;
        }
    }

        .side-content-block {
            border: 2px solid white;
            border-radius: 8px;

            margin-bottom: 16px;
        }

        .side-content-block {
            text-align: center;
        }

        .side-content-block:hover {
            background-color: #2B2B2B;
        }

        #twitch-embed {
            border-radius: 5px;
        }
</style>
