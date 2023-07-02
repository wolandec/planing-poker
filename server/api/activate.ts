export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();

  const result = await fetch(
    runtimeConfig.public.apiUrl +
      `/auth/v1/verify?type=invite&` +
      `token=${getQuery(event)["access-token"]}`,
    { headers: { Authorization: "Bearer " + runtimeConfig.apiKey } }
  );

  return {
    hello: result,
  };
});
