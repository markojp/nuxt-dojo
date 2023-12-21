<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
    <nuxt-img :src="product.image" />
  </div>
</template>

<script setup>
definePageMeta({ layout: "products" });
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
//width="100" height="150"
const { data: product } = await useFetch(uri);
</script>

<style lang="scss" scoped></style>
