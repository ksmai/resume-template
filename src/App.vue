<template>
  <div class="container">
    <app-navbar></app-navbar>
    <app-header></app-header>
    <router-view class="main"></router-view>
    <app-contact></app-contact>
  </div>
</template>

<script>
  import AppNavbar from './components/Navbar';
  import AppHeader from './components/Header';
  import AppContact from './components/Contact';

  export default {
    components: { AppNavbar, AppHeader, AppContact },
  };
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .main {
    flex: 1;
  }
</style>
