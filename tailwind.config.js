/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	// add daisyUI plugin
	plugins: [require('daisyui'), require('tailwind-scrollbar')({ nocompatible: true })],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#1D2B53',
					secondary: '#F6D776',
					neutral: '#1D2B53',
					accent: '#F6D776'
				}
			},

			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#F6D776',
					secondary: '#1D2B53',
					neutral: '#1D2B53',
					accent: '#F6D776'
				}
			}
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: 'dark', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root' // The element that receives theme color CSS variables
	}
};
