<template>
    <div class="user-form">
        <div class="param">
            <div class="param__name">Name</div>
            <div class="param__value">{{user.firstName}} {{user.lastName}}</div>
        </div>
        <div class="param">
            <div class="param__name">Email</div>
            <div class="param__value">{{user.email}}</div>
        </div>
        <div class="param">
            <div class="param__name">Job</div>
            <div class="param__value">{{user.job}}</div>
        </div>
        <div class="param">
            <div class="param__name">Language</div>
            <div class="param__value">{{user.language}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { User } from '../../store/users';

@Component
export default class UserInfoForm extends Vue {
    @Prop() user!: User;
    params = [{ name: '', key: '' }];
    // Name
    // Email
    // Job
    // Language
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.param {
    display: flex;
    margin-bottom: 30px;
    &__name {
        width: 30%;
        min-width: 80px;
    }
    &__value {
        flex: 1;
    }
}
</style>
