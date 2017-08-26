<template lang="pug">
  ul.portfolio
    li.project(v-for="project in projects")
      .picture-wrapper
        img.picture(:src="project.picture" :alt="project.name")
      div.text
        h5.name {{project.name}}
        p.description {{project.description}}
        a.link(:href="project.link") {{project.link}}
</template>

<script>
  import project1 from '../../../assets/project1.jpg';
  import project2 from '../../../assets/project2.jpg';
  import project3 from '../../../assets/project3.jpg';

  export default {
    data: () => ({
      projects: [{
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: 'www.example.com/1',
        picture: project1,
      }, {
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: 'www.example.com/2',
        picture: project2,
      }, {
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: 'www.example.com/3',
        picture: project3,
      }],
    }),
  };
</script>

<style scoped lang="scss">
  .project {
    display: flex;
    height: 400px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
  .text {
    padding: 24px;
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .picture-wrapper {
    flex: 1;
    height: 100%;
  }
  .picture {
    object-fit: cover;
    filter: grayscale(90%);
    width: 100%;
    height: 100%;
  }
  .name {
    color: #0089cd;
    font-size: 1.2em;
    margin: 16px 0;
  }
  .link {
    margin-top: 8px;

    &,
    &:link,
    &:visited {
      text-decoration: none;
      color: #0089cd;
      font-weight: 700;
    }

    &:hover {
      color: lighten(#0089cd, 5%);
    }
  }

  @media (max-width: 768px) {
    .project {
      flex-wrap: wrap;
      flex-direction: row;
      height: 100vh;
    }
    .text,
    .picture-wrapper {
      flex: 0 0 100%;
      width: 100%;
      height: 50vh;
    }
  }
</style>
