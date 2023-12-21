<template>
  <div>
    <p>Product detail for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores ea
      commodi libero. Reprehenderit iure voluptatum, nulla officia optio veniam.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
