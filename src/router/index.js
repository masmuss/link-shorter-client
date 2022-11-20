import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: App,
		children: [
			{
				path: '/',
				name: 'Home',
				component: () => import('../views/Home.vue'),
			},
			{
				path: '/:shorted_url',
				name: 'Redirect',
				component: () => import('../views/Redirect.vue'),
			},
			{
				path: '/result/:shorted_url',
				name: 'Result',
				component: () => import('../views/Result.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
