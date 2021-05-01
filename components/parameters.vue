<template>
    <div class="parameters">
        <v-text-field
            v-model="attribute.rank"
            :label="attribute.name"
            disabled
        />
        <a @click="turnToProficient()">
            <v-badge content="+" color="green darken-1" class="badge plus"></v-badge>
        </a>
        <a @click="resetAttrModifiers()">
            <v-badge icon="mdi-reload" class="badge reload"></v-badge>
        </a>
        <a @click="turnToDeficient()" v-if="isTheCounterSynergy">
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
        statusPoints: Number,
        playerLevel: Number,
        negativeTraits: Array,
    },

    data: () => ({
        index: 0,
        defaultStatusPoints: 0,
        negativeRuleErrorClass: '',
        baseParams: ['D', 'C', 'B', 'A', 'S'],
        parameters: {
            STR: {
                id: null,
                name: 'STR',
                rank: 'D',
            },
            AGI: {
                id: null,
                name: 'AGI',
                rank: 'D',
            },
            END: {
                id: null,
                name: 'END',
                rank: 'D',
            },
            MAN: {
                id: null,
                name: 'MAN',
                rank: 'D',
            },
            NP: {
                id: null,
                name: 'NP',
                rank: 'D',
            },
            LUK: {
                id: null,
                name: 'LUK',
                rank: 'D',
            }
        },
        negativeRules: [],
        backup: [],
    }),

    created: function() {
        this.index = this.baseParams.indexOf(this.attribute.rank)
        this.initialProficiencyPoints = this.proficiencyPoints
        this.defaultStatusPoints = this.statusPoints
    },

    computed: {
        isTheCounterSynergy() {
            const result = (this.negativeTraits) && this.negativeTraits.filter(
                e => e.name == 'Contra-sinergia'
            ).length > 0

            // if (result) {
            //     this.negativeData = true
            //     this.$emit('updateIsNegative', this.isNegativeData)
            // } else {
            //     this.negativeData = false
            //     this.$emit('updateIsNegative', this.isNegativeData)
            //     this.$emit('updateStatusPoints', this.defaultStatusPoints)
            //     // if (this.backup.filter(el => el.name == 'Contra-sinergia').length > 0) {
            //     //     this.baseParams.forEach(param => this.$emit('updateParameters', param))
            //     // }
            // }

            // this.backup = this.negativeTraits

            return result
        },
    },

    methods: {

        resetAttrModifiers() {
            const proficiencyPoints = this.initialProficiencyPoints
            this.parameters = {
                ...this.attribute,
                rank: this.baseParams[0],
            }

            this.$emit('updateParameters', this.parameters)
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
                this.parameters = {
                    ...this.attribute,
                    rank: this.baseParams[i],
                }

                this.$emit('updateParameters', this.parameters)
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
                this.parameters = {
                    ...this.attribute,
                    rank: this.baseParams[i],
                }

                this.$emit('updateParameters', this.parameters)
                this.$emit('updateStatusPoints', statusPoints)
                return
            }
            this.index = 0
        },

        turnToProficient() {
            const p = this.baseParams
            const i = this.index

            let proficiencyPoints = this.proficiencyPoints
            if (proficiencyPoints > 0) {
                const newParam = `${p[i]}+`

                proficiencyPoints -= 1

                this.parameters = {
                    ...this.attribute,
                    rank: newParam
                }

                this.$emit('updateParameters', this.parameters)
                this.$emit('updateProficiencyPoints', proficiencyPoints)
            }
        },

        turnToDeficient() {
            const p = this.parameters
            const i = this.index

            const newParam = `${p[i]}-`

            this.parameters[i] = newParam
            this.parameters = [...p]
            this.$emit('updateParameters', newParam)
            // this.$emit('updateIsNegative', this.isNegativeData)
        }
    },
}
</script>

<style>
.parameters {
    display: flex;
    align-items: center;
    position: relative
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