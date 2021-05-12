<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12" sm="12" class="hidden-md-and-up">
        <ficha-aside
          :name="name"
          :referenceItems="referenceImages"
          :characterItems="characterItems"
          :profileItems="profileItems"
          :parametersItems="parametersItems"
          :stratagemsItems="stratagemsItems"
          :negativeTraitsItems="negativeTraitsItems"
          :martialSkillsItems="martialSkillsItems"
          :specialTechniquesItems="specialTechniquesItems"
          :extraInfoItems="extraInfoItems"
      />
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="12">
        <p>{{ abstract }}</p>

        <div class="table-content" v-if="stories && stories.length > 0">
          <h3 class="header">TABELA DE CONTEÚDO</h3>
          <ficha-table-content :stories="stories" :playerId="player.id" />
        </div>

        <div class="content">
          <ficha-content :stories="stories" :playerId="player.id" />
        </div>
      </v-col>
      <v-col cols="12" lg="4" md="4" class="hidden-sm-and-down">
        <ficha-aside
          :name="name"
          :referenceItems="referenceImages"
          :characterItems="characterItems"
          :profileItems="profileItems"
          :parametersItems="parametersItems"
          :stratagemsItems="stratagemsItems"
          :negativeTraitsItems="negativeTraitsItems"
          :martialSkillsItems="martialSkillsItems"
          :specialTechniquesItems="specialTechniquesItems"
          :extraInfoItems="extraInfoItems"
      />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    player: Object,
  },

  computed: {
    name() {
      const player = this.player

      if (player.name) {
        return player.name.toUpperCase()
      }
    },

    stories() {
      const player = this.player

      if (player.extraInfos) {
        const recursiveForeach = (e, parentId, acc = '') => {
          e.forEach((el, i) => {
            el.pos = acc + `.${i + 1}`
            recursiveForeach(el.children, parentId, el.pos)
          })
        }

        const { stories } = player.extraInfos
        stories.forEach((el, i) => {
          const index = i + 1
          el.pos = `${index}`
          recursiveForeach(el.children, index, el.pos)
        })

        return stories.filter(el => el.name != "")
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
          value: player.alignment,
        },
        {
          label: 'Princípio:',
          value: player.principle,
        },
      ]
    },

    characterItems() {
      const player = this.player

      return [
        {
          label: 'Level:',
          value: `${player.level}`,
        },
        {
          label: 'EXP:',
          value: `${player.exp}`,
        },
        {
          label: 'Fundos:',
          value: `${player.funds}`,
        },
      ]
    },

    parametersItems() {
      const player = this.player

      if (player.parameters) {
        return player.parameters.map((el) => ({
          label: el.name,
          value: el.rank,
        }))
      }
    },

    stratagemsItems() {
      const player = this.player

      if (player.stratagems) {
        return player.stratagems.map((el) => ({
          label: el.name,
          effect: el.effect,
        }))
      }
    },

    negativeTraitsItems() {
      const player = this.player

      if (player.negativeTraits) {
        return player.negativeTraits.map((el) => ({
          label: el.name,
          effect: el.effect,
        }))
      }
    },

    martialSkillsItems() {
      const player = this.player

      if (player.martialSkills) {
        return player.martialSkills.map((el) => ({
          label: el.name,
          effect: el.effect,
        }))
      }
    },

    specialTechniquesItems() {
      const player = this.player

      if (player.specialTechniques) {
        return player.specialTechniques.map((el) => ({
          label: el.name,
          effect: el.effect,
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
          talents,
        } = player.extraInfos

        const dateBirthday = new Date(birthday)
        return [
          {
            label: 'Espécie:',
            value: species,
          },
          {
            label: 'Sexo:',
            value: sex,
          },
          {
            label: 'Idade:',
            value: age.formattedUnit,
          },
          {
            label: 'Altura:',
            value: height.formattedUnit,
          },
          {
            label: 'Peso:',
            value: weight.formattedWeight,
          },
          {
            label: 'Data de nascimento:',
            value: `${dateBirthday.getDate()} / 
                    ${`${dateBirthday.getMonth() + 1}`.padStart(2, '0')} /
                    ${dateBirthday.getFullYear()}`,
          },
          {
            label: 'Local de origem:',
            value: locality,
          },
          {
            label: 'Tipo sanguíneo:',
            value: bloodType,
          },
          {
            label: 'Autodenominação:',
            value: addressSelfAs,
          },
          {
            label: 'Gosta de:',
            value: likes,
          },
          {
            label: 'Não gosta de:',
            value: dislikes,
          },
          {
            label: 'Talentos:',
            value: talents,
          },
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
          return referenceImages.map((el) => ({
            src: `/uploads/${el.img}`,
          }))
        }
      }
    },
  },
}
</script>

<style scoped>
.content {
  justify-content: center;
  display: flex;
}
.table-content {
  justify-content: center;
  text-align: justify;
  max-width: 270px;
  margin-top: 25px;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.table-content .header {
  margin: 10px 0px 0px 10px;
}
</style>

