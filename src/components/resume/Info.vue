<template lang="pug">
  .info(v-once)
    h3.subheading Personal
    dl.personal
      template(v-for="(value, key) in personal")
        dt.key {{key}}
        dd.value {{value}}
    h3.subheading Software
    dl
      template(v-for="(value, key) in software")
        dt.skill {{key}}
        dd.progress
          div.score(:style="{ width: value + '%' }")
    h3.subheading Hobbies
    .hobbies
      .hobby(v-for="hobby in hobbies")
        .hobby-icon
          i.fa.fa-2x.fa-fw(:class="`fa-${hobby.icon}`")
        span {{hobby.title}}
</template>

<script>
  export default {
    data() {
      return {
        personal: {
          name: 'Cute Bird',
          birthday: '25 Dec 1900',
          relationship: 'Complicated',
          nationality: 'Zoo',
          languages: 'English, German',
          telephone: '+1 (234) 567 8900',
        },
        software: {
          html: 100,
          css: 90,
          javascript: 85,
          python: 64,
          illustrator: 42,
          photoshop: 21,
        },
        hobbies: [
          { icon: 'bath', title: 'Bath' },
          { icon: 'bicycle', title: 'Bicycle' },
          { icon: 'book', title: 'Reading' },
          { icon: 'coffee', title: 'Coffee' },
          { icon: 'gamepad', title: 'Gaming' },
          { icon: 'glass', title: 'Drinking' },
        ],
      };
    }
  };
</script>

<style scoped lang="scss">
  .info {
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
  }
  .key {
    font-weight: 700;
    text-transform: capitalize;
    width: 130px;
    display: inline-block;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
  }
  .value {
    border-bottom: 1px solid rgba(0, 0, 0, .12);
    margin-bottom: 8px;
    width: calc(100% - 130px);
    display: inline-block;
  }
  .skill {
    display: inline-block;
    width: 130px;
    text-transform: capitalize;
  }
  .progress {
    display: inline-block;
    width: calc(100% - 130px);
    background-color: #eee;
    height: 12px;
    vertical-align: middle;
    border-radius: 3px;
  }
  .score {
    height: 100%;
    background-color: #0089cd;
    border-radius: 3px;
  }
  .hobby {
    display: inline-block;
    width: 96px;
    text-align: center;
  }
  .hobby-icon {
    width: 64px;
    height: 64px;
    margin: 8px auto;
    background-color: #9dc6e6;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .info {
      padding: 16px 32px;
    }
  }
</style>
