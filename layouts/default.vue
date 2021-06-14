<template>
  <v-app>
    <v-app-bar dark absolute>
      <v-badge bordered color="error" icon="mdi-lock" overlap v-if="isAdmin">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-badge>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="!isAdmin"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon v-if="$auth.user" @click="$auth.logout()">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list nav dense>
        <v-list-item href="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item href="/buscar">
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Database</v-list-item-title>
          </v-list-item>

        <v-list-group
          no-action
          prepend-icon="mdi-clipboard-list"
          v-if="$auth.user"
        >
          <template v-slot:activator>
            <v-list-item-title>Ficha</v-list-item-title>
          </template>
          <v-list-item href="/ficha">
            <v-list-item-icon>
              <v-icon>mdi-plus-box</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Cadastrar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="/ficha/listar">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Listar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <div v-if="$auth.user">
          <v-list-item href="/chat">
            <v-list-item-icon>
              <v-icon>mdi-tooltip-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Chat</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$auth.logout()">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-container class="myContainer">
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    isAdmin() {
      let isAdmin = false

      if (this.$auth.user != null) {
        if (this.$auth.user.isAdmin) {
          isAdmin = true
        }
      }

      return isAdmin
    },
  },
  data: () => ({
    drawer: false,
  }),
}
</script>

<style>
html,
body {
  height: 100%;
  position: relative;
}
.myContainer {
  margin-top: 90px;
  height: 100%;
}
.theme--dark.v-stepper {
  background-color: transparent !important;
}
.v-stepper__header {
  background-color: #303030 !important;
}
</style>