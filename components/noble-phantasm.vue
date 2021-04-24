<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Fantasma Nobre: {{index + 1}}</h2>
        Valors: {{valorPoints[index]}}
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <v-text-field
          v-model="np.name"
          label="Nome"
        />
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <v-combobox
          v-model="np.type"
          :items="data.type"
          item-text="name"
          label="Tipo"
          @change="selectedSpecialStrike = null;valorSkills = data.valorSkills"
        />
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <v-combobox
          v-model="selectedSpecialStrike"
          :items="!!np.type ? np.type.specialStrikes : []"
          chips
          item-text="name"
          label="Golpe Especial"
          deletable-chips
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
          :items="valorSkills"
          chips
          item-text="name"
          label="Efeitos"
          multiple
          icon
          deletable-chips
        />
        <v-combobox
          v-if="isOverloaded"
          v-model="np.effects"
          :rules="rules.effect"
          :items="valorSkills"
          chips
          item-text="name"
          label="Efeitos"
          multiple
          icon
          deletable-chips
          class="warn"
        />

        <span v-if="isOverloaded" class="warn">
          Você está sobrecarregado e como consequência seu armamento lendário terá: {{dmgDown}} a menos de dano
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: Object,
    np: Object,
    index: Number,
    valorPoints: Array,
    valorCap: Number
  },

  created() {
    this.valorSkills = this.data.valorSkills
    this.valors = this.valorPoints[this.index]
    this.valorCapData = this.valorCap
  },

  data: (instance) => ({
    dmgDown: 0,
    valorCapData: 0,
    previouslyMagical: false,
    isOverloaded: false,
    valorSkills: [],
    backupEffects: [],
    selectedSpecialStrike: null,
    valorEffects: 0,
    valors: 0,
    rules: {
      effect: [
          v => v.filter(el => !el.name).length < 1 || 'Há pelo menos um efeito inválido',
          v => instance.validateMaxPoints(v, instance.valors, instance.valorCap)
      ]
    },
  }),

  methods: {

    calculateValorsFromArray: (data) => data.map(el => el.valors).reduce((acc, merit) => acc + merit),

    validateMaxPoints(v, points, cap) {
      if ((
          v.length > 0 && 
          this.calculateValorsFromArray(v) > cap
       ) || points < 0) {
         this.isOverloaded = true
         this.dmgDown = Math.abs(10 * this.valors)
       } else {
         this.isOverloaded = false
       }
       return true
    },

    decideValorsOperation(data, backup) {
        let elements = data
        let backupElements = backup

        if (backupElements.length > elements.length) {
            const tmpData = data.map(el => el.name)
            const diff = backupElements.filter(el => !tmpData.includes(el.name))
            this.incrementValors(diff[0])
            return data
        }

        const tmpData = backupElements.map(el => el.name)
        const diff = data.filter(el => !tmpData.includes(el.name))
        this.decrementValors(diff[0])
        return data
    },

    incrementValors(removedItem) {
      if (!removedItem || typeof removedItem !== 'object') {
        return
      }
    
      this.valors += removedItem.valors
    },

    decrementValors(addedItem) {
      if (!addedItem || typeof addedItem !== 'object') {
        return
      }
      
      this.valors -= addedItem.valors
    }
  },

  watch: {
    'np.type': function(type) {
      if (type) {
        const typeValors = type.valorSkills
        this.valorSkills = this.data.valorSkills
      
        let valorPoints = this.valorPoints
        const index = this.index
  
        if (typeValors.length > 0) {
          const typeValorsWithoutInvalidNames = type.valorSkills.filter(el => el.name != '')
          this.valorSkills = this.valorSkills.concat(typeValorsWithoutInvalidNames)
        }
  
        if (type.name == 'Mágico') {
          this.valors += 1
          this.valorCapData += 1
  
          valorPoints[index] = this.valors
          this.previouslyMagical = true
          this.$emit('updateValorPoints', valorPoints)
          return
        }
        
        if (this.previouslyMagical) {
          this.valors -= 1
          this.valorCap -= 1
  
          valorPoints[index] = this.valors
          this.previouslyMagical = false
          this.$emit('updateValorPoints', valorPoints)
        }
      }
    },
    'np.effects': function(effects) {
      const valorPoints = this.valorPoints
      this.backupEffects = this.decideValorsOperation(
        effects,
        this.backupEffects
      )

      valorPoints[this.index] = this.valors
      this.$emit('updateValorPoints', valorPoints)
    },
    selectedSpecialStrike(specialStrike) {
      this.$emit('updateSpecialStrike', specialStrike)
    }
  }
}
</script>

<style>
.warn {
    font-size: .85rem;
}
.warn *, .warn, .warn *::after, .warn *::before {
  color: #ffc107 !important;
  border-color:#ffc107 !important;
}
</style>