/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				poppinsLight: ['poppinsLight', 'sans-serif'],
				poppinsRegular: ['poppinsRegular', 'sans-serif'],
				poppinsMedium: ['poppinsMedium', 'sans-serif'],
				poppinsSemiBold: ['poppinsSemiBold', 'sans-serif'],
				poppinsBold: ['poppinsMedium', 'sans-serif']
			}
		}
	},
	plugins: []
};
