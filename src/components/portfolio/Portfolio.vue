<template lang="pug">
  div {{projects}}
</template>

<script>
  export default {
    data: () => ({
      projects: 'my projects',
    }),
  };
</script>

<style scoped lang="scss">
  div {
    color: blue;
  }
</style>
