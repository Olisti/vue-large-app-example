<template>
    <div class="user-form">
        <el-form-item
            label="First name"
            prop="firstName"
            :rules="[{ required: true, message: 'Please input first name', trigger: 'blur' }]"
        >
            <el-input v-model="user.firstName"></el-input>
        </el-form-item>
        <el-form-item
            label="Last name"
            prop="lastName"
            :rules="[{ required: true, message: 'Please input last name', trigger: 'blur' }]"
        >
            <el-input v-model="user.lastName"></el-input>
        </el-form-item>
        <el-form-item
            label="Email"
            prop="email"
            :rules="[
                    { required: true, message: 'Please input email address', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                ]"
        >
            <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item
            label="Avatar url"
            prop="avatar"
            :rules="[
                    { required: true, message: 'Please input avatar url', trigger: 'blur' },
                    { type: 'url', message: 'Please input correct url address', trigger: ['blur', 'change'] }
                ]"
        >
            <el-input v-model="user.avatar"></el-input>
        </el-form-item>
        <el-form-item label="Gender" prop="gender">
            <el-radio-group v-model="user.gender">
                <el-radio label="Male"></el-radio>
                <el-radio label="Female"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item
            label="Job"
            prop="job"
            :rules="[{ required: true, message: 'Please input job', trigger: 'blur' }]"
        >
            <el-input v-model="user.job"></el-input>
        </el-form-item>
        <el-form-item
            label="Language"
            prop="language"
            :rules="[{ required: true, message: 'Please input language', trigger: 'blur' }]"
        >
            <el-input v-model="user.language"></el-input>
        </el-form-item>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { User } from '../../store/users';

@Component
export default class UserMaker extends Vue {
    @Prop() user!: User;
}
</script>

<style scoped lang="scss">
.user-form {
    max-width: 500px;
}
</style>
