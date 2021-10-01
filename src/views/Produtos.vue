<template>
  <v-container>
      <h2 class="text-center">Compras</h2>
   <v-simple-table height="300px" >
    <template>
      <thead>
        <tr>
          <th class="text-left">
            Produto
          </th>
          <th class="text-left">
            Produto
          </th>
          <th class="text-left">
            Valor
          </th>
          <th class="text-left">
            Quantidade
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.id"
        >
          <td>{{ item.data }}</td>
          <td>{{ item.produto }}</td>
          <td>{{ item.venda }}</td>
          <td>{{ item.quantidade }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-container>
</template>

<script>
export default {
    name: 'produtos',
    data: () => ({
      desserts: [],
    }),
     created(){
        fetch('https://jordanelizeu.github.io/Data/produtos.json')
        .then(resultado => resultado.json())
        .then(json => {
            this.desserts = json
        })
    }
}
</script>