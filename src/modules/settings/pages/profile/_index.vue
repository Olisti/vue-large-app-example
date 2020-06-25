<template>
    <mock-page>profile settings page</mock-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MockPage from '@shared/components/mock-page.vue';

@Component({ components: { MockPage } })
export default class Profile extends Vue {}
</script>

<style scoped lang="scss"></style>
