<template>
    <header>
        <span>Navigation</span>
        <span style="flex: 1" />
        <router-link to="/login">login</router-link>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {}
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
</style>
