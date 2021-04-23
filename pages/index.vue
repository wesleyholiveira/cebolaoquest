<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Bem vindo ao SCQ (Sistema Cebolão Quest)
        </v-card-title>
        <v-card-text>
          <p>
            Este sistema tem como objetivo adaptar de forma fiel o RPG criado pelo grande Cebolão (Rafael)
          </p>
          <v-virtual-scroll height="450" item-height="30" :items="items">
            <template v-slot:default="{ item }">
              <v-list-item :key="item">
                <v-list-item-action-text><strong>{{ item }}</strong></v-list-item-action-text>
              </v-list-item>
            </template>
          </v-virtual-scroll>
          <div class="text-xs-right">
            <em><small>&mdash; Wesley Oliveira</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://discord.gg/n4zS2JtDum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cebolão Discord
          </a>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: ['Teste','Teste']
  })
}
</script>
