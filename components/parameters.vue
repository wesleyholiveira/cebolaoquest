<template>
  <div class="parameters">
    <v-dialog v-model="dialogProf" max-width="400">
      <v-card>
        <v-card-title class="headline">
          A zoeira está sem limites hein?!
        </v-card-title>
        <v-card-text>
          Você não pode distribuir tantas Origens Secretas.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialogProf = false"> Sair </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogUnderLevel" max-width="370">
      <v-card>
        <v-card-title class="headline">
          Você não tem nível suficiente para esta ação
        </v-card-title>
        <v-card-text>
          Para você conseguir subir um <strong>PARÂMETRO</strong> acima de
          <strong>B</strong> você deve estar pelo menos no
          <strong>nível 10</strong>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialogUnderLevel = false"> Sair </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-text-field v-model="attribute.rank" :label="attributeName" disabled />
    <div class="badges">
      <v-tooltip bottom v-if="attribute.name == 'AGI'">
        <template v-slot:activator="{ on, attrs }">
          <a v-on="on" v-bind="attrs"
            ><v-badge
              content="Burst of Speed"
              left
              color="orange darken-1"
            ></v-badge
          ></a>
        </template>
        <span
          v-html="
            index == 0
              ? 'Você não pode usar o Burst of Speed'
              : `Você pode usar o Burst of Speed <strong>${index}</strong> vez(es)`
          "
        >
        </span>
      </v-tooltip>
      <v-tooltip bottom v-if="attribute.name == 'NP'">
        <template v-slot:activator="{ on, attrs }">
          <a v-on="on" v-bind="attrs"
            ><v-badge content="Checkmate" left></v-badge
          ></a>
        </template>
        <span
          v-html="
            index == 0
              ? 'Você não pode usar o Checkmate'
              : `Você pode usar o Checkmate <strong>${index}</strong> vez(es)`
          "
        >
        </span>
      </v-tooltip>
      <v-tooltip bottom v-if="attribute.name == 'LUK'">
        <template v-slot:activator="{ on, attrs }">
          <a v-on="on" v-bind="attrs"
            ><v-badge
              content="Burst of Power"
              color="red darken-1"
              left
            ></v-badge
          ></a>
        </template>
        <span
          v-html="
            index == 0
              ? 'Você não pode usar o Burst of Power'
              : `Você pode usar o Burst of Power <strong>${index}</strong> vez(es)`
          "
        >
        </span>
      </v-tooltip>
      <v-btn @click="turnToProficient()" text color="green darken-1">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn @click="resetAttrModifiers()" text color="primary darken-1">
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </div>
    <!-- <a @click="turnToDeficient()" v-if="isCounterSynergy">
      <v-badge content="-" color="red darken-1" class="badge minus"></v-badge>
    </a> -->
    <v-btn @click="addAttribute()" color="transparent" depressed>+</v-btn>
    <v-btn @click="subAttribute()" color="transparent" depressed>-</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    attribute: Object,
    defaultStatusPoints: Number,
    defaultProficiencyPoints: Number,
    maxHp: Number,
    maxSp: Number,
    proficiencyPoints: Number,
    meritPoints: Number,
    statusPoints: Number,
    playerLevel: Number,
    negativeTraits: Array,
  },

  data: () => ({
    // backupMerit: 0,
    // isNegative: false,
    backupProficiency: 0,
    dialogProf: false,
    dialogUnderLevel: false,
    index: 0,
    negativeRuleErrorClass: '',
    baseParams: [
      { rank: 'D', value: 6, extra: 0 },
      { rank: 'C', value: 8, extra: 10 },
      { rank: 'B', value: 10, extra: 25 },
      { rank: 'A', value: 12, extra: 30 },
      { rank: 'S', value: 20, extra: 45 },
    ],
    parameters: [
      {
        id: null,
        name: 'STR',
        rank: 'D',
        value: 6,
        player_id: null,
      },
      {
        id: null,
        name: 'AGI',
        rank: 'D',
        value: 6,
        player_id: null,
      },
      {
        id: null,
        name: 'END',
        rank: 'D',
        value: 6,
        player_id: null,
      },
      {
        id: null,
        name: 'LUK',
        rank: 'D',
        value: 6,
        player_id: null,
      },
      {
        id: null,
        name: 'NP',
        rank: 'D',
        value: 6,
        player_id: null,
      },
      {
        id: null,
        name: 'MAN',
        rank: 'D',
        value: 6,
        player_id: null,
      },
    ],
    negativeRules: [],
    backup: [],
  }),

  mounted: function () {
    const index = this.baseParams
      .map((e) => e.rank)
      .indexOf(this.attribute.rank.replace(/[\-\+]/, ''))

    this.parameters = { ...this.attribute }
    this.index = index > -1 ? index : 0
    this.initialMeritPoints = this.meritPoints
  },

  computed: {
    attributeName() {
      const { index } = this
      const { name, value } = this.attribute
      let lukBonus = ''

      if (name == 'LUK' && index > 0) {
        lukBonus = ` +${index * 25}% CRIT`
      }

      if (name) {
        return `${name}: (${value})${lukBonus}`
      }

      return ''
    },
    // isCounterSynergy() {
    //   const isCounter = (
    //     (this.negativeTraits &&
    //       this.negativeTraits.filter((e) => e.name == 'Contra-sinergia')
    //         .length > 0)
    //   )
    //   if (!isCounter) {
    //     this.attribute.rank = this.attribute.rank.replace('-', '')
    //     this.isNegative = false
    //   }
    //   if (this.attribute.rank.lastIndexOf('-') > 0) {
    //     this.isNegative = true
    //   }
    //   return isCounter
    // },
  },

  methods: {
    resetAttrModifiers() {
      let proficiencyPoints = 0
      
      let profAttrs = this.attribute.rank.split('+')
      proficiencyPoints = profAttrs.length - 1
      if (profAttrs.length < 1) {
        proficiencyPoints = this.proficiencyPoints + this.backupProficiency
      }

      this.index = 0
      this.attribute.rank = this.baseParams[0].rank
      this.attribute.value = this.baseParams[0].value
      // this.isNegative = false

      this.$emit('updateProficiencyPoints', proficiencyPoints)
      this.backupProficiency = 0
    },

    addAttribute() {
      let p = this.baseParams
      let i = this.index

      let statusPoints = this.statusPoints

      if (statusPoints > 0) {
        if (i >= 2 && this.playerLevel < 10) {
          this.dialogUnderLevel = true
          return
        }

        if (i >= p.length - 1) {
          return
        }

        i += 1
        statusPoints -= 1

        this.index = i
        this.attribute.rank = p[i].rank
        this.attribute.value = p[i].value

        if (this.attribute.name == 'END') {
          this.$emit('updateMaxHp', this.maxHp + p[i].extra)
        }

        if (this.attribute.name == 'MAN') {
          this.$emit('updateMaxSp', this.maxSp + p[i].extra)
        }

        this.$emit('updateProficiencyPoints', this.defaultProficiencyPoints)
        this.$emit('updateStatusPoints', statusPoints)
      }
    },

    subAttribute() {
      let p = this.baseParams
      let i = this.index

      let statusPoints = this.statusPoints
      if (i > 0) {
        if (this.attribute.name == 'END') {
          this.$emit('updateMaxHp', this.maxHp - p[i].extra)
        }

        if (this.attribute.name == 'MAN') {
          this.$emit('updateMaxSp', this.maxSp - p[i].extra)
        }

        i -= 1
        statusPoints += 1

        this.index = i
        this.attribute.rank = p[i].rank
        this.attribute.value = p[i].value

        this.$emit('updateProficiencyPoints', this.defaultProficiencyPoints)
        this.$emit('updateStatusPoints', statusPoints)
        return
      }
      this.index = 0
    },

    turnToProficient() {
      const { rank, value } = this.attribute
      let profSize = (rank.match(/[+]/g) || []).length
      let proficiencyPoints = this.proficiencyPoints

      profSize = profSize == 0 ? 1 : profSize

      if (profSize >= 2) {
        this.dialogProf = true
        return
      }

      if (proficiencyPoints > 0) {
        const newParam = `${this.attribute.rank}+`

        proficiencyPoints -= 1

        this.backupProficiency += 1

        this.attribute.rank = newParam
        this.attribute.value = Math.floor(
          value + this.baseParams[this.index].value * 0.5
        )
        this.$emit('updateProficiencyPoints', proficiencyPoints)
      }
    },

    // turnToDeficient() {
    //   const p = this.baseParams
    //   const i = this.index

    //   if (!this.isNegative) {
    //     const newParam = `${p[i]}-`
    //     this.attribute.rank = newParam

    //     this.isNegative = true
    //   }
    // },
  },
}
</script>

<style>
.parameters {
  display: flex;
  align-items: center;
  position: relative;
}
.parameters .badges {
  font-size: 0.4rem;
  top: -10px;
  right: 0px;
  position: absolute;
}
</style>