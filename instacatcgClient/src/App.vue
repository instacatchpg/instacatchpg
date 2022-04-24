<template>
  <v-app>
<comments></comments>
      <nav-bar></nav-bar>
  </v-app>
</template>

<script>
import NavBar from './components/navBar.vue';
import comments from './components/Comments.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    comments
  },

};
</script>
