<template lang="pug">
  section.resume
    resume-profile.profile
    resume-info.info
    resume-experience.experience
</template>

<script>
  import ResumeProfile from './Profile';
  import ResumeInfo from './Info';
  import ResumeExperience from './Experience';

  export default {
    components: { ResumeProfile, ResumeInfo, ResumeExperience },
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
  .experience {
    flex: 1;
  }

  @media (max-width: 991px) {
    .resume {
      flex-flow: column nowrap;
    }
    .profile,
    .info,
    .experience {
      width: 100%;
      flex: 0 1 100%;
    }
  }
</style>
