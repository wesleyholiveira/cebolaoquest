<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" lg="3" md="4" sm="12">
                <v-card 
                    rounded 
                    color="primary"
                    class="ficha-info"
                >
                    <v-card-title>
                    <span>Méritos</span>
                    </v-card-title>
                    <v-card-text>{{meritPoints}}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="12">
                <v-card 
                    rounded 
                    color="secondary"
                    class="ficha-info"
                >
                    <v-card-title>
                        <span>Parâmetros</span>
                    </v-card-title>
                    <v-card-text>{{statusPoints}}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="12">
                <v-card 
                    rounded 
                    color="green"
                    class="ficha-info"
                >
                    <v-card-title>
                        <span>Proficiências</span>
                    </v-card-title>
                    <v-card-text>{{proficiencyPoints}}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="12">
                <v-card 
                    rounded 
                    color="red"
                    class="ficha-info"
                >
                    <v-card-title>
                        <span>Valors</span>
                    </v-card-title>
                    <v-card-text>{{valorPoints}}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props: {
        meritPoints: Number,
        proficiencyPoints: Number,
        valorPoints: Number,
        statusPoints: Number
    }
}
</script>

<style>
.ficha-info {
  text-align: center;
}
.ficha-info .v-card__title {
  font-size: 30px;
  display: block;
}
.ficha-info .v-card__text {
  font-size: 26px;
}
</style>