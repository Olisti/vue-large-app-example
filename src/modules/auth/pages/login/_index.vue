<template>
    <div>
        Login
        <br />
        <router-link to="/">Login</router-link>
        <br />
        <router-link to="/recovery">recovery</router-link>
        <br />
        <router-link to="/register">register</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {}
</script>

<style scoped lang="scss"></style>
