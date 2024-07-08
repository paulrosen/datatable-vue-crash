<script setup lang="ts">
</script>

<template>
  <main>
    <TranslateString str="test" />
    <DataTableWrapper :columns="columns" :rows="rows" />
  </main>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ref, reactive, computed, onMounted } from 'vue'
import TranslateString from "../components/TranslateString.vue"
import DataTableWrapper from "../components/DataTableWrapper.vue"

const columns = computed(() => {
	return [
		{
			label: "First",
			field: 'first',
		},
		{
			label: "Second",
			field: 'second',
		},
		{
			label: "Translate",
			field: 'translate',
			style: 'translate', // comment this out to get rid of the error
		},
	]
})

const rows = computed(() => {
  return [
    { first: "When", second: "In", translate: "the course"},
    { first: "of", second: "Human", translate: "events"}
  ]
})

</script>
