<template>
  <div class="parameters">
    <v-dialog v-model="dialogProf" max-width="400">
      <v-card>
        <v-card-title class="headline">
          A zoeira está sem limites hein?!
        </v-card-title>
        <v-card-text>
          Você não pode ser tão proficiente assim porque a vida é INJUSTA.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialogProf = false"> Sair </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-text-field v-model="attribute.rank" :label="attribute.name" disabled />
    <a @click="turnToProficient()">
      <v-badge content="+" color="green darken-1" class="badge plus"></v-badge>
    </a>
    <a @click="resetAttrModifiers()">
      <v-badge icon="mdi-reload" class="badge reload"></v-badge>
    </a>
    <a @click="turnToDeficient()" v-show="isCounterSynergy">
      <v-badge content="-" color="red darken-1" class="badge minus"></v-badge>
    </a>
    <v-btn @click="addAttribute()" color="transparent" depressed>+</v-btn>
    <v-btn @click="subAttribute()" color="transparent" depressed>-</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    attribute: Object,
    defaultProficiencyPoints: Number,
    proficiencyPoints: Number,
    meritPoints: Number,
    statusPoints: Number,
    playerLevel: Number,
    negativeTraits: Array,
  },

  data: () => ({
    // backupMerit: 0,
    isNegative: false,
    dialogProf: false,
    index: 0,
    defaultStatusPoints: 0,
    negativeRuleErrorClass: '',
    baseParams: ['D', 'C', 'B', 'A', 'S'],
    parameters: [{
        id: null,
        name: 'STR',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'AGI',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'END',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'LUK',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'NP',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'MAN',
        rank: 'D',
        player_id: null,
      }],
    negativeRules: [],
    backup: [],
  }),

  created: function () {
    this.parameters = { ...this.attribute }
    this.index = this.baseParams.indexOf(this.attribute.rank.replace(/[\-\+]/, ''))
    this.initialProficiencyPoints = this.proficiencyPoints
    this.initialMeritPoints = this.meritPoints
    this.defaultStatusPoints = this.statusPoints
  },

  computed: {
    isCounterSynergy() {
      const isCounter = (
        (this.negativeTraits &&
          this.negativeTraits.filter((e) => e.name == 'Contra-sinergia')
            .length > 0)
      )

      if (!isCounter) {
        this.attribute.rank = this.attribute.rank.replace('-', '')
        this.isNegative = false
      }

      if (this.attribute.rank.lastIndexOf('-') > 0) {
        this.isNegative = true
      }

      return isCounter
    },
  },

  methods: {
    resetAttrModifiers() {
      const proficiencyPoints = this.initialProficiencyPoints

      this.attribute.rank = this.baseParams[0]
      this.isNegative = false
      this.$emit('updateProficiencyPoints', proficiencyPoints)
    },

    addAttribute() {
      let p = this.baseParams
      let i = this.index
      let statusPoints = this.statusPoints

      if (statusPoints > 0) {
        if (i >= p.length - 1) {
          return
        }

        i += 1
        statusPoints -= 1

        this.index = i
        this.attribute.rank = this.baseParams[i]
        this.$emit('updateStatusPoints', statusPoints)
      }
    },

    subAttribute() {
      let i = this.index

      let statusPoints = this.statusPoints
      if (i > 0 && statusPoints < this.playerLevel) {
        i -= 1
        statusPoints += 1

        this.index = i
        this.attribute.rank = this.baseParams[i]

        this.$emit('updateStatusPoints', statusPoints)
        return
      }
      this.index = 0
    },

    turnToProficient() {
      const { rank } = this.attribute
      let proficiencyPoints = this.proficiencyPoints
      console.log('POINTS', proficiencyPoints)

      if ((rank.match(/[+]/g) || []).length >= 2) {
        this.dialogProf = true
        return
      }

      if (proficiencyPoints > 0) {
        const newParam = `${this.attribute.rank}+`

        proficiencyPoints -= 1

        this.attribute.rank = newParam
        this.$emit('updateProficiencyPoints', proficiencyPoints)
      }
    },

    turnToDeficient() {
      const p = this.baseParams
      const i = this.index

      if (!this.isNegative) {
        const newParam = `${p[i]}-`
        this.attribute.rank = newParam
  
        this.isNegative = true
      }
    },
  },
}
</script>

<style>
.parameters {
  display: flex;
  align-items: center;
  position: relative;
}
.parameters .badge {
  top: 15px;
  left: 0;
  cursor: pointer;
  position: absolute;
}
.parameters .badge.plus {
  left: 35px;
}
.parameters .badge.reload {
  left: 70px;
}
.parameters .badge.minus {
  left: 108px;
}
</style>