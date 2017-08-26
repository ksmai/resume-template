<template lang="pug">
  div.experience(v-once)
    h3.subheading Work
    ul.works
      li.work(v-for="work in works")
        .item-main
          h5.title {{work.title}} @ {{work.company}} in {{work.city}}
          h6.content {{work.description}}
        .item-side
          span {{work.year}}

    h3.subheading Professional Skills
    ul.skills
      li.skill(v-for="skill in skills")
        .c100(:class="`p${skill.score}`")
          span {{skill.name}}
          .slice
            .bar
            .fill

    h3.subheading Education
    ul.education
      li.edu(v-for="edu in education")
        .item-main
          h5.title {{edu.degree}} @ {{edu.school}} in {{edu.city}}
          h6.content {{edu.description}}
        .item-side
          span {{edu.year}}
</template>

<script>
  export default {
    data() {
      return {
        works: [{
          title: 'Manager',
          company: 'Some Company',
          city: 'Some City',
          year: 2015,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        }, {
          title: 'Developer',
          company: 'ABC Company',
          city: 'XYZ City',
          year: 2014,
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        }, {
          title: 'Programmer',
          company: 'Hello Company',
          city: 'World City',
          year: 2013,
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        }],
        skills: [{
          name: 'Skill 1',
          score: 100,
        }, {
          name: 'Skill 2',
          score: 85,
        }, {
          name: 'Skill 3',
          score: 70,
        }, {
          name: 'Skill 4',
          score: 55,
        }, {
          name: 'Skill 5',
          score: 40,
        }],
        education: [{
          degree: 'MSc Computer Science',
          school: 'Some University',
          city: 'Some City',
          year: 2012,
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        }, {
          degree: 'BSc CS',
          school: 'Another University',
          city: 'Another City',
          year: 2011,
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        }],
      };
    }
  };
</script>

<style scoped lang="scss">
  .experience {
    padding: 24px 88px 24px 48px;
  }
  .subheading {
    color: #0089cd;
    font-size: 1.2em;
    margin: 16px 0;
  }
  .edu,
  .work {
    display: flex;
    margin-left: 32px;
    padding-left: 48px;
    position: relative;
    border-left: 1px solid #18a1cf;

    &:before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #18a1cf;
      position: absolute;
      left: -8px;
      top: 6px;
      box-shadow: 0 0 0 8px #b2e5ff;
    }
  }
  .item-main {
    flex: 1;
  }
  .item-side {
    font-weight: 700;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
    margin-bottom: 16px;
  }
  .title {
    font-size: 1.1em;
    font-weight: 700;
    padding-right: 16px;
  }
  .content {
    color: rgba(0, 0, 0, .87);
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
    margin-bottom: 16px;
    padding-right: 16px;
  }
  .skill {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin: 24px;
    clear: both;
    *zoom: 1;

    &:before,
    &:after {
      display: table;
    }

    &:after {
      clear: both;
    }
  }

  @media (max-width: 768px) {
    .experience {
      padding: 16px 32px;
    }
  }
</style>
