<template>
    <footer>©2020 Olisti</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppFooter extends Vue {}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
footer {
    padding: 10px 40px;
    font-size: 14px;
    color: $color-main-60;
    background-color: $color-background-secondary;
}
</style>
