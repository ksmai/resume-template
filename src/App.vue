<template>
  <div>
    <button @click="dec">-</button>
    <span>count is {{ count }}</span>
    <button @click="inc">+++</button>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        count: 5,
      };
    },
    methods: {
      inc() { this.count+=100 },
      dec() { this.count-- },
    },
  };
</script>

<style scoped lang="scss">
  span {
    display: inline-block;
    color: red;
    transition: transform 1s ease-in-out;

    &:hover {
      color: blue;
      transform: scale(2);
    }
  }
</style>
