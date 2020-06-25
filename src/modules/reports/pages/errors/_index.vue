<template>
    <div>
        <router-link to="/reports">
            <el-button type="primary" icon="el-icon-s-data">Reports</el-button>
        </router-link>
        <mock-page>errors reports page</mock-page>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MockPage from '@shared/components/mock-page.vue';

@Component({ components: { MockPage } })
export default class ErrorsReports extends Vue {}
</script>

<style scoped lang="scss"></style>
