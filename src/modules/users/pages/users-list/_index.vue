<template>
    <div>
        {{ users }}
        <router-link to="/users/create">UsersMaker</router-link><br />
        UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />UsersList<br />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import UserCard from './user-card.vue';
import { mapGetters } from 'vuex';

@Component({
    components: { UserCard },
    computed: {
        ...mapGetters({ users: 'users/USERS' })
    }
})
export default class UsersList extends Vue {
    mounted() {
        this.$store.dispatch('users/LIST');
    }
}
</script>

<style scoped lang="scss"></style>
