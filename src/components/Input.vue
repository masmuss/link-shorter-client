<script setup>
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	class: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<input
		type="text"
		class="bg-white p-3 text-slate-600 placeholder-slate-400 shadow transition-all duration-150 ease-linear focus:outline-slate-400"
		:class="class"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		v-bind="$attrs"
	/>
</template>
