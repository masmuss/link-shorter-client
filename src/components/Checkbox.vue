<script setup>
import { defineProps } from 'vue'

defineProps({
	label: {
		type: String,
		default: '',
	},
	checked: {
		type: Boolean
	}
})
</script>

<template>
	<div class="flex justify-center">
		<div class="form-check form-switch">
			<input
				@input="(event) => $emit('update:checked', event.target.checked)"
				class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
				:checked="checked"
			/>
			<label
				class="form-check-label inline-block text-gray-800"
				for="flexSwitchCheckDefault"
			>
				{{ label }}
			</label>
		</div>
	</div>
</template>
