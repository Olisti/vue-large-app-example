<template>
    <div>
        SmsList
        {{sms}}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapGetters({ sms: 'sms/SMS' })
    }
})
export default class SmsList extends Vue {
    mounted() {
        this.$store.dispatch('sms/LIST');
    }
}
</script>

<style scoped lang="scss"></style>
