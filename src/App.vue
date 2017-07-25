<template>
  <div id="app">
    <h1>Who's Up Next?</h1>
    <h2 class="chosen-project-heading">
      <project
        :projectName="getActiveProject.projectName"
        :projectLink="getActiveProject.projectLink"
        :projectPresentationLink="getActiveProject.projectPresentationLink"
        :linkToProject="true"
        :showPresentation="true" />
    </h2>
    <p class="buttons">
      <a class="button clickable" v-on:click="handleChooseRandomProject">Choose Random Project</a>
      <a class="button clickable" v-on:click="handleDelayProject">Delay Project</a>
    </p>
    <div class="bank">
      <div class="remaining-wrapper">
        <h3 class="remaining-projects-heading">Remain Projects</h3>
        <project
          v-for="project in getRemainingProjects"
          :key="project.id"
          :projectName="project.projectName"
          :linkToProject="false"
          :showPresentation="false" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Project from './components/Project';

  // Get random int, not including the max integer
  const getRandomInt = (max) => {
    const localMax = Math.floor(max);
    return Math.floor(Math.random() * localMax);
  };

  const setRandomProject = (projects, cb) => {
    const randomInt = getRandomInt(projects.length);
    const project = projects[randomInt];
    cb(project.projectName);
  };

  export default {
    name: 'app',
    components: {
      Project,
    },
    computed: {
      ...mapGetters([
        'getRemainingProjects',
        'getActiveProject',
      ]),
    },
    methods: {
      handleChooseRandomProject() {
        setRandomProject(this.getRemainingProjects, this.setActiveProject);
      },
      handleDelayProject() {
        this.addActiveProjectToRemaining(this.getActiveProject);
        this.setActiveProject('');
      },
      ...mapActions([
        'fetchProjectList',
        'setActiveProject',
        'addActiveProjectToRemaining',
      ]),
    },
    mounted() {
      this.fetchProjectList();
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .clickable {
    cursor: pointer;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    margin: 0 auto 1.5em;;
    width: 30%;
  }

  .button {
    border: 1px solid #42b983;
    border-radius: 3px;
    padding: 5px 10px;
  }

  .button:hover {
    background-color: #42b983;
    color: white;
  }

  .chosen-project-heading {
    font-size: 3em;
    margin: 2em 0;
  }

  .remaining-projects-heading {
    text-decoration: underline;
  }

  .bank {
    display: flex;
    justify-content: space-around;
  }
</style>
