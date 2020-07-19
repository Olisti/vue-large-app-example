<template>
    <div class="user-info">
        <img class="user-info__avatar" :src="getQualityImage(user.avatar)" alt="avatar" />
        <div class="user-info__info">
            <div class="user-info__title">User Info</div>
            <info-form :user="user" />
            <span style="flex: 1" />
            <info-tools :id="id" :loading="loading" @deleteUser="deleteUser" />
        </div>
        <router-link to="/users/list">
            <el-button type="info" icon="el-icon-back">Back to users list</el-button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InfoForm from './info-form.vue';
import InfoTools from './info-tools.vue';
import { mapGetters } from 'vuex';

@Component({
    components: { InfoForm, InfoTools },
    computed: { ...mapGetters({ loading: 'users/LOADING' }) }
})
export default class UserInfo extends Vue {
    get id() {
        return +this.$route.params?.id || 0;
    }
    get user() {
        return this.$store.getters['users/USER'](this.id) || {};
    }
    mounted() {
        this.$store.dispatch('users/GET', this.id);
        // this.$store.dispatch('users/LIST');
    }
    getQualityImage(imageUrl: string) {
        return imageUrl?.replace('size=100x100', 'size=300x300');
    }
    async deleteUser(id: number) {
        await this.$store.dispatch('users/DELETE', id);
        this.$router.push({ path: `/users/list` });
    }
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
@import '~@/styles/elements-ui';
.user-info {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: auto 1fr;
    &__avatar {
        min-width: 342px;
        min-height: 342px;
        padding: 20px;
        background-color: $color-background-main;
        border-radius: 50%;
        border: 1px solid $--border-color-lighter;
    }
    &__info {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        padding: 20px;
        border-radius: 6px;
        background-color: $color-background-main;
        border: 1px solid $--border-color-lighter;
    }
    &__title {
        text-transform: uppercase;
        color: $color-main-50;
        margin-bottom: 30px;
    }
}
</style>
