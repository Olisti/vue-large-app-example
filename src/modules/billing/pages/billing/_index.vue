<template>
    <div>
        <router-link to="/payment">
            <el-button type="primary" icon="el-icon-bank-card">Payment</el-button>
        </router-link>
        <mock-page>billing page</mock-page>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MockPage from '@shared/components/mock-page.vue';

@Component({ components: { MockPage } })
export default class Billing extends Vue {}
</script>

<style scoped lang="scss"></style>
