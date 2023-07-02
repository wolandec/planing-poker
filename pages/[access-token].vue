<template>
  <div></div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const route = useRoute();

console.log(runtimeConfig.public.apiUrl);

fetch("/api/activate?access-token=" + route.params.accesstoken);
</script>
