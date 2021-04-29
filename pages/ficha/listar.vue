<template>
    <v-row justify="center" align="center">
        <v-col cols="12">
            <h1 class="text-center">Minhas Fichas</h1>
        </v-col>
        <v-col cols="12" v-if="players.length > 0">
            <v-expansion-panels>
                <v-expansion-panel :readonly="disabled" @click="disabled = false">
                    <v-expansion-panel-header color="cyan darken-4">
                        <v-container style="padding: 0">
                            <v-row no-gutters justify="center" align="center">
                                <v-col>
                                    <span>Vamo que vamo</span>
                                </v-col>
                                <v-col class="text-right">
                                    <v-btn
                                        href="/ficha/22"
                                        depressed
                                        color="cyan darken-4"
                                        @click="disabled = true"
                                    >
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn
                                        class="mr-4"
                                        color="cyan darken-4"
                                        depressed
                                        @click="disabled = true"
                                    >
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pt-4" color="cyan darken-3">
                        Teste
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
        <v-list class="custom-row" v-if="players.length < 1">
            <v-list-item-group>
                <v-list-item href="/ficha" class="add">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <span
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon size="300" color="grey darken-3">mdi-plus</v-icon>
                            </span>
                        </template>
                        <span>ADICIONAR NOVA FICHA</span>
                    </v-tooltip>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        players: [true],
        disabled: false
    }),
    async fetch() {
        // const { data } = this.$http.get('/api/player/user/')
    }
}
</script>

<style scoped>
html, body { height: 100% }
.v-sheet.theme--dark {
    background-color: transparent;
}
.custom-row {
    height: 100%;
    position: relative;
}
.add::before, .add::after {
    background-color: transparent;
}
</style>
