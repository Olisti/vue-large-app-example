  <template>
    <el-table :data="data" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="Name" sortable></el-table-column>
        <el-table-column prop="send" label="Sent" width="150"></el-table-column>
        <el-table-column prop="errors" label="Errors" width="150"></el-table-column>
        <el-table-column prop="date" label="Date" width="120"></el-table-column>
    </el-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Email } from '../../store/emails';

@Component
export default class EmailsTable extends Vue {
    @Prop() data!: Email[];
}
</script>

<style scoped lang="scss"></style>
