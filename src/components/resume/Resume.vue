<template lang="pug">
  section.resume
    resume-profile
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
