<template>
  <div class="infos">
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">
          {{ label }}
        </v-card-title>
        <v-card-text
          style="
            max-height: 450px;
            overflow-y: auto;
            line-height: 1.4rem;
            text-align: justify;
          "
          v-html="skills.effect"
        >
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false"> Sair </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <h3 class="headline" style="word-break: break-word">{{ name }}</h3>
    <v-row justify="center">
      <v-col>
        <v-carousel hide-delimiters class="carousel">
          <v-carousel-item
            v-for="(item, i) in referenceItems"
            :key="i"
            :src="item.src"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" style="margin: 0; padding: 0">
        <ficha-profile-group
          :items="characterItems"
          inline
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
        <ficha-profile-group
          :items="profileItems"
          group-title="Ficha"
          group
          active
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
        <ficha-profile-group
          :items="parametersItems"
          group-title="Parâmetros"
          group
          inline
          class="text-center"
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
        <ficha-profile-group
          :items="stratagemsItems"
          group-title="Estratagemas"
          group
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
        <ficha-profile-group
          :items="negativeTraitsItems"
          group-title="Características Negativas"
          group
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
        <ficha-profile-group
          :items="martialSkillsItems"
          group-title="Habilidades Marciais"
          group
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
        <ficha-profile-group
          :items="specialTechniquesItems"
          group-title="Técnicas Especiais"
          group
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
        <ficha-profile-group
          :items="noblePhantasmsItems"
          group-title="Fantasmas Nobres"
          group
        >
          <template v-slot:noble-phantasm="npProps">
            <ficha-profile-group
              :items="npProps.item.infos"
              :group-title="npProps.item.label"
              noble-phantasm
              group
              v-on:updateProfile="
                skills = $event
                dialog = true
              "
            />
          </template>
        </ficha-profile-group>
        <ficha-profile-group
          :items="extraInfoItems"
          group-title="Informações Adicionais"
          group
          v-on:updateProfile="
            skills = $event
            dialog = true
          "
        ></ficha-profile-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    referenceItems: Array,
    characterItems: Array,
    profileItems: Array,
    parametersItems: Array,
    stratagemsItems: Array,
    negativeTraitsItems: Array,
    martialSkillsItems: Array,
    specialTechniquesItems: Array,
    noblePhantasmsItems: Array,
    extraInfoItems: Array,
  },

  computed: {
    label() {
      if (this.skills.label) {
        return this.skills.label.toUpperCase()
      }
    },
  },

  data: () => ({
    dialog: false,
    skills: {},
  }),
}
</script>

<style scoped>
.infos {
  padding: 10px;
  border: 4px solid #006064;
}
hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
.carousel {
  margin-top: 15px;
}
</style>

<style>
.v-carousel__item .v-image__image {
  background-position: initial !important;
}
</style>