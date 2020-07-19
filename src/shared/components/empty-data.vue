<template>
    <div class="empty-data" v-loading="loading">
        <template v-if="!loading">
            <i class="empty-data__icon el-icon-receiving" />
            <div class="empty-data__title">{{title}}</div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class EmptyData extends Vue {
    @Prop({ default: 'Data not found' }) title!: string;
    @Prop({ default: false }) loading!: boolean;
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.empty-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    margin-top: 200px;
    &__icon {
        font-size: 100px;
        font-weight: 600;
        color: $color-main-50;
    }
    &__title {
        font-size: 24px;
        color: $color-main-30;
    }
}
</style>
