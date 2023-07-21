export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "nuxt-gtag"],
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  typescript: {
    strict: true,
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },
});
