<template>
    <el-form
        class="maker"
        ref="makerForm"
        label-width="120px"
        :model="user"
        :hide-required-asterisk="true"
    >
        <user-form :user="user" />
        <el-form-item class="maker__submit">
            <el-button type="primary" @click="submit" :loading="loading">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { User } from '../../store/users';
import { ElForm } from 'element-ui/types/form';
import UserForm from './user-form.vue';

@Component({
    components: { UserForm },
    computed: {
        ...mapGetters({ loading: 'users/LOADING' })
    }
})
export default class UserMaker extends Vue {
    user: Partial<User> = {
        firstName: 'sdf',
        lastName: 'sfd',
        email: 'sdfsfd@dfssdf.sdf',
        avatar: 'https://robohash.org/quoetsoluta.jpg?size=100x100&set=set1',
        gender: 'Male',
        job: 'sdf',
        language: 'sfd'
    };

    async submit() {
        (this.$refs['makerForm'] as ElForm).validate(async (valid: boolean) => {
            if (valid) {
                await this.$store.dispatch('users/CREATE', this.user);
                this.$router.push({
                    name: 'users-list'
                });
            } else return false;
        });
    }
}
</script>

<style scoped lang="scss">
.maker {
    &__submit {
        margin-top: 40px;
    }
}
</style>
