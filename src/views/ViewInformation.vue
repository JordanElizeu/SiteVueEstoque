<template>
  <div class="view-information">
    <v-card
      class="mx-auto elevation-20"
      color="black"
      dark
      style="max-width: 400px"
    >
      <v-row justify="space-between">
        <v-col cols="15">
          <v-card-title>
            <div>
              <div class="white--text text-h5 mb-5">
                <v-card-text class="white--text">
                  {{ new Date().getFullYear() }} — <h1>Empresa LTDA</h1>
                </v-card-text>
                <v-card-text class="white--text pt-5">
                  Esse é o nosso propósito, aquilo que você pode e deve esperar
                  de nós. Como uma Next-Gen IT Services Provider, cobrimos todo
                  o ciclo de concepção, design, programação, qualidade e
                  implantação de quaisquer demandas de software customizado.
                  Apoiamos a sua transformação digital com a implantação de
                  práticas ágeis. Desenvolvemos soluções Web, Mobile e Advanced
                  Analytics, complementando seu parque de soluções de software,
                  de forma integrada ao seu ERP, CRM e outros sistemas. E depois
                  de tudo isso, cuidamos dos seus ambientes de nuvem e mantemos
                  seus software atualizados e funcionais. Afinal, adoramos
                  chamar de NOSSOS os SEUS desafios de TI!
                </v-card-text>
              </div>
            </div>
          </v-card-title>
        </v-col>
        <v-img
          class="shrink"
          contain
          height="250px"
          src="../assets/logotipo.png"
          style="flex-basis: 500px"
        ></v-img>
      </v-row>
      <v-divider dark></v-divider>
      <v-card-actions class="pa-4 white--text">
        O quanto satisfeito você está com os nossos serviços ?
        <v-spacer></v-spacer>
        <span class="black white--text text--lighten-2 text-caption mr-2">
          ({{ rating }})
        </span>
        <v-rating
          v-model="rating"
          background-color="white"
          color="yellow accent-4"
          dense
          hover
          size="18"
        ></v-rating>
      </v-card-actions>
      <v-divider></v-divider>
      <center class="mt-5">
        <h4 class="white--text">Devs Jordan - Andrew - Heitor</h4>
      </center>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ViewInformation",
  data() {
    return {
      expand1: false,
      step: 1,
      rating: 4.3,
    };
  },
  computed: {
    currentTitle() {
      return "Fale conosco";
    },
  },
};
</script>

<style scoped>
.mx-auto {
  padding: 10px;
  border-radius: 10px;
}
.view-information {
  background-color: black;
}
</style>