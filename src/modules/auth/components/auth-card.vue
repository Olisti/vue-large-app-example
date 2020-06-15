<template>
    <div class="auth">
        <el-card class="auth__card" shadow="always">
            <h2 class="auth__title">{{title}}</h2>
            <div class="auth__content">
                <slot />
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AuthCard extends Vue {
    @Prop() title!: string;
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    &__card {
        width: 400px;
    }
    &__title {
        width: 100%;
        margin-top: 0;
        text-align: center;
        color: $color-main-20;
    }
}
</style>
