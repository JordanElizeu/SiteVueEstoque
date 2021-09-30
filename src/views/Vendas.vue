<template>
  <div class="vendas">
    <h1>Vendas</h1>
    <div v-for="venda of vendas" class="lista" :key="venda.ID">
      {{ venda.Nome_Produto }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vendas',
  data() {
    return {
      vendas: []
    }
  },
  created() {
    fetch('https://jordanelizeu.github.io/Data/vendas.json')
      .then(response => response.json())
      .then(json => {
        this.vendas = json;
      })
  }
}
</script>