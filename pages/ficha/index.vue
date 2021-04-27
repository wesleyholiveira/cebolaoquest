<template>
  <v-row>
    <v-col cols="12">
      <v-alert :type="response.status" v-if="response.status != undefined">
        {{response.text}}
      </v-alert>
    </v-col>
    <v-col cols="12">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="step > 1" :rules="[() => valid]">
            Cadastro da Ficha
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="step > 2">
            Informações do Personagem
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <ficha-info
            :meritPoints="merits"
            :statusPoints="statusPoints"
            :proficiencyPoints="proficiencyPoints"
            :valorPoints="sumOfValors"
            class="mt-5"
          />
          <v-stepper-content step="1">
            <v-form ref="form" v-model="valid" lazy-validation style="position: relative">
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  sm="12"
                >
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nome *"
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
                    label="Classe *"
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
                      label="Personalidade *"
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
                      label="Principio *"
                  />
                </v-col>
                <v-col cols="12">
                    <h2 class="text-center">Parâmetros</h2>
                </v-col>
                <template v-for="(p, i) in attributes">
                    <v-col :key="i" cols="12" lg="4" md="6" sm="12">
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
                    deletable-chips
                  />
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
                  v-on:updateValorPoints="valorPoints = $event;sumOfValors = calculateValorPoints()"
                  v-on:updateValorCap="capValorPoints = $event"
                ></noble-phantasm>
              </template>
              <v-row>
                <v-col cols="12">
                  <v-dialog
                    v-model="meritsDialog"
                    max-width="400"
                  >
                    <v-card>
                      <v-card-title class="headline">
                        Então você é um ixxxpertinho?!
                      </v-card-title>
                      <v-card-text>
                        Tentando gastar mais pontos de méritos do que realmente tem? Vai assistir a live do
                          <a 
                            href="https://twitch.tv/cebolaolunar"
                            target="_blank"
                            style="font-size: 17px"
                          >
                            Cebolão Lunar
                          </a>.
                            Garanto que é mais produtivo do que tentar burlar o sistema.
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          @click="meritsDialog = false"
                        >
                          Sair
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn 
                    v-if="noblePhantasms.length > 0"
                    style="right: 90px"
                    title="Remover Fantasma Nobre"
                    right
                    absolute
                    color="red darken-1"
                    @click="removeNoblePhantasm()"
                  >
                    <v-icon>mdi-minus-circle</v-icon>
                  </v-btn>
                  <v-btn
                    title="Adicionar Fantasma Nobre"
                    right
                    absolute
                    color="green darken-1"
                    @click="addNoblePhantasm()"
                  >
                    <v-icon>mdi-plus-circle</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn
                    :disabled="!valid"
                    color="green darken-1"
                    class="mr-4"
                    style="margin-bottom: 80px;margin-top: 80px;"
                    @click="validateAndGo()"
                  >
                    Próximo
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form ref="extraInfosForm" lazy-validation v-model="extraInfosValid" style="position: relative" class="extraInfos">
              <v-row>
                <v-col cols="12">
                  <v-container class="text-center">
                    <v-row>
                      <v-col cols="12" class="noPaddingBottom">
                        <h2>Aparência</h2>
                        <v-file-input
                          v-model="referenceImages"
                          placeholder="Suba suas imagens de refência do personagem"
                          label="Imagens de Referência"
                          class="noPaddingTop"
                          accept="image/png, image/jpeg, image/gif"
                          multiple
                        >
                          <template v-slot:selection="{ index, text }">
                            <v-chip
                              small
                              label
                              color="primary"
                              close
                              @click:close="removeItem(index)"
                            >
                              {{ text }}
                            </v-chip>
                          </template>
                        </v-file-input>
                      </v-col>
                      <v-col cols="12" class="noPaddingBottom">
                        <h2>Características Físicas</h2>
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field v-model="extraInfos.species" label="Espécie" class="noPaddingTop" />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-select
                          v-model="extraInfos.sex"
                          :items="sexs"
                          label="Sexo"
                          class="noPaddingTop"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-combobox
                          v-model="extraInfos.height"
                          :items="generateHeights(10)"
                          label="Altura"
                          item-text="formattedUnit"
                          item-value="unit"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-combobox
                          v-model="extraInfos.weight"
                          :items="generateWeights(500)"
                          label="Peso"
                          item-text="formattedWeight"
                          item-value="unit"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-text-field
                          v-model="extraInfos.locality"
                          label="Local de origem"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-combobox
                          v-model="extraInfos.age"
                          :items="generateAges(5000)"
                          item-text="formattedUnit"
                          item-value="unit"
                          label="Idade"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-combobox
                          v-model="extraInfos.bloodType"
                          :items="bloodTypes"
                          label="Tipo Sanguíneo"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="extraInfos.birthday"
                              label="Data de Nascimento"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            ref="picker"
                            v-model="extraInfos.birthday"
                            max="5000-12-31"
                            min="0001-01-01"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12" class="noPaddingBottom">
                        <h2>Informações Pessoais</h2>
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="extraInfos.addressSelfAs"
                          label="Autodenominação"
                          class="noPaddingTop"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="extraInfos.talents"
                          label="Talentos"
                          class="noPaddingTop"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="extraInfos.likes"
                          label="Gosta de"
                          placeholder="Insira brevemente o que seu personagem gosta"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="extraInfos.dislikes"
                          label="Não gosta de"
                          placeholder="Insira brevemente o que seu personagem NÃO gosta"
                        />
                      </v-col>
                      <v-col cols="12" class="noPaddingBottom">
                        <h2>História & Background</h2>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea v-model="extraInfos.abstract" label="Resumo" outlined placeholder="Insira brevemente um resumo da história do personagem" />
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <historia-ficha
                          v-for="(item, i) in extraInfos.stories"
                          :absolute="true"
                          :extraInfos="item"
                          :key="i"
                          :stories="extraInfos.stories"
                          v-on:updateStories="extraInfos.stories = $event"
                        >
                        </historia-ficha>
                      </v-col>
                    </v-row>
                    
                  </v-container>
                </v-col>
                <v-col cols="12">
                  <div class="text-center">
                    <v-btn
                      class="mr-4"
                      @click="step = 1"
                    >
                      Voltar
                    </v-btn>
                    <v-dialog
                      v-model="dialog"
                      persistent
                      max-width="350"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          :disabled="!valid"
                          color="green darken-1"
                          class="mr-4"
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
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
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

  data: (instance) => ({
    step: 1,
    content: '',
    extraInfos: {
      stories: [{
        category: '',
        content: '',
        subcategory: false,
        children: [],
      }]
    },
    sexs: ['Masculino', 'Feminino'],
    bloodTypes: ['A', 'A+', 'B', 'A-', 'B', 'B+', 'B-', 'AB', 'AB+', 'AB-', 'O', 'O+', 'O-'],
    heights: [],
    weights: [],
    meritsDialog: false,
    dialog: false,
    valid: true,
    extraInfosValid: true,
    isNegative: false,
    date: null,
    menu: false,
    response: {},
    name: '',
    level: 1,
    exp: 0,
    funds: 0,
    merits: 4,
    valorPoints: [],
    sumOfValors: 0,
    statusPoints: 1,
    proficiencyPoints: 1,
    capMerits: 3,
    capMeritsStratagems: 3,
    capMeritsNegativeTraits: 3,
    capValorPoints: 4,
    defaultMerits: 4,
    defaultStatusPoints: 1,
    defaultValorPoints: 4,
    defaultProficiencyPoints: 1,
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
    referenceImages: [],
    classes: ['Archer', 'Assassin', 'Caster (Criação de Território)', 'Caster (Magia Branca)', 'Berserker', 'Foreigner', 'Rider', 'Lancer', 'Avenger', 'Saber', 'Shielder'].sort(),
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
      v => instance.validateMaxPoints(v, instance.capMeritsStratagems),
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
      v => instance.validateMaxPoints(0, instance.merits)
    ],
    dataNoblePhantasms: dataNP,
    stratagems: dataStratagems,
    negativeTraits: dataNegativeTraits,
    martialSkills: dataMartialSkills,
    specialTechniques: dataSpecialTechniques
  }),
  methods: {

    removeItem(index) {
      this.extraInfos.referenceImages.splice(index, 1)
      this.extraInfos.referenceImages = [...this.extraInfos.referenceImages]
    },

    generateAges(limit) {
      return Array.from(function*() {
        let u = 'ano'
        for (let i = 1; i <= limit; i++) {
          const unit = i
          const formattedUnit = `${unit} ${u}`
          yield {
            formattedUnit,
            unit
          }

          if (i == 1) {
            u = u + 's'
          }
        }
      }())
    },

    generateHeights(limit) {
      return Array.from(function*() {
        for (let i = 1; i <= limit; i+=0.01) {
          const unit = i.toFixed(2)
          const formattedUnit = `${unit.replace('.', ',')} m`
          yield {
            formattedUnit,
            unit
          }
        }
      }())
    },

    generateWeights(limit) {
      return Array.from(function*() {
        for (let weight = 1; weight <= limit; weight++) {
          const formattedWeight = `${weight} kg`
          yield {
            formattedWeight,
            unit: weight
          }
        }
      }())
    },
    
    hasPointsNotSpent() {
      return this.merits > 0 ||
             this.calculateValorPoints() > 0 ||
             this.statusPoints > 0 ||
             this.proficiencyPoints > 0
    },

    validateAndGo() {
      this.dialog = false
      if (this.$refs.form.validate()) {
        this.step = 2
        return true
      }

      return false
    },

    addNoblePhantasm() {
      if (this.merits < 1 && this.noblePhantasms.length >= 1) {
        this.meritsDialog = true
        return
      }
      
      this.noblePhantasms.push({})
      this.valorPoints.push(this.defaultValorPoints)
      this.sumOfValors = this.calculateValorPoints()
      
      if (this.noblePhantasms.length > 1) {
        this.merits -= 1
      }
    },

    removeNoblePhantasm() {
      this.noblePhantasms.pop()
      this.valorPoints.pop()
      this.sumOfValors = this.calculateValorPoints()

      if (this.noblePhantasms.length > 0) {
        this.merits += 1
      }
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
        const formData = new FormData()
        this.referenceImages.forEach(file => formData.append('files', file, file.name)) 

        const extraInfosModified = {
          ...this.extraInfos,
          referenceImages: formData.getAll('files')
        }

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
          userId: id,
          extraInfos: extraInfosModified
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
          // this.backupStratagems = []
          // this.backupNegativeTraits = []
          // this.backupMartialSkills = []
          // this.backupSpecialTechniques = []
          // this.capMerits = 0
          // this.name = '',
          // this.currentClass = '',
          // this.merits = this.defaultMerits
          // this.valorPoints = [this.defaultValorPoints]
          // this.statusPoints = this.defaultStatusPoints
          // this.proficiencyPoints = this.defaultProficiencyPoints
          // this.alignment = []
          // this.principle = []
          // this.parameters = this.attributes
          // this.selectedStratagems = []
          // this.selectedNegativeTraits = []
          // this.selectedMartialSkills = []
          // this.selectedSpecialTechniques = []
          // this.noblePhantasms = []
          // this.$refs.form.reset()
          // this.$refs.extraInfosForm.reset()
          goTo(0)
        }
      } else {
        this.dialog = false
        this.step = 1
      }
    },

    excludeItem(src, element) {
      return src.filter(e => element.name != e.name)
    },

    calculateMeritsFromArray: (data) => data.map(el => el.merits).reduce((acc, merit) => acc + merit),
    calculateValorsFromArray: (data) => data.map(el => el).reduce((acc, valor) => acc + valor),
    calculateValorPoints() {
      if (this.valorPoints.length > 0) {
        return this.calculateValorsFromArray(this.valorPoints)
      }

      return 0
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
      if (!removedItem || typeof removedItem !== 'object') {
        return
      }

      this.merits += removedItem.merits
    },

    decrementMerits(addedItem) {
      if (!addedItem || typeof addedItem !== 'object') {
        return
      }
      
      this.merits -= addedItem.merits
    },

    save (date) {
      this.$refs.menu.save(date)
    },
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
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
.v-application .grey.lighten-4 {
  background-color: #303030 !important;
}
</style>
<style scoped>
.block {
  width: 100%;
  display: block;
}
.extraInfos .noPaddingTop {
  padding-top: 0;
}
.extraInfos .noPaddingBottom {
  padding-bottom: 0;
}
</style>