<template id="app">


  <div class="m-u--app-body">

    <accomodements titre="Page des accomodements - POC"></accomodements>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accomodements from "./components/accomodements.vue";
import store from "./store";

console.log('IM in APP.vue!');


export default {
  name: "app",
  components: {
    Accomodements
  },
  store
};
</script>

<style lang="scss">
    $m-font-path: '~@ulaval/modul-components/dist/assets/fonts/'; //this is required. 

    @import "~@ulaval/modul-components/dist/styles/main.scss";

    @import "~@ulaval/modul-components/dist/modul.min.css";
</style>
