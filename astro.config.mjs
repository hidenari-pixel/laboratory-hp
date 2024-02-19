import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import * as dotenv from "dotenv";
dotenv.config();

import react from "@astrojs/react";

// https://astro.build/config
console.log(process.env.SITE_URL, process.env.APP_ENV);
export default defineConfig(
	process.env.APP_ENV === "prod"
		? {
				base: process.env.BASE_PATH,
				trailingSlash: "never",
				integrations: [tailwind(), react()],
				experimental: {
					viewTransitions: true,
				},
				site: process.env.SITE_URL,
				output: "static",
				build: {
					assetsPrefix: process.env.SITE_URL,
				},
		  }
		: {
				integrations: [tailwind(), react()],
				experimental: {
					viewTransitions: true,
				},
		  },
);
