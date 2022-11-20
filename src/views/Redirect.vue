<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import router from '../router'

import Heading from '../components/Heading.vue'

export default {
	setup() {
		const link = ref('')

		onMounted(() => {
			axios
				.get(
					`/links/url/${router.currentRoute.value.params.shorted_url}`,
				)
				.then((response) => {
					link.value = response.data
					setTimeout(() => {
						redirectTo(response.data.original_url)
					}, 1500)
				})
		})

		const redirectTo = (uri) => {
			window
				.fetch(uri)
				.then((response) => {
					if (response.status === 200) {
						window.location.href = uri
					}
				})
				.catch((error) => {
					console.log(error)
				})
		}
	},
	components: {
		Heading,
	},
}
</script>

<template>
	<div class="flex h-screen w-full items-center justify-center">
		<Heading>
			<span class="animate-pulse">Redirecting...</span>
		</Heading>
	</div>
</template>
