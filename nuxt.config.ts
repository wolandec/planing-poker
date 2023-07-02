// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: "",
    public: {
      apiUrl: "",
    },
  },
  pages: true,
  devtools: { enabled: true },
});
