<template lang="pug">
  ul.header
    li.item(v-for="(value, key) in items")
      h5.subheading {{key}}
      p.content {{value}}
</template>

<script>
  export default {
    data() {
      return {
        items: {
          to: ['John Doe', 'Human Resource Manager', 'Foobar',
            'Foobar Somewhere', 'CA 12345'].join('\n'),
          position: 'Software Engineer',
          reference: '12345678',
          date: '26 August 2017',
        },
      };
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    padding: 24px 24px 24px 88px;
    box-shadow:
      1px 0 3px -2px rgba(0, 0, 0, .2),
      2px 0 2px 0 rgba(0, 0, 0, .14),
      5px 0 1px 0 rgba(0, 0, 0, .12);
  }
  .subheading {
    color: #0089cd;
    font-size: 1.2em;
    margin: 16px 0;
    text-transform: capitalize;
  }
  .content {
    white-space: pre-line;
  }
  @media (max-width: 768px) {
    .header {
      padding: 16px 32px;
    }
  }
</style>
