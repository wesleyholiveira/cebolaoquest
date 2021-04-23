<template>
    <div class="parameters">
        <v-text-field 
            v-model="parameters[index]"
            :label="attribute"
            :class="negativeRuleErrorClass"
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
        {{statusPoints}}
        <v-btn @click="addParameter()" color="transparent" depressed>+</v-btn>
        <v-btn @click="subParameter()" color="transparent" depressed>-</v-btn>
    </div>
</template>

<script>
export default {

    props: {
        attribute: String,
        defaultProficiencyPoints: Number,
        proficiencyPoints: Number,
        statusPoints: Number,
        playerLevel: Number,
        negativeTraits: Array,
        isNegative: Boolean,
    },

    data: (instance) => ({
        index: 0,
        isNegativeData: false,
        negativeRuleErrorClass: '',
        baseParams: ['D', 'C', 'B', 'A', 'S'],
        parameters: [],
        negativeRules: [
            v => instance.isNegative || 'Escolha um campo para ser deficiente'
        ]
    }),

    created: function() {
        this.parameters = [].concat(this.baseParams)
        this.initialProficiencyPoints = this.proficiencyPoints
    },

    computed: {
        isTheCounterSynergy() {
            const result = this.negativeTraits.filter(
                e => e.name == 'Contra-sinergia'
            ).length > 0

            return result
        },
    },

    methods: {

        resetAttrModifiers() {
            const proficiencyPoints = this.initialProficiencyPoints
            this.parameters = [].concat(this.baseParams)
            this.parameters[this.index] = this.baseParams[this.index]
            this.isNegativeData = false

            this.$emit('updateParameters', this.parameters[this.index])
            this.$emit('updateProficiencyPoints', proficiencyPoints)
            this.$emit('updateIsNegative', this.isNegativeData)
        },

        addParameter() {
            const p = this.parameters
            let i = this.index

            let statusPoints = this.statusPoints
            if (statusPoints > 0) {
                if (i >= p.length - 1) {
                    return
                }
                
                i += 1
                statusPoints -= 1
               
                this.index = i
                this.parameters[i] = p[i]

                this.$emit('updateParameters', p[i])
                this.$emit('updateStatusPoints', statusPoints)
            }
        },

        subParameter() {
            const p = this.parameters
            let i = this.index

            let statusPoints = this.statusPoints
            if (i > 0 && statusPoints < this.playerLevel) {
                i -= 1
                statusPoints += 1

                this.index = i
                this.parameters[i] = p[i]

                this.$emit('updateParameters', p[i])
                this.$emit('updateStatusPoints', statusPoints)
                return
            }
            this.index = 0
        },

        turnToProficient() {
            const p = this.parameters
            const i = this.index

            let proficiencyPoints = this.proficiencyPoints
            if (proficiencyPoints > 0) {
                const newParam = `${p[i]}+`

                proficiencyPoints -= 1

                this.parameters[i] = newParam
                this.parameters = [...p]

                console.log(this.parameters, newParam)

                this.$emit('updateParameters', newParam)
                this.$emit('updateProficiencyPoints', proficiencyPoints)
            }
        },

        turnToDeficient() {
            const p = this.parameters
            const i = this.index

            if (!this.isNegative) {
                const newParam = `${p[i]}-`
    
                this.parameters[i] = newParam
                this.parameters = [...p]
                this.isNegativeData = true
                this.$emit('updateParameters', newParam)
                this.$emit('updateIsNegative', this.isNegativeData)
            }
        }
    },
}
</script>

<style scoped>
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