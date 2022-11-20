<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import router from '../router'

import Heading from '../components/Heading.vue'

export default {
	setup() {
		const link = ref('')
		const host = 'http://localhost:5173'

		onMounted(() => {
			axios
				.get(
					`/links/url/${router.currentRoute.value.params.shorted_url}`,
				)
				.then((response) => {
					link.value = response.data
				})
		})

		const copyLink = () => {
			console.log(link.value)
		}

		return {
			host,
			link,
			shorted_url: router.currentRoute.value.params.shorted_url,
			copyLink,
		}
	},
	components: {
		Heading,
	},
}
</script>

<template>
	<div class="flex h-screen w-full items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-3">
			<Heading>Your link</Heading>
			<div class="flex flex-col items-center justify-center gap-3">
				<router-link
					:to="{
						name: 'Redirect',
						params: { shorted_url: shorted_url },
					}"
					class="cursor-pointer text-xl font-semibold tracking-wide text-slate-700 transition-all hover:text-blue-500"
				>
					{{ host }}/{{ shorted_url }}
				</router-link>

				<button
					class="transform rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-slate-800 focus:bg-slate-800 focus:outline-none"
					@click="copyLink"
				>
					Copy
				</button>
			</div>
		</div>
	</div>
</template>
