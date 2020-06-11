<template>
    <div>
        Register
        <br />
        <router-link to="/login">back to login</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {}
</script>

<style scoped lang="scss"></style>
