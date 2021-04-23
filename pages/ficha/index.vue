<template>
  <v-row>
    <v-col class="text-center">
      <h1>Cadastro da Ficha</h1>
      <v-form ref="form" v-model="valid" lazy-validation style="position: relative">
        <v-row>
          <v-col cols="12">
            <v-alert :type="response.status" v-if="response.status != undefined">
              {{response.text}}
            </v-alert>
            Méritos: {{merits}}
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            lg="6"
            sm="12"
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nome"
              required
            />
          </v-col>
          <v-col
            cols="12"
            lg="6"
            sm="12"
          >  
            <v-combobox
              v-model="currentClass"
              :items="classes"
              :rules="classRules"
              label="Classe"
              required
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            sm="12"
          >
            <v-text-field
              v-model="level"
              label="Level"
              disabled
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            sm="12"
          >
            <v-text-field
              v-model="exp"
              label="EXP"
              disabled
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            sm="12"
          >
            <v-text-field
              v-model="funds"
              label="Fundos"
              disabled
            />
          </v-col>
          <v-col
            cols="12"
            lg="6"
            sm="12"
          >
            <v-combobox
                v-model="alignment"
                :items="alignments"
                :rules="alignmentRules"
                label="Personalidade"
                required
            />
          </v-col>
          <v-col
            cols="12"
            lg="6"
            sm="12"
          >
            <v-combobox
                v-model="principle"
                :items="principles"
                :rules="principleRules"
                label="Principio"
                required
            />
          </v-col>
          <v-col cols="12">
              <h2>Parâmetros</h2>
          </v-col>
          <template v-for="(p, i) in attributes">
              <v-col :key="i" cols="12" lg="2" md="4" sm="12">
                <parameters 
                  :attribute="p"
                  :playerLevel="level"
                  :statusPoints="statusPoints"
                  :negativeTraits="selectedNegativeTraits"
                  :proficiencyPoints="proficiencyPoints"
                  :defaultProficiencyPoints="defaultProficiencyPoints"
                  :isNegative="isNegative"
                  v-on:updateParameters="parameters[p] = $event"
                  v-on:updateStatusPoints="statusPoints = $event"
                  v-on:updateMeritPoints="merits = $event"
                  v-on:updateProficiencyPoints="proficiencyPoints = $event"
                  v-on:updateIsNegative="isNegative = $event"
                ></parameters>
              </v-col>
          </template>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            lg="4"
            sm="12"
          >
            <v-combobox
              v-model="selectedStratagems"
              :items="stratagems"
              :rules="stratagemsRules"
              item-text="name"
              attach
              chips
              label="Estratagemas"
              multiple
              deletable-chips
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            sm="12"
          >
            <v-combobox
              v-model="selectedNegativeTraits"
              :items="negativeTraits"
              :rules="negativeTraitsRules"
              item-text="name"
              attach
              chips
              label="Características Negativas"
              multiple
              deletable-chips
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            sm="12"
          >
            <v-combobox
              v-model="selectedMartialSkills"
              :items="martialSkills"
              :rules="martialSkillsRules"
              item-text="name"
              attach
              chips
              label="Habilidades Marciais"
              multiple
              deletable-chips
            />
          </v-col>
          <v-col cols="12">
            <v-combobox
              v-model="selectedSpecialTechniques"
              :items="specialTechniques"
              :rules="specialTechniquesRules"
              item-text="name"
              attach
              chips
              label="Técnicas Especiais"
              multiple
            >
              <template v-slot:selection="{item}">
                <v-chip 
                  @click:close="selectedSpecialTechniques = excludeItem(selectedSpecialTechniques, item)"
                  :color="item.rarity"
                  close
                >
                  <span>{{item.name}}</span>
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
        </v-row>
        <template v-for="(item, key) in noblePhantasms">
          <noble-phantasm 
            :np="item"
            :data="dataNoblePhantasms" 
            :index="key"
            :key="key"
            :valorPoints="valorPoints"
            :valorCap="capValorPoints"
            v-on:updateSpecialStrike="item.specialStrike = $event"
            v-on:updateValorPoints="valorPoints = $event"
          ></noble-phantasm>
        </template>
        <v-row>
          <v-col cols="12">
            <v-btn 
              v-if="noblePhantasms.length > 0"
              style="right: 90px"
              title="Remover Fantasma Nobre"
              right
              absolute
              color="red darken-1"
              @click="noblePhantasms.pop();valorPoints.pop()"
            >
              <v-icon>mdi-minus-circle</v-icon>
            </v-btn>
            <v-btn
              title="Adicionar Fantasma Nobre"
              right
              absolute
              color="green darken-1"
              @click="noblePhantasms.push({});valorPoints.push(defaultValorPoints)"
            >
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-dialog
              v-model="dialog"
              v-if="hasPointsNotSpent()"
              persistent
              max-width="350"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :disabled="!valid"
                  color="green darken-1"
                  class="mr-4"
                  style="margin-bottom: 320px;margin-top: 80px;"
                  v-bind="attrs"
                  v-on="on"
                >
                  Enviar
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  Você não tá comendo bola?
                </v-card-title>
                <v-card-text>
                  Você ainda possui pontos não distruídos e caso não sejam distribuídos <strong>serão perdidos</strong>. Desejar continuar mesmo assim?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red darken-1"
                    text
                    @click="dialog = false"
                  >
                    Não
                  </v-btn>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false;validate()"
                  >
                    Sim
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn
              v-if="!hasPointsNotSpent()"
              :disabled="!valid"
              color="green darken-1"
              class="mr-4"
              style="margin-bottom: 320px;margin-top: 80px;"
              @click="$refs.form.reset()"
            >
              Enviar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import goTo from 'vuetify/es5/services/goto'
