/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Ubuntu', fontFamily.sans],
				mono: ['Ubuntu Mono', fontFamily.mono],
			},
		},
	},
	plugins: [
		require('tw-elements/dist/plugin'),
		require('prettier-plugin-tailwindcss'),
	],
}
