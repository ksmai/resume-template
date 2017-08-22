<template>
  <header class="header">
    <div class="info">
      <h1 class="name">{{name}}</h1>
      <h2 class="title">{{title}}</h2>
    </div>

    <img :src="avatar" :alt="name" class="avatar">
  </header>
</template>

<script>
  import avatar from '../../assets/avatar.png';

  export default {
    data() {
      return {
        avatar,
        name: 'Cute Bird',
        title: 'Animal',
      };
    },
  };
</script>

<style scoped lang="scss">
  .header {
    background-color: #08a1db;
    height: 196px;
    padding: 0 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow:
      0 6px 2px rgba(0, 0, 0, .2),
      0 4px 4px rgba(0, 0, 0, .14),
      0 2px 10px rgba(0, 0, 0, .12);
  }
  .name {
    color: #fff;
    font-size: 48px;
  }
  .title {
    color: rgba(255, 255, 255, .7);
    font-size: 24px;
  }
  .avatar {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .header {
      padding: 0 32px;
      height: 144px;
    }
    .name {
      font-size: 36px;
    }
    .avatar {
      width: 96px;
      height: 96px;
    }
  }
</style>
