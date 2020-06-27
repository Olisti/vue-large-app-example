<template>
    <div>
        <emails-table :data="emails" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import EmailsTable from './emails-table.vue';

@Component({
    components: { EmailsTable },
    computed: {
        ...mapGetters({ emails: 'emails/EMAILS' })
    }
})
export default class EmailsList extends Vue {
    mounted() {
        this.$store.dispatch('emails/LIST');
    }
}
</script>

<style scoped lang="scss"></style>
