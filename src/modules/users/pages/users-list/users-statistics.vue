<template>
    <el-popover
        placement="bottom"
        title="Statistics"
        width="500"
        trigger="hover"
        @after-enter="visible = true"
        @after-leave="visible = false"
    >
        <div class="statistics">
            <div class="statistics__item">
                <el-progress type="circle" :percentage="visible ? statistics.emails : 0"></el-progress>
                <div class="statistics__title">Emails</div>
            </div>
            <div class="statistics__item">
                <el-progress type="circle" :percentage="visible ? statistics.pushes : 0"></el-progress>
                <div class="statistics__title">Push subscriptions</div>
            </div>
            <div class="statistics__item">
                <el-progress type="circle" :percentage="visible ? statistics.phones : 0"></el-progress>
                <div class="statistics__title">Phones</div>
            </div>
        </div>
        <el-button slot="reference">See some statistics</el-button>
    </el-popover>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapGetters({ statistics: 'usersStatistics/STATISTICS' })
    }
})
export default class UserStatistics extends Vue {
    visible = false;
    mounted() {
        this.$store.dispatch('usersStatistics/GET');
    }
}
</script>

<style scoped lang="scss">
.statistics {
    display: flex;
    justify-content: center;
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;
    }
    &__title {
        margin-top: 10px;
    }
}
</style>

<style  lang="scss">
@import '~@/styles/variables';
.statistics .el-progress-circle__path {
    stroke: $color-secondary;
}
</style>
