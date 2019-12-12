<template>
  <div class="m-u--app-body accomodements">
    <h1 v-text="titre"></h1>
    <m-button @click="reset">
      <m-icon name="m-svg__error"></m-icon>Vider le champs
    </m-button>
    <m-textfield v-model="data"></m-textfield>
    <br />
    <br />
    <br />
    {{options}}
    <m-multi-select :options="options" v-model="model" label="Label" placeholder="Choisir un fruit"></m-multi-select>
    <br />
    <br />
    <br />
    <m-modal>
      <m-button slot="trigger">Ouvrir la modal</m-button>Contenu de la modal
    </m-modal>
    <br />
    <br />
    <br />
    <m-accordion-group>
      <m-accordion>Some Accordion Content</m-accordion>
      <m-accordion>Some Accordion Content</m-accordion>
      <m-accordion>Some Accordion Content</m-accordion>
    </m-accordion-group>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from "vue-property-decorator";

@Component
export default class Accomodements extends Vue {
  public data: string = "Valeur par défaut";
  public options: string[] = ["Pomme", "Poire", "Ananas"];
  public model: string[] = [];

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
