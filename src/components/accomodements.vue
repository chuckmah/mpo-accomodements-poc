<template>
  <div class="accomodements">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript + MODUL App"/>
      <boutons></boutons>
      <contenu></contenu>
      <fenetres></fenetres>
      <navigation></navigation>
      <tableaux></tableaux>
      <formulaire></formulaire>
  </div> 
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from "vue-property-decorator";
import HelloWorld from './HelloWorld.vue';
import Boutons from './Boutons.vue';
import Contenu from './Contenu.vue';
import Fenetres from './Fenetres.vue';
import Formulaire from './Formulaire.vue';
import Navigation from './Navigation.vue';
import Tableaux from './Tableaux.vue';

@Component({
  components: {
    HelloWorld,
    Boutons,
    Contenu,
    Fenetres,
    Formulaire,
    Navigation,
    Tableaux,
  },
})
export default class Accomodements extends Vue {
  public data: string = "Valeur par défaut";
  public options: string[] = ["Pomme", "Poire", "Ananas"];
  public model: string[] = [];

  created() {
    console.log('Accomodements created');
  }

  destroyed() {
    console.log('Accomodements destoryed');
  }

  @Prop()
  private titre!: string;

  public reset(): void {
    this.data = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: #42b983;
}
</style>
