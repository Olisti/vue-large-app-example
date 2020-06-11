<template>
    <div>
        UserMaker
        <br />
        <router-link to="/users/list">Вернуться к UserList</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserMaker extends Vue {}
</script>

<style scoped lang="scss"></style>
