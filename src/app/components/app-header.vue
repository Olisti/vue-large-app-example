<template>
    <header>
        <span>{{ navigation }}</span>
        <span style="flex: 1" />
        <router-link to="/login" class="logout ol-link">logout</router-link>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
    get navigation() {
        return this.$route.meta.title;
    }
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    min-height: 56px;
    max-height: 56px;
    padding: 0 40px;
    background-color: $color-background-main;
    border-bottom: 1px solid $color-main-80;
}
.logout {
    color: $color-main;
}
</style>
