<template lang="html">
  <p><a :href="projectPresentationLink" target="_blank">Presentation</a></p>
</template>

<script>
  export default {
    name: 'presentation',
    props: ['projectPresentationLink'],
  };
</script>

<style scoped lang="css">
  a {
    color: #42b983;
    text-decoration: none;
  }
</style>
