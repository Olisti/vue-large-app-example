<template>
    <div>
        EmailsList
        {{emails}}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
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
