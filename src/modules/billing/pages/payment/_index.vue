<template>
    <div>
        <router-link to="/billing">
            <el-button type="primary" icon="el-icon-s-finance">Billing</el-button>
        </router-link>
        <mock-page>payment page</mock-page>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MockPage from '@shared/components/mock-page.vue';

@Component({ components: { MockPage } })
export default class Payment extends Vue {}
</script>

<style scoped lang="scss"></style>
