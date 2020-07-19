<template>
    <auth-card title="Register">
        <el-form
            :model="form"
            :rules="rules"
            ref="form"
            label-width="120px"
            label-position="top"
            :hide-required-asterisk="true"
        >
            <el-form-item label="Username" prop="username">
                <el-input v-model="form.username" type="text"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input v-model="form.email" type="text"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="form.password" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-button
                class="auth__submit"
                type="primary"
                :loading="loading"
                @click="submitForm()"
            >Register</el-button>
            <div class="auth__links">
                <router-link to="/login" class="ol-link">Back to login</router-link>
            </div>
        </el-form>
    </auth-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { ElForm } from 'element-ui/types/form';
import AuthCard from '@auth/components/auth-card.vue';

@Component({
    components: { AuthCard },
    computed: {
        ...mapGetters({ loading: 'auth/LOADING' })
    }
})
export default class Register extends Vue {
    form = {
        username: '',
        email: '',
        password: ''
    };
    rules = {
        username: [
            { required: true, message: 'Please input username', trigger: 'blur' },
            { min: 4, max: 20, message: 'Length should be 4 to 20', trigger: 'blur' }
        ],
        email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        password: [{ required: true, message: 'Please input password', trigger: 'change' }]
    };

    submitForm() {
        (this.$refs['form'] as ElForm).validate((valid: boolean) => {
            if (valid) this.$store.dispatch('auth/REGISTER', this.form);
            else return false;
        });
    }
}
</script>

<style scoped lang="scss"></style>
