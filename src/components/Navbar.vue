<template lang="pug">
  nav.nav
    router-link.link(
      v-for="link in links"
      :to="`/${link}`"
      :key="link"
    ) {{link}}
</template>

<script>
  export default {
    data() {
      return {
        links: ['hello', 'resume', 'portfolio'],
      };
    }
  };
</script>

<style scoped lang="scss">
  .nav {
    height: 48px;
    background-color: #0089cd;
    padding: 0 64px;
  }
  .link {
    display: inline-block;
    height: 48px;
    line-height: 48px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    letter-spacing: 1px;
    margin: 0 24px;

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, .5);
    }
  }
  .router-link-active {
    &,
    &:hover {
      border-bottom: 3px solid #fff;
    }
  }

  @media (max-width: 768px) {
    .nav {
      padding: 0 16px;
    }
    .link {
      margin: 0 16px;
    }
  }
</style>
