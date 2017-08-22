<template>
  <section class="resume">
    <resume-profile></resume-profile>
  </section>
</template>

<script>
  import ResumeProfile from './Profile';

  export default {
    data: () => ({
      name: 'me',
    }),
    components: { ResumeProfile },
  };
</script>

<style scoped lang="scss">
</style>
