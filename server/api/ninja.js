export default defineEventHandler(async (event) => {
  //handle query params
  const { name } = getQuery(event);

  // handle post data
  const { age } = await readBody(event);

  //const secretAPIkey = 123456;

  // api call with private key
  //const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?
  //apikey=${123456}`);

  return {
    message: `Hello, ${name}! You are ${age} years old.`,
  };
});
