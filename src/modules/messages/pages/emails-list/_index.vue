<template>
    <div>
        <emails-table :data="emails" :loading="loading" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import EmailsTable from './emails-table.vue';

@Component({
    components: { EmailsTable },
    computed: {
        ...mapGetters({
            emails: 'emails/EMAILS',
            loading: 'emails/LOADING'
        })
    }
})
export default class EmailsList extends Vue {
    mounted() {
        this.$store.dispatch('emails/LIST');
    }
}
</script>

<style scoped lang="scss"></style>
