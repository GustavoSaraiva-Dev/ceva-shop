const colors = require("tailwindcss/colors");
module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		colors: {
			...colors,
			...{
				plantGreen: {
					50: "#62bd69",
					100: "#5aab61",
				},
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
