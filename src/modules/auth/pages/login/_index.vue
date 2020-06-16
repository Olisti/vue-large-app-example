<template>
    <auth-card title="Login">
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
            <el-form-item label="Password" prop="password">
                <el-input v-model="form.password" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-button class="auth__submit" type="primary" :loading="loading" @click="submitForm()">Login</el-button>
            <div class="auth__links">
                <router-link to="/register" class="ol-link">Register</router-link>
                <router-link to="/recovery" class="ol-link">Forgot password?</router-link>
            </div>
        </el-form>
    </auth-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ElForm } from 'element-ui/types/form';
import AuthCard from '@auth/components/auth-card.vue';
import { mapGetters } from 'vuex';

@Component({
    components: { AuthCard },
    computed: {
        ...mapGetters({ loading: 'auth/LOADING' })
    }
})
export default class Login extends Vue {
    form = {
        username: '',
        password: ''
    };
    rules = {
        username: [
            { required: true, message: 'Please input username', trigger: 'blur' },
            { min: 4, max: 20, message: 'Length should be 4 to 20', trigger: 'blur' }
        ],
        password: [{ required: true, message: 'Please input password', trigger: 'change' }]
    };

    mounted() {
        this.$store.dispatch('auth/LOGOUT');
    }

    submitForm() {
        (this.$refs['form'] as ElForm).validate((valid: boolean) => {
            if (valid) this.$store.dispatch('auth/LOGIN', this.form);
            else return false;
        });
    }
}
</script>

<style scoped lang="scss"></style>
