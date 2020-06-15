<template>
    <auth-card title="Register">
        <router-link to="/login">back to login</router-link>
    </auth-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthCard from '@auth/components/auth-card.vue';

@Component({
    components: { AuthCard }
})
export default class Register extends Vue {}
</script>

<style scoped lang="scss"></style>
