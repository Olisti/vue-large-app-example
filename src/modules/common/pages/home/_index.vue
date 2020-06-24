<template>
    <div class="home">
        <span class="home__title">vue-large-app-example</span>
        <a
            class="home__link ol-link"
            href="https://github.com/Olisti/vue-large-app-example"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img class="home__logo" src="@/assets/github-logo.png" alt="GitHub logo" />
            <span class="home__text">to GitHub Repository</span>
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
        text-transform: uppercase;
        color: $color-main-20;
    }
    &__link {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__logo {
        height: 150px;
        max-width: 150px;
    }
}
</style>
