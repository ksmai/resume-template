<template lang="pug">
  p.profile {{profile}}
</template>

<script>
  export default {
    data() {
      return {
        profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      };
    },
  };
</script>

<style scoped lang="scss">
  .profile {
    background-color: #576268;
    color: #fff;
    padding: 44px 88px;
  }
</style>
