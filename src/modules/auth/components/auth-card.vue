<template>
    <div class="auth">
        <el-card class="auth__card" shadow="always">
            <h2 class="auth__title">{{ title }}</h2>
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
        width: 320px;
    }
    &__title {
        width: 100%;
        margin: 5px 0;
        text-align: center;
        color: $color-main-20;
    }
    &__content {
        margin: 0 10px;
    }
}
</style>
<style lang="scss">
.auth {
    &__submit {
        width: 100%;
        margin: 10px 0;
    }
    &__links {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        font-size: 14px;
    }
}
</style>
