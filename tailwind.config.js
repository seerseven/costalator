// tailwind.config.js
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx,vue}', // Add your project paths here
	],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
};
