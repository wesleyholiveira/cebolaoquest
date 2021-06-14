<template>
  <v-fade-transition>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h2>Fantasma Nobre: {{ index + 1 }}</h2>
        </v-col>
        <v-col cols="12" lg="6" sm="12">
          <v-text-field v-model="np.name" label="Nome" />
        </v-col>
        <v-col cols="12" lg="6" sm="12">
          <v-combobox
            v-model="type"
            :items="data.type"
            item-text="name"
            label="Tipo"
            @change="
              specialStrike = {
                id: specialStrike ? specialStrike.id : null,
                name: dataSpecialStrike[0] ? dataSpecialStrike[0].name : null,
              }
            "
          />
        </v-col>
        <v-col cols="12" lg="6" sm="12">
          <v-combobox
            v-model="specialStrike"
            :items="dataSpecialStrike"
            item-text="name"
            label="Golpe Especial"
          >
            <template v-slot:no-data>
              Nenhum tipo de fantasma nobre foi selecionado.
            </template>
          </v-combobox>
        </v-col>
        <v-col cols="12" lg="6" sm="12" style="text-align: left">
          <v-combobox
            v-if="!isOverloaded"
            v-model="np.effects"
            :rules="rules.effect"
            :items="dataValorSkills"
            chips
            item-text="name"
            label="Efeitos"
            multiple
            icon
            deletable-chips
            @change="
              backupEffects = decideValorsOperation(np.effects, backupEffects)
            "
          />
          <v-combobox
            v-if="isOverloaded"
            v-model="np.effects"
            :rules="rules.effect"
            :items="dataValorSkills"
            chips
            item-text="name"
            label="Efeitos"
            multiple
            icon
            deletable-chips
            class="warn"
            @change="
              backupEffects = decideValorsOperation(np.effects, backupEffects)
            "
          />

          <span v-if="isOverloaded" class="warn">
            Você está sobrecarregado e como consequência seu armamento lendário
            terá: {{ dmgDown }} a menos de dano
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-fade-transition>
</template>

