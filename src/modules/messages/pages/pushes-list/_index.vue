<template>
    <div>
        PushesList
        {{pushes}}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapGetters({ pushes: 'pushes/PUSHES' })
    }
})
export default class PushesList extends Vue {
    mounted() {
        this.$store.dispatch('pushes/LIST');
    }
}
</script>

<style scoped lang="scss"></style>
