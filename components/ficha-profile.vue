<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8" md="8" sm="12">
        {{abstract}}
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12">
        <div class="infos">
          <v-dialog v-model="dialog" max-width="650">
            <v-card>
              <v-card-title class="headline">
                {{ skills.label }}
              </v-card-title>
              <v-card-text style="max-height: 450px; overflow-y: auto">
                {{ skills.effect }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false"> Sair </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <h3 class="headline" style="word-break: break-word">{{name}}</h3>
          <v-row justify="center">
            <v-col>
              <v-carousel hide-delimiters class="carousel">
                <v-carousel-item
                  v-for="(item, i) in referenceImages"
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
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="profileItems"
                group-title="Ficha"
                group
                active
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="parametersItems"
                group-title="Parâmetros"
                group
                inline
                class="text-center"
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="stratagemsItems"
                group-title="Estratagemas"
                group
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="negativeTraitsItems"
                group-title="Características Negativas"
                group
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="martialSkillsItems"
                group-title="Habilidades Marciais"
                group
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="specialTechniquesItems"
                group-title="Técnicas Especiais"
                group
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="extraInfoItems"
                group-title="Informações Adicionais"
                group
                v-on:updateProfile="skills = $event;dialog = true"
              ></ficha-profile-group>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    player: Object
  },

  computed: {
    name() {
      const player = this.player

      if (player.name) {
        return player.name.toUpperCase()
      }
    },
    
    profileItems() {
      const player = this.player
  
      return [
        {
          label: 'Classe:',
          value: player.currentClass,
        },
        {
          label: 'Personalidade:',
          value: player.alignment
        },
        {
          label: 'Principío:',
          value: player.principle
        }
      ]
    },
  
    characterItems() {
      const player = this.player

      return [
        {
          label: 'Level:',
          value: `${player.level}`
        },
        {
          label: 'EXP:',
          value: `${player.exp}`
        },
        {
          label: 'Fundos:',
          value: `${player.funds}`
        }
      ]
    },

    parametersItems() {
      const player = this.player

      if (player.parameters) {
        return player.parameters.map(el => ({
          label: el.name,
          value: el.rank
        }))
      }
    },

    stratagemsItems() {
      const player = this.player

      if (player.stratagems) {
        return player.stratagems.map(el => ({
          label: el.name,
          effect: 'Teste'
        }))
      }
    },

    negativeTraitsItems() {
      const player = this.player

      if (player.negativeTraits) {
        return player.negativeTraits.map(el => ({
          label: el.name,
          effect: 'Teste'
        }))
      }
    },

    martialSkillsItems() {
      const player = this.player

      if (player.martialSkills) {
        return player.martialSkills.map(el => ({
          label: el.name,
          effect: 'Teste'
        }))
      }
    },

    specialTechniquesItems() {
      const player = this.player

      if (player.specialTechniques) {
        return player.specialTechniques.map(el => ({
          label: el.name,
          effect: 'Teste'
        }))
      }
    },

    extraInfoItems() {
      const player = this.player

      if (player.extraInfos) {
        const {
          species,
          sex,
          age,
          height,
          weight,
          birthday,
          locality,
          bloodType,
          addressSelfAs,
          likes,
          dislikes,
          talents
        } = player.extraInfos

        const dateBirthday = new Date(birthday)
        return [
          {
            label: 'Espécie:',
            value: species
          },
          {
            label: 'Sexo:',
            value: sex
          },
          {
            label: 'Idade:',
            value: age.formattedUnit
          },
          {
            label: 'Altura:',
            value: height.formattedUnit
          },
          {
            label: 'Peso:',
            value: weight.formattedWeight
          },
          {
            label: 'Data de nascimento:',
            value: `${dateBirthday.getDate()} / 
                    ${`${dateBirthday.getMonth() + 1}`.padStart(2, '0')} /
                    ${dateBirthday.getFullYear()}`
          },
          {
            label: 'Local de origem:',
            value: locality
          },
          {
            label: 'Tipo sanguíneo:',
            value: bloodType
          },
          {
            label: 'Autodenominação:',
            value: addressSelfAs
          },
          {
            label: 'Gosta de:',
            value: likes
          },
          {
            label: 'Não gosta de:',
            value: dislikes
          },
          {
            label: 'Talentos:',
            value: talents
          }
        ]
      }
    },

    abstract() {
      return this.player.extraInfos ? this.player.extraInfos.abstract : ''
    },

    referenceImages() {
      const { extraInfos } = this.player

      if (extraInfos) {
        const { referenceImages } = extraInfos
        if (referenceImages) {
          return referenceImages.map(el => ({
            src: `/uploads/${el.img}`
          }))
        }
      }
    }
  },

  data: () => ({
    dialog: false,
    skills: {}
  })
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