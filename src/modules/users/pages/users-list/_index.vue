<template>
    <div>
            <users-statistics />
        </div>
        <div class="users">
            <user-card v-for="(user, index) in users" :key="index" :user="user" />
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
    mounted() {
        this.$store.dispatch('users/LIST');
    }
}
</script>

<style scoped lang="scss">
.users {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 40px;
    row-gap: 20px;
}
</style>
