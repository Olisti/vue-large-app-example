<template>
    <div class="mock">
        <i class="mock__icon el-icon-receiving" />
        <div class="mock__title">Some data here</div>
        <div class="mock__text">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MockPage extends Vue {}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.mock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    &__icon {
        font-size: 250px;
        font-weight: 600;
        color: $color-main-60;
    }
    &__title {
        font-size: 36px;
        color: $color-main-40;
    }
    &__text {
        margin-top: 10px;
        color: $color-main-20;
    }
}
</style>
