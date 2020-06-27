<template>
    <auth-card title="Recovery">
        <el-form
            :model="form"
            :rules="rules"
            ref="form"
            label-width="120px"
            label-position="top"
            :hide-required-asterisk="true"
        >
            <el-form-item label="Email" prop="email">
                <el-input v-model="form.email" type="text"></el-input>
            </el-form-item>
            <el-button class="auth__submit" type="primary" @click="submitForm()">Get new password</el-button>
            <div class="auth__links">
                <router-link to="/login" class="ol-link">Back to login</router-link>
            </div>
        </el-form>
    </auth-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ElForm } from 'element-ui/types/form';
import AuthCard from '@auth/components/auth-card.vue';

@Component({
    components: { AuthCard }
})
export default class Recovery extends Vue {
    form = {
        email: ''
    };
    rules = {
        email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ]
    };

    submitForm() {
        (this.$refs['form'] as ElForm).validate((valid: boolean) => {
            if (valid) console.log('Recovery');
            else return false;
        });
    }
}
</script>

<style scoped lang="scss"></style>
