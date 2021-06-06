<template>
  <client-only>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h1 class="text-center">Minhas Fichas</h1>
      </v-col>
      <v-col cols="12" v-if="players.length > 0">
        <v-dialog v-model="dialog" dark max-width="350">
          <v-card>
            <v-card-title class="headline">
              Você realmente quer excluir a sua ficha?
            </v-card-title>

            <v-card-text>
              Esta ação é
              <strong>IRREVERSÍVEL</strong>. Tenha isso em mente se realmente
              deseja prosseguir.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="red darken-1" text @click="dialog = false">
                Não
              </v-btn>

              <v-btn
                color="green darken-1"
                text
                @click="
                  dialog = false
                  removePlayer(playerId)
                "
              >
                Sim
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-expansion-panels v-model="panel">
          <v-expansion-panel
            v-for="(player, i) in players"
            :key="i"
            class="mb-5"
            @click.stop="getAllInfosByPlayer(player.id)"
          >
            <v-expansion-panel-header color="cyan darken-4">
              <v-container style="padding: 0">
                <v-row no-gutters justify="center" align="center">
                  <v-col cols="12" lg="8" md="6" sm="12">
                    <span class="text-center"
                      >{{ player.name }} - (ID: {{ player.id }})</span
                    >
                  </v-col>
                  <v-col cols="12" lg="4" md="6" sm="12">
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-btn
                            v-if="loading"
                            :loading="loading"
                            depressed
                            color="cyan darken-4"
                          >
                          </v-btn>
                        </v-col>
                        <v-col>
                          <copy-clipboard :playerId="player.id.toString()" />
                        </v-col>
                        <v-col>
                          <v-btn
                            :href="player.url"
                            depressed
                            color="cyan darken-4"
                            @click.stop="disabled = true"
                          >
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col>
                          <v-btn
                            class="mr-4"
                            color="cyan darken-4"
                            depressed
                            @click.stop="
                              dialog = true
                              playerId = player.id
                            "
                          >
                            <v-icon style="color: red">mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4" color="cyan darken-3">
              <ficha-profile :player="data[player.id]" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-list class="custom-row" v-if="players.length < 1">
        <v-list-item-group>
          <v-list-item href="/ficha" class="add">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <v-icon size="300" color="grey darken-3">mdi-plus</v-icon>
                </span>
              </template>
              <span>ADICIONAR NOVA FICHA</span>
            </v-tooltip>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
  </client-only>
</template>

<script>
export default {
  data: () => ({
    show: {},
    data: {},
    loading: false,
    dialog: false,
    disabled: false,
    playerId: 0,
    players: [],
    panel: [],
  }),
  async fetch() {
    const { id, token } = this.$auth.user
    const url = `/api/player/name/user/${id}`
    const {
      data: { data },
    } = await this.$axios.get(url, {
      headers: {
        Authorization: token,
      },
    })

    data.forEach((player) => {
      player.url = `/ficha/${player.id}`
    })

    if (data && data.length > 0) {
      this.players = data
    }
  },

  methods: {
    async getAllInfosByPlayer(pID) {
      const { id, token } = this.$auth.user

      if (id && token && !this.data[pID]) {
        const url = `/api/player/${pID}/user/${id}`

        this.loading = true
        const { data } = await this.$axios.get(url, {
          headers: {
            Authorization: token,
          },
        })

        this.data[pID] = data.user
        this.loading = false
      }
    },

    async removePlayer(pID) {
      const { token } = this.$auth.user
      const path = `/api/player/${pID}`

      this.loading = true
      const { data } = await this.$axios.delete(path, {
        headers: {
          Authorization: token,
        },
      })

      this.loading = false
      if (data.statusMessage != 'error') {
        this.players = this.players.filter((player) => player.id != pID)
        this.data[pID] = {}
        this.panel = []
      }
    },
  },
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

.custom-row {
  height: 100%;
  position: relative;
}
.add::before,
.add::after {
  background-color: transparent;
}
</style>
