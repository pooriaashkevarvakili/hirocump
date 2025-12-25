import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  css: ["./app/tailwind.css"],

  modules: ["@nuxt/icon"],

  icon: {
    mode: 'css',
    cssLayer: 'base',
    serverBundle: {
      collections: ['uil', 'mdi']
    }
  }
});
