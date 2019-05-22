<template>
  <v-app style="scroll-behavior: unset">
    <app-header></app-header>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
  html,body {
    overflow-y: hidden;
  }
</style>
