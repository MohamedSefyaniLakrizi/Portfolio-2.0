import path from "path";
import confirmdialog from "./presets/lara/confirmdialog";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.NUXT_MAIL_TARGET,
        },
        smtp: {
          host: process.env.NUXT_MAIL_SMPT,
          port: process.env.NUXT_MAIL_PORT,
          secure: true,
          auth: {
            user: process.env.NUXT_MAIL_USERNAME,
            pass: process.env.NUXT_MAIL_PASSWORD,
          },
        },
      },
    ],
  ],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, "./presets/lara/") }, //import and apply preset
  },
  tailwindcss: {
    config: {
      darkMode: "class", // This enables dark mode based on the presence of the "dark" class in the HTML tag
      content: [
        "presets/**/*.{js,vue,ts}", // this is optional if you are using @nuxtjs/tailwindcss
      ],
      theme: {
        extend: {
          animation: {
            blob: "blob 10s infinite",
            blobSm: "blobSm 10s infinite",
          },
          keyframes: {
            blob: {
              "0%": {
                transform: "translate(0px, 0px) scale(1)",
              },
              "33%": {
                transform: "translate(10px, -20px) scale(1.05)",
              },
              "66%": {
                transform: "translate(-5px, 5px) scale(0.95)",
              },
              "100%": {
                transform: "translate(0px, 0px) scale(1)",
              },
            },
            blobSm: {
              "0%": {
                transform: "translate(0px, 0px) scale(1)",
              },
              "33%": {
                transform: "translate(5px, -5px) scale(1.005)",
              },
              "66%": {
                transform: "translate(-5px, 5px) scale(0.995)",
              },
              "100%": {
                transform: "translate(0px, 0px) scale(1)",
              },
            },
          },
          colors: {
            primary: "rgb(var(--primary))",
            "primary-inverse": "rgb(var(--primary-inverse))",
            "primary-hover": "rgb(var(--primary-hover))",
            "primary-active-color": "rgb(var(--primary-active-color))",

            "primary-highlight":
              "rgb(var(--primary)/var(--primary-highlight-opacity))",
            "primary-highlight-inverse":
              "rgb(var(--primary-highlight-inverse))",
            "primary-highlight-hover":
              "rgb(var(--primary)/var(--primary-highlight-hover-opacity))",

            "primary-50": "rgb(var(--primary-50))",
            "primary-100": "rgb(var(--primary-100))",
            "primary-200": "rgb(var(--primary-200))",
            "primary-300": "rgb(var(--primary-300))",
            "primary-400": "rgb(var(--primary-400))",
            "primary-500": "rgb(var(--primary-500))",
            "primary-600": "rgb(var(--primary-600))",
            "primary-700": "rgb(var(--primary-700))",
            "primary-800": "rgb(var(--primary-800))",
            "primary-900": "rgb(var(--primary-900))",
            "primary-950": "rgb(var(--primary-950))",

            "surface-0": "rgb(var(--surface-0))",
            "surface-50": "rgb(var(--surface-50))",
            "surface-100": "rgb(var(--surface-100))",
            "surface-200": "rgb(var(--surface-200))",
            "surface-300": "rgb(var(--surface-300))",
            "surface-400": "rgb(var(--surface-400))",
            "surface-500": "rgb(var(--surface-500))",
            "surface-600": "rgb(var(--surface-600))",
            "surface-700": "rgb(var(--surface-700))",
            "surface-800": "rgb(var(--surface-800))",
            "surface-900": "rgb(var(--surface-900))",
            "surface-950": "rgb(var(--surface-950))",
          },
        },
      },
    },
  },
});
