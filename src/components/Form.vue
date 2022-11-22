<script>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import router from '../router'
import Input from './Input.vue'
import Button from './Button.vue'
import Checkbox from './Checkbox.vue'

export default {
	setup() {
		const customLink = ref(false)
		const form = reactive({
			shorted_url: '',
			original_url: '',
		})

		onMounted(() => {
			axios.get('/').then((response) => {
				console.log(response.data)
			})
		})

		const submitForm = async () => {
			await axios
				.post('/', {
					shorted_url: customLink.value
						? form.shorted_url
						: randString(),
					original_url: form.original_url,
				})
				.then((response) => {
					console.log(response.data)
					router.push({
						name: 'Result',
						params: { shorted_url: response.data.shorted_url },
					})
				})
		}

		const randString = (length = 5) => {
			let result = ''
			const characters =
				'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
			const charactersLength = characters.length
			for (let i = 0; i < length; i++) {
				result += characters.charAt(
					Math.floor(Math.random() * charactersLength),
				)
			}
			return result
		}

		return {
			customLink,
			form,
			submitForm,
		}
	},
	components: {
		Input,
		Button,
		Checkbox,
	},
}
</script>

<template>
	<form
		class="w-full space-y-4 transition-all delay-200"
		@submit.prevent="submitForm"
	>
		<div class="flex w-full items-center justify-center gap-3">
			<Input
				class="w-1/2 rounded"
				placeholder="insert your long url here"
				v-model="form.original_url"
				type="url"
			/>
			<Button class="bg-slate-800">Shorten!</Button>
		</div>
		<Checkbox label="custom link" v-model:checked="customLink" />

		<div v-if="customLink">
			<div class="flex w-full items-center justify-center gap-3">
				<div class="flex rounded">
					<div
						class="rounded-l bg-white p-3 text-sm text-slate-600 shadow"
					>
						gotoo.vercel.app/
					</div>
					<Input
						class="w-1/2 rounded-r"
						placeholder="custom link"
						v-model="form.shorted_url"
					/>
				</div>
			</div>
		</div>
	</form>
</template>
