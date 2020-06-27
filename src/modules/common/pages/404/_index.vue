<template>
    <div class="error">
        <div class="error__title">404</div>
        <div class="error__text">Page not found</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    &__title {
        font-size: 200px;
        font-weight: 600;
        color: $color-main-60;
    }
    &__text {
        font-size: 48px;
        color: $color-main-20;
    }
}
</style>
