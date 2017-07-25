<template lang="html">
  <div class="component-wrapper">
    <h4>
      <!-- Not sure I like this if/else... -->
      <a v-if="linkToProject" :href="projectLink" class="project-link" target="_blank">{{ projectName }}</a>
      <span v-else v-on:click="handleChooseProject" :data-project-name="projectName" class="clickable">{{ projectName }}</span>

      <span v-if="showPresentation" class="smaller">
        <presentation v-if="projectPresentationLink" class="small" :projectPresentationLink="projectPresentationLink" />
      </span>
    </h4>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Presentation from './Presentation';

  export default {
    name: 'project',
    props: ['projectName', 'projectLink', 'projectPresentationLink', 'linkToProject', 'showPresentation'],
    components: {
      Presentation,
    },
    methods: {
      handleChooseProject(event) {
        this.setActiveProject(event.target.getAttribute('data-project-name'))
      },
      ...mapActions([
        'setActiveProject',
      ]),
    },
  };
</script>

<style scoped lang="css">
  .project-link {
    color: #2c3e50;
    text-decoration: none;
  }

  .smaller {
    font-size: 0.5em;
  }
</style>
