<template>
    <div id="app" class="app" :class="[isDarkTheme ? 'dark-theme': 'light-theme']">
        <app-sidenav v-if="!isPublicPage"></app-sidenav>
        <div class="app__content">
            <app-header v-if="!isPublicPage" :isDarkTheme="isDarkTheme" @switchTheme="switchTheme"></app-header>
            <div class="app__router">
                <router-view />
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AppSidenav from './components/app-sidenav.vue';
import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
import { mapGetters, mapMutations } from 'vuex';

@Component({
    components: { AppSidenav, AppHeader, AppFooter },
    computed: { ...mapGetters({ isDarkTheme: 'layout/DARK_THEME' }) },
    methods: { ...mapMutations({ switchTheme: 'layout/SWITCH_DARK_THEME' }) }
})
export default class App extends Vue {
    get isPublicPage(): boolean {
        return !!this.$route.meta.isPublic;
    }
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.app {
    height: 100%;
    display: flex;
    &__content {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
        background-color: $color-background-secondary;
    }
    &__router {
        flex: 1;
        padding: 30px 40px;
    }
}
</style>
