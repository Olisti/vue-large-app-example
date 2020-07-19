<template>
    <div class="tools">
        <router-link :to="`/users/edit/${id}`">
            <el-button icon="el-icon-edit-outline">Edit</el-button>
        </router-link>
        <el-popconfirm
            title="Are you sure to delete this user?"
            confirmButtonText="Yes"
            cancelButtonText="No"
            @onConfirm="$emit('deleteUser', id)"
        >
            <el-button :loading="loading" slot="reference" icon="el-icon-delete">Delete</el-button>
        </el-popconfirm>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { User } from '../../store/users';

@Component
export default class UserInfoTools extends Vue {
    @Prop() id!: number;
    @Prop() loading!: boolean;
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.tools {
    & > *:not(:last-child) {
        margin-right: 20px;
    }
}
</style>
