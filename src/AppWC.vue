<template id="app">
  <div class="m-u--app-body">
  <link rel="stylesheet">
  <accomodements titre="Page des accomodements - POC"></accomodements>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accomodements from "./components/accomodements.vue";
//import { FrenchPlugin, ModulComponentPlugin } from "@ulaval/modul-components";
import store from "./store";

// Vue.use(ModulComponentPlugin);
// Vue.use(FrenchPlugin);

export default {
  name: "app",
  components: {
    Accomodements
  },
  store
};
</script>

<style lang="scss">
//  @import "~@ulaval/modul-components/dist/modul.min.css";
</style>
