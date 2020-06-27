<template>
    <div>
        <router-link to="/reports/errors">
            <el-button type="primary" icon="el-icon-warning-outline">Errors</el-button>
        </router-link>
        <mock-page>reports page</mock-page>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MockPage from '@shared/components/mock-page.vue';

@Component({ components: { MockPage } })
export default class Reports extends Vue {}
</script>

<style scoped lang="scss"></style>
