<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias
      nemo itaque culpa error perspiciatis placeat, repellendus, rerum tempora
      rem eaque consequuntur nam temporibus architecto ducimus maxime
      voluptatibus deleniti ad.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis
      consectetur dolorum in incidunt iusto doloribus, corrupti blanditiis ipsum
      itaque.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/ninja?name=mario', {
    method: 'post',
    body: { age: 30 },
  });
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
