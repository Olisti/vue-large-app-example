<template>
    <div>
        <div class="tools">
            <el-input
                class="tools__search"
                placeholder="Search"
                v-model="search"
                prefix-icon="el-icon-search"
                clearable
            ></el-input>
            <router-link to="/users/create">
                <el-button type="primary" icon="el-icon-plus">Create user</el-button>
            </router-link>
            <span style="flex: 1" />
            <users-statistics />
        </div>
        <div class="users">
            <user-card v-for="(user, index) in users" :key="index" :user="user" />
            <!-- TODO: empty data -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import UserCard from './user-card.vue';
import UsersStatistics from './users-statistics.vue';

@Component({
    components: { UserCard, UsersStatistics }
})
export default class UsersList extends Vue {
    search: string = '';

    get users() {
        return this.$store.getters['users/USERS'](this.search);
    }

    mounted() {
        this.$store.dispatch('users/LIST');
    }
}
</script>

<style scoped lang="scss">
.tools {
    display: flex;
    margin-bottom: 40px;
    & > *:not(:last-child) {
        margin-right: 20px;
    }
    &__search {
        max-width: 240px;
    }
}
.users {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 40px;
    row-gap: 20px;
}
</style>
