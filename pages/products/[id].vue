<template>
  <div>
    <ProductDetail :product="product" />
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
