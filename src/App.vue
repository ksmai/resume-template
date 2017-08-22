<template>
  <div>
    <app-navbar></app-navbar>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppNavbar from './components/Navbar';
  import AppHeader from './components/Header';

  export default {
    components: { AppNavbar, AppHeader },
  };
</script>

<style scoped lang="scss">
</style>