import dataNP from '../../mock/np'
import dataStratagems from '../../mock/stratagems'
import dataMartialSkills from '../../mock/martialSkills'
import dataSpecialTechniques from '../../mock/specialTechniques'
import dataNegativeTraits from '../../mock/negativeTraits'
export default {
  created() {
    this.merits = this.defaultMerits
    this.valorPoints = []
    this.statusPoints = this.defaultStatusPoints
    this.proficiencyPoints = this.defaultProficiencyPoints
    this.capValorPoints = this.defaultValorPoints
    this.capMerits = this.defaultCapMerits
    this.capMeritsStratagens = this.defaultRestrictedMeritsCap
    this.capMeritsNegativeTraits = this.defaultRestrictedMeritsCap
  },

  data: (instance) => ({
    dialog: false,
    valid: true,
    isNegative: false,
    response: {},
    name: '',
    level: 1,
    exp: 0,
    funds: 0,
    merits: 4,
    valorPoints: [],
    defaultMerits: 4,
    defaultValorPoints: 4,
    defaultStatusPoints: 1,
    defaultProficiencyPoints: 1,
    defaultRestrictedMeritsCap: 3,
    defaultCapMerits: 7,
    statusPoints: 0,
    proficiencyPoints: 1,
    capMerits: 0,
    capValorPoints: 0,
    capMeritsStratagens: 0,
    capMeritsNegativeTraits: 0,
    alignments: ['Bom', 'Neutro', 'Maligno'],
    principles: ['Leal', 'Neutro', 'Caótico'],
    attributes: ['STR', 'AGI', 'MAN', 'END', 'LUK', 'NP'],
    noblePhantasms: [],
    selectedStratagems: [],
    selectedNegativeTraits: [],
    selectedMartialSkills: [],
    selectedSpecialTechniques: [],
    selectedType: [],
    selectedBaseModel: '',
    backupStratagems: [],
    backupNegativeTraits: [],
    backupMartialSkills: [],
    backupSpecialTechniques: [],
    parameters: {},
    principle: '',
    alignment: '',
    currentClass: '',
    classes: ['Archer', 'Assassin', 'Caster', 'Berserker', 'Foreigner', 'Rider', 'Lancer', 'Avenger', 'Saber', 'Shielder'].sort(),
    nameRules: [
      v => !!v || 'Este campo é obrigatório'
    ],
    classRules: [
      v => !!v || 'Este campo é obrigatório',
      v => instance.classes.includes(v) || 'Esta classe não existe'
    ],
    alignmentRules: [
      v => !!v || 'Este campo é obrigatório',
      v => instance.alignments.includes(v) || 'Esta personalidade não existe'
    ],
    principleRules: [
      v => !!v || 'Este campo é obrigatório',
      v => instance.principles.includes(v) || 'Este principio não existe'
    ],
    stratagemsRules: [
      v => v.filter(el => !el.name).length < 1 || 'Há pelo menos um estratagema inválido',
      v => instance.validateMaxPoints(v, instance.capMeritsStratagens),
    ],
    negativeTraitsRules: [
      v => v.filter(el => !el.name).length < 1 || 'Há pelo menos uma caracteristica negativa inválida',
      v => instance.validateMaxPoints(v, instance.capMeritsNegativeTraits),
    ],
    martialSkillsRules: [
      v => v.filter(el => !el.name).length < 1 || 'Há pelo menos uma habilidade marcial inválida',
      v => instance.validateMaxPoints(v, instance.capMerits),
    ],
    specialTechniquesRules: [
      v => v.filter(el => !el.name).length < 1 || 'Há pelo menos uma técnica especial inválida',
      v => instance.validateMaxPoints(v, instance.capMerits),
    ],
    dataNoblePhantasms: dataNP,
    stratagems: dataStratagems,
    negativeTraits: dataNegativeTraits,
    martialSkills: dataMartialSkills,
    specialTechniques: dataSpecialTechniques
  }),
  methods: {
    
    hasPointsNotSpent() {
      return this.merits > 0 ||
             this.calculateValorPoints() > 0 ||
             this.statusPoints > 0 ||
             this.proficiencyPoints > 0
    },

    async validate() {
      if (this.$refs.form.validate()) {
        const params = this.parameters
        const attrs = Object.keys(params)
        let fullAttributes = this.attributes.filter(
          attr => !attrs.includes(attr)
        ).map(attr => ({
          [attr]: 'D'
        }))

        if (attrs.length > 0) {
          fullAttributes = fullAttributes.concat(
            Object.entries(params).map(
              ([key, value]) => ({
                [key]: value
              })
            )
          )
        }

        // const valorPoints = this.calculateValorsFromArray(this.valorPoints)
        const { token, id } = this.$auth.user
        const { data } = await this.$axios.post('/api/player', {
          name: this.name,
          job: this.currentClass,
          level: this.level,
          exp: this.exp,
          funds: this.funds,
          meritPoints: 0,
          statusPoints: 0,
          proficiencyPoints: 0,
          alignment: this.alignment,
          principle: this.principle,
          attributes: fullAttributes,
          stratagems: this.selectedStratagems,
          negativeTraits: this.selectedNegativeTraits,
          martialSkills: this.selectedMartialSkills,
          specialTechniques: this.selectedSpecialTechniques,
          noblePhantasms: this.noblePhantasms,
          valorPoints: 0,
          userId: id
        }, {
          headers: {
            Authorization: token
          }
        });

        this.response = {
          status: data.statusMessage,
          text: data.data
        }

        if (this.response.status != 'error') {
          this.backupStratagems = []
          this.backupNegativeTraits = []
          this.backupMartialSkills = []
          this.backupSpecialTechniques = []
          this.capMerits = 0
          this.name = '',
          this.currentClass = '',
          this.merits = this.defaultMerits
          this.valorPoints = [this.defaultValorPoints]
          this.statusPoints = this.defaultStatusPoints
          this.proficiencyPoints = this.defaultProficiencyPoints
          this.alignment = []
          this.principle = []
          this.parameters = this.attributes
          this.selectedStratagems = []
          this.selectedNegativeTraits = []
          this.selectedMartialSkills = []
          this.selectedSpecialTechniques = []
          this.noblePhantasms = []
          goTo(0)
        }
      }
    },

    excludeItem(src, element) {
      return src.filter(e => element.name != e.name)
    },

    calculateMeritsFromArray: (data) => data.map(el => el.merits).reduce((acc, merit) => acc + merit),
    calculateValorsFromArray: (data) => data.map(el => el).reduce((acc, valor) => acc + valor),
    calculateValorPoints() {
      return this.calculateValorsFromArray(this.valorPoints)
    },

    validateMaxPoints(v, cap) {
      let validation = (
        v.length > 0 && 
        this.calculateMeritsFromArray(v) > cap
       ) ? `A soma dos méritos ultrapassam o máximo de ${cap} pontos de méritos` : true

       if (this.merits < 0) {
         validation = 'Você não pode gastar mais pontos de mérito do que possui.'
       }

       return validation || true
      
    },

    decideMeritsOperation(data, backup) {
        if (backup.length > data.length) {
            const tmpData = data.map(el => el.name)
            const diff = backup.filter(el => !tmpData.includes(el.name))
            this.incrementMerits(diff[0])
            return data
        }

        const tmpData = backup.map(el => el.name)
        const diff = data.filter(el => !tmpData.includes(el.name))
        this.decrementMerits(diff[0])
        return data
    },

    decideMeritsOperationNegativeTraits(data, backup) {
        if (backup.length > data.length) {
          const tmpData = data.map(el => el.name)
          const diff = backup.filter(el => !tmpData.includes(el.name))
          this.decrementMerits(diff[0])
          
          return data
        }

        const tmpData = backup.map(el => el.name)
        const diff = data.filter(el => !tmpData.includes(el.name))
        this.incrementMerits(diff[0])
        return data
    },

    incrementMerits(removedItem) {
      if (!removedItem) {
        return
      }
      this.merits += removedItem.merits
    },

    decrementMerits(addedItem) {
      if (!addedItem) {
        return
      }
      
      this.merits -= addedItem.merits
    },
  },
  watch: {
    selectedStratagems(stratagems) {
      this.backupStratagems = this.decideMeritsOperation(
        stratagems,
        this.backupStratagems
      )
    },
    selectedMartialSkills(martialSkills) {
      this.backupMartialSkills = this.decideMeritsOperation(
        martialSkills,
        this.backupMartialSkills,
      )
    },
    selectedSpecialTechniques(specialTechniques) {
      this.backupSpecialTechniques = this.decideMeritsOperation(
        specialTechniques,
        this.backupSpecialTechniques
      )
    },
    selectedNegativeTraits(negativeTraits) {
      this.backupNegativeTraits = this.decideMeritsOperationNegativeTraits(
        negativeTraits,
        this.backupNegativeTraits
      )
      this.isNegative = false
    }
  },
}
</script>

<style>
.block {
  width: 100%;
  display: block;
}
</style>