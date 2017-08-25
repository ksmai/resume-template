<template lang="pug">
  section.resume
    resume-profile.profile
    resume-info.info
</template>

<script>
  import ResumeProfile from './Profile';
  import ResumeInfo from './Info.vue';

  export default {
    data: () => ({
      name: 'me',
    }),
    components: { ResumeProfile, ResumeInfo },
  };
</script>

<style scoped lang="scss">
  .resume {
    display: flex;
    flex-wrap: wrap;
  }
  .profile {
    width: 100%;
  }
  .info {
    flex: 0 1 420px;
  }
</style>
