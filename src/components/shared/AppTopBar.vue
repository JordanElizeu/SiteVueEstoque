<template>
  <div class="app-top-bar">

    <v-app-bar app color="blue-grey" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="link-home" to="/">
          Nome da empresa
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="blue-grey--text text--grey">
    
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/vendas">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-sale</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Vendas</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/produtos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-storefront</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Compras</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/viewinformation">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Informações</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      drawer: false,
      group: null,
    }
  }
}
</script>

<style scoped>
.link-home {
  color: #000;
}
.app-top-bar a {
  text-decoration: none;
}
</style>
