<template>
    <div>
        <sms-table :data="sms" :loading="loading" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import SmsTable from './sms-table.vue';

@Component({
    components: { SmsTable },
    computed: {
        ...mapGetters({
            sms: 'sms/SMS',
            loading: 'sms/LOADING'
        })
    }
})
export default class SmsList extends Vue {
    mounted() {
        this.$store.dispatch('sms/LIST');
    }
}
</script>

<style scoped lang="scss"></style>
