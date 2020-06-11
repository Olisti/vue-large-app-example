<template>
    <div class="sidenav">
        <el-menu class="sidenav__menu" :collapse="isCollapsed" :router="true" @select="handleSelect">
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">Home page</span>
            </el-menu-item>
            <el-menu-item index="/users/list">
                <i class="el-icon-user-solid"></i>
                <span slot="title">Users</span>
            </el-menu-item>
            <el-submenu index="/messages">
                <template slot="title">
                    <i class="el-icon-s-promotion"></i>
                    <span slot="title">Messages</span>
                </template>
                <el-menu-item index="/messages/email">Email</el-menu-item>
                <el-menu-item index="/messages/push">Push</el-menu-item>
                <el-menu-item index="/messages/sms">SMS</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="/segments/list">
                <i class="el-icon-s-management"></i>
                <span slot="title">Segments</span>
            </el-menu-item> -->
            <el-menu-item index="/reports">
                <i class="el-icon-s-data"></i>
                <span slot="title">Reports</span>
            </el-menu-item>
            <el-menu-item index="/billing">
                <i class="el-icon-s-finance"></i>
                <span slot="title">Billing</span>
            </el-menu-item>
            <el-submenu index="/settings">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span slot="title">Settings</span>
                </template>
                <el-menu-item index="/settings/account">Account</el-menu-item>
                <el-menu-item index="/settings/profile">Profile</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-button
            class="sidenav__collapse"
            :class="{ open: !isCollapsed }"
            icon="el-icon-arrow-right"
            @click="changeState()"
        ></el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapMutations } from 'vuex';

@Component({
    computed: {
        ...mapGetters({ isCollapsed: 'layout/SIDENAV_COLLAPSED' })
    },
    methods: {
        ...mapMutations({ changeState: 'layout/SWITCH_SIDENAV_STATE' })
    }
})
export default class AppSidenav extends Vue {
    handleSelect(path: string, keyPath: string[]) {
        // if (path == '1') return;
        // this.$router.push({ path });
        // console.log(key, keyPath);
    }
}
</script>

<style scoped lang="scss">
.sidenav {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    &__menu {
        height: 100%;
        &:not(.el-menu--collapse) {
            width: 200px;
        }
    }
    &__collapse {
        position: absolute;
        bottom: 0;
        right: 1px;
        width: 100%;
        height: 50px;
        font-size: 18px;
        border: none;
        border-radius: 0;
        &:focus:not(:hover) {
            background-color: transparent;
        }
    }
}
</style>
<style lang="scss">
.sidenav__collapse {
    & i {
        transition: transform 300ms ease-in-out;
    }
    &.open i {
        transform: rotate(180deg);
    }
}
</style>
