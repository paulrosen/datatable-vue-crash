<template>
	<span>{{ t(str) }}</span>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'

const instance = getCurrentInstance()
console.log(instance && instance.appContext ? instance.appContext.app : 'instance not started')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { t } = useI18n({ useScope: 'global' })

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
	str: string;
}>()

</script>