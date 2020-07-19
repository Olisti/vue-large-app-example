<template>
    <router-link class="user" :to="'/users/info/'+user.id">
        <img class="user__avatar" :src="user.avatar" alt="avatar" />
        <div class="user__content">
            <div class="user__id">{{ user.id }}</div>
            <div class="user__name">{{ user.firstName }} {{ user.lastName }}</div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { User } from '../../store/users';

@Component
export default class UserCard extends Vue {
    @Prop() user!: User;
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
@import '~@/styles/elements-ui';
.user {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: filter 200ms ease-in-out;
    &__avatar {
        height: 100px;
        max-width: 100px;
        border-radius: 50%;
        filter: grayscale(0.6);
        z-index: 10;
        transition: filter 200ms ease-in-out;
    }
    &__content {
        display: flex;
        width: 100%;
        margin-top: -20px;
        padding: 40px 20px 20px;
        border-radius: 6px;
        background-color: $color-background-main;
        border: 1px solid $--border-color-lighter;
    }
    &__id {
        margin-right: 10px;
        color: $color-main-60;
    }
    &__name {
        color: $color-main;
    }
    &:hover {
        filter: drop-shadow(0 0 3px rgba($color-main, 0.05));
        & .user__avatar {
            filter: grayscale(0);
            cursor: pointer;
        }
    }
}
</style>
