<template lang="pug">
  .hello
    hello-header.header
    hello-letter.letter
</template>

<script>
  import HelloHeader from './Header';
  import HelloLetter from './Letter';

  export default {
    components: { HelloHeader, HelloLetter },
  };
</script>

<style scoped lang="scss">
  .hello {
    display: flex;
    flex-wrap: wrap;
  }
  .header {
    flex: 0 1 420px;
  }
  .letter {
    flex: 1;
  }

  @media (max-width: 991px) {
    .hello {
      flex-flow: column nowrap;
    }
    .header,
    .letter {
      flex: 0 1 100%;
    }
  }
</style>