<script>
export default {
  props: {
    data: Object,
    np: Object,
    index: Number,
    valorPoints: Array,
    valorCap: Number,
    playerId: String,
  },

  created() {
    this.valorSkills = this.data.valorSkills
    this.valors =
      this.np.effects &&this.np.effects.length > 0
        ? this.calculateValorsFromArray(this.np.effects)
        : this.valorCap
    this.valorCapData = this.valorCap
    this.backupEffects = this.np.effects
  },

  data: (instance) => ({
    firstTime: true,
    dmgDown: 0,
    valorCapData: 0,
    previouslyMagical: false,
    isOverloaded: false,
    valorSkills: [],
    backupEffects: [],
    valorEffects: 0,
    valors: 0,
    type: instance.np.type,
    specialStrike: instance.np.specialStrike,
    forbiddenSequence: {
      'Rugidos de Rubi': ['Sonhos de Safira', 'Emanações de Esmeralda'],
      'Sonhos de Safira': ['Rugidos de Rubi', 'Emanações de Esmeralda'],
      'Emanações de Esmeralda': ['Rugidos de Rubi', 'Sonhos de Safira'],
    },
    rules: {
      effect: [
        (v) =>
          v.filter((el) => !el.name).length < 1 ||
          'Há pelo menos um efeito inválido',
        (v) => instance.validateMaxPoints(v, instance.valorCap),
        (v) => {
          const seq = instance.forbiddenSequence
          const e = v.map((el) => el.name)
          const effect = e[e.length - 1]

          const s = seq[effect]
          if (s) {
            const result = s.filter((el) => e.includes(el))
            return (
              result.length < 1 ||
              `Você não pode usar estas valors juntas: ${effect},${s}`
            )
          }

          return true
        },
      ],
    },
  }),

  computed: {
    dataValorSkills() {
      const valorSkills = this.data.valorSkills
      if (this.np.type) {
        const type = this.data.type.filter((el) => el.name == this.np.type.name)

        if (type[0]) {
          const typeValors = type[0].valorSkills

          if (typeValors) {
            return valorSkills.concat(typeValors)
          }
        }
      }
      return valorSkills
    },

    dataSpecialStrike() {
      if (this.type) {
        const typeSpecialStrikes = this.data.type.filter(
          (el) => el.name == this.type.name
        )
        if (typeSpecialStrikes.length > 0) {
          return typeSpecialStrikes[0].specialStrikes
        }
        return this.type.specialStrikes
      }
      return []
    },
  },

  methods: {
    calculateValorsFromArray: (data) =>
      data.map((el) => el.valors).reduce((acc, valor) => acc + valor),

    validateMaxPoints(v, cap) {
      let result = 0
      if (v.length > 0) {
        result = this.calculateValorsFromArray(v)
      }

      if (v.length > 0 && (result > cap || this.valors < 0)) {
        this.isOverloaded = true
        this.dmgDown = Math.abs(10 * (result - cap))
      } else {
        this.isOverloaded = false
      }
      return true
    },

    decideValorsOperation(data, backup) {
      let elements = data || []
      let backupElements = backup || []

      if (backupElements.length >= elements.length) {
        const tmpData = data.map((el) => el.name)
        let diff = backupElements.filter((el) => !tmpData.includes(el.name))

        if (diff.length == 0) {
          diff = [elements[0]]
        }

        this.incrementValors(diff[0])
        return data
      }

      const tmpData = backupElements.map((el) => el.name)
      const diff = data.filter((el) => !tmpData.includes(el.name))
      this.decrementValors(diff[0])
      return data
    },

    incrementValors(removedItem) {
      let valorPoints = this.valorPoints
      if (!removedItem || typeof removedItem !== 'object') {
        return
      }

      this.valors += removedItem.valors || this.valorCap
      valorPoints[this.index] = this.valors
      valorPoints = [...valorPoints]

      this.$emit('updateValorPoints', valorPoints)
      this.$emit('updateValorCap', this.valorCapData)
    },

    decrementValors(addedItem) {
      let valorPoints = this.valorPoints
      if (!addedItem || typeof addedItem !== 'object') {
        return
      }

      this.valors -= addedItem.valors
      valorPoints[this.index] = this.valors
      valorPoints = [...valorPoints]

      this.$emit('updateValorPoints', valorPoints)
      this.$emit('updateValorCap', this.valorCapData)
    },
  },

  watch: {
    'np.type': function (type) {
      if (type) {
        const typeValors = type.valorSkills
        this.valorSkills = this.data.valorSkills

        let valorPoints = this.valorPoints
        const index = this.index

        if (typeValors) {
          // if (typeValors.length > 0) {
          //   const typeValorsWithoutInvalidNames = type.valorSkills.filter(
          //     (el) => el.name != ''
          //   )
          //   this.valorSkills = this.valorSkills.concat(
          //     typeValorsWithoutInvalidNames
          //   )
          // }

          if (type.name == 'Mágico' && !this.previouslyMagical) {
            this.valors += 1
            this.valorCapData += 1

            valorPoints[index] = this.valors
            valorPoints = [...valorPoints]
            this.$emit('updateValorPoints', valorPoints)
            this.$emit('updateValorCap', this.valorCapData)
            this.previouslyMagical = true
            return
          }

          if (this.previouslyMagical) {
            this.valors -= 1
            this.valorCapData -= 1

            valorPoints[index] = this.valors
            valorPoints = [...valorPoints]

            this.$emit('updateValorPoints', valorPoints)
            this.$emit('updateValorCap', this.valorCapData)
          }
          this.previouslyMagical = false
        }
      }
    },
    type: function (newType) {
      let old = this.np.type

      this.np.type = {
        ...old,
        name: newType.name,
      }
    },
    specialStrike: function (newSpecialStrike) {
      let old = this.np.specialStrike

      this.np.specialStrike = {
        ...old,
        name: newSpecialStrike.name,
      }
    },
  },
}
</script>

<style>
.warn {
  font-size: 0.85rem;
}
.warn *,
.warn,
.warn *::after,
.warn *::before {
  color: #ffc107 !important;
  border-color: #ffc107 !important;
}
</style>