<script setup>
defineProps({
	type: {
		type: String,
		default: 'button',
	},
	class: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<button
		class="rounded px-6 py-3 font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-600"
		:class="class"
	>
		<slot />
	</button>
</template>
