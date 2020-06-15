<template>
    <auth-card title="Login">
        <router-link to="/">Login</router-link>
        <br />
        <router-link to="/recovery">recovery</router-link>
        <br />
        <router-link to="/register">register</router-link>
    </auth-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthCard from '@auth/components/auth-card.vue';

@Component({
    components: { AuthCard }
})
export default class Login extends Vue {}
</script>

<style scoped lang="scss"></style>