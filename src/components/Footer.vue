<template lang="pug">
  footer.footer
    span.address {{address}}
    span.website {{website}}
</template>

<script>
  export default {
    data() {
      return {
        address: 'Somewhere, New York, 12345, USA',
        website: 'https://www.mywebsite.com/example/only',
      };
    }
  };
</script>

<style scoped lang="scss">
  .footer {
    background-color: #0089cd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 88px;
    color: #fff;
  }

  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
