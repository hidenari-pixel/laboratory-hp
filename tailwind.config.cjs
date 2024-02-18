/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			height: {
				100: "400px",
			},
		},
		fontFamily: {
			apple: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
		},
		keyframes: {
			"infinity-scroll-left": {
				from: {
					transform: "translateX(0)",
				},
				to: {
					transform: "translateX(-100%)",
				},
			},
			"fade-in-bottom": {
				"0%": {
					transform: "translateY(50px)",
					opacity: "0",
				},
				to: {
					transform: "translateY(0)",
					opacity: "1",
				},
			},
		},
		animation: {
			"infinity-scroll-left":
				"infinity-scroll-left 60s infinite linear 0.5s both",
			"infinity-scroll-left-delay":
				"infinity-scroll-left 180s infinite linear 0.5s both",
			"fade-in-bottom": "fade-in-bottom 1.0s ease-out both",
		},
	},
	plugins: [],
};
