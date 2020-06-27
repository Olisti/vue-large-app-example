<template>
    <header>
        <span>{{ navigation }}</span>
        <span style="flex: 1" />
        <router-link to="/login" class="logout ol-link">
            <i class="el-icon-switch-button" />&nbsp;
            <span>Logout</span>
        </router-link>
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
    background: $color-background-main;
    background: linear-gradient(180deg, rgba($color-background-main, 96) 0%, rgba($color-background-main, 0.84) 100%);
    border-bottom: 1px solid $color-main-70;
    cursor: default;
    z-index: 1000;
}
.logout {
    color: $color-main;
    word-wrap: none;
    &:hover {
        text-decoration: none;
        & span {
            text-decoration: underline;
        }
    }
}
</style>
