<template>
	<div>
		<DataTable :columns="columnOptions" :data="rows" :options="options">
			<thead>
				<tr>
					<th v-for="column in columns" :key="column.field">{{ column.label }}</th>
				</tr>
			</thead>
			<template #translate="props">
				<TranslateString :str="props.cellData"/>
			</template>
		</DataTable>
	</div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ref, reactive, computed, onMounted, watch, getCurrentInstance } from 'vue'
import DataTablesLib from 'datatables.net';
import DataTable from 'datatables.net-vue3';
import 'datatables.net-select';
import TranslateString from './TranslateString.vue';

DataTable.use(DataTablesLib);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
	columns: Array<any>;
	rows: Array<any>;
}>()

const instance = getCurrentInstance()
console.log(instance && instance.appContext ? instance.appContext.app : 'instance not started')

const options = {
}

const columnOptions = computed(() => {
	return props.columns.map(col => {
		let style = col.style ? '#' + col.style : undefined
		return {
			render: style,
			data: col.field,
			defaultContent: '',
		}
	})
})

</script>

<style>
@import 'datatables.net-dt';

</style>
