<template>
  <v-app>
    <v-main>
      <Produtos/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Produtos from './views/produtos.vue'
export default {
  name: 'App',

  components: {
    Produtos
  },

  data: () => ({
    //
  }),
};
</script>
