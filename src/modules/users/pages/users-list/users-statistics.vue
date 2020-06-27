<template>
    <div class="statistics">
        <div class="statistics__item">
            <el-progress type="circle" :percentage="statistics.emails"></el-progress>
            <div class="statistics__title">Emails</div>
        </div>
        <div class="statistics__item">
            <el-progress type="circle" :percentage="statistics.pushes"></el-progress>
            <div class="statistics__title">Push subscriptions</div>
        </div>
        <div class="statistics__item">
            <el-progress type="circle" :percentage="statistics.phones"></el-progress>
            <div class="statistics__title">Phones</div>
        </div>
    </div>
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
    mounted() {
        this.$store.dispatch('usersStatistics/GET');
    }
}
</script>

<style scoped lang="scss">
.statistics {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
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
