<template>
  <div class="vendas">
    <v-simple-table>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Produto</th>
          <th class="text-left">Quantidade</th>
          <th class="text-left">Cliente</th>
          <th class="text-left">Data</th>
          <th class="text-left">Tipo de pagamento</th>
          <th class="text-left">Valor</th>
          <th class="text-left">Endereço</th>
          <th class="text-left">Cep</th>
          <th class="text-left">Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venda of vendas" :key="venda.ID">
          <td>{{ venda.ID }}</td>
          <td>{{ venda.Nome_Produto }}</td>
          <td>{{ venda.Quantidade_Produto }}</td>
          <td>{{ venda.Nome_Cliente }}</td>
          <td>{{ venda.Data }}</td>
          <td>{{ venda.Tipo_Pagamento }}</td>
          <td>{{ venda.Valor_Venda }}</td>
          <td>{{ venda.Endereço }}</td>
          <td>{{ venda.Cep }}</td>
          <td>{{ venda.Telefone }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "Vendas",
  data() {
    return {
      vendas: [],
    };
  },
  created() {
    fetch("https://jordanelizeu.github.io/Data/vendas.json")
      .then((response) => response.json())
      .then((json) => {
        this.vendas = json;
      });
  },
};
</script>

<style scoped>
.titulo {
  margin: 10px;
  display: flex;
  justify-content: center;
}
</style>