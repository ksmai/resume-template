<template>
  <ul class="list">
    <li v-for="link in links" class="item">
      <a href="#" class="link">
        <i class="icon fa fa-2x" :class="'fa-' + link.icon"></i>
      </a>
      <span class="url">{{link.url}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { icon: 'behance', url: 'www.behance.com/cute-bird' },
          { icon: 'linkedin', url: 'www.linkedin.com/cute-bird' },
          { icon: 'twitter', url: 'www.twitter.com/cute-bird' },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    padding: 22px 88px;
    background-color: #08a1db;
  }
  .item {
    flex: 1;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link {
    background-color: #0089cd;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    margin-bottom: 16px;
    transition: background-color .15s cubic-bezier(.4, 0, .2, 1);

    &,
    &:link,
    &:active,
    &:visited {
      text-decoration: none;
    }
  }

  .icon {
    color: #fff;
    text-decoration: none;
  }
</style>
