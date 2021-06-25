<template>
  <v-row>
    <v-col cols="12">
      <v-alert :type="response.status" v-if="response.status != undefined">
        {{ response.text }}
      </v-alert>
    </v-col>
    <v-col cols="12">
      <v-stepper v-model="step">
        <v-stepper-header :class="{ 'hidden-sm-and-down': true, fixed }">
          <v-stepper-step step="1" :complete="step > 1" :rules="[() => valid]">
            Cadastro da Ficha
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="step > 2">
            Informações do Personagem
          </v-stepper-step>
          <ficha-info
            ref="fichaInfo"
            :meritPoints="data.meritPoints"
            :statusPoints="data.statusPoints"
            :proficiencyPoints="data.proficiencyPoints"
            :valorPoints="calculateValorPoints()"
            class="mt-5"
          />
        </v-stepper-header>
        <client-only>
          <v-stepper-header :class="{ 'hidden-md-and-up mobile': true, fixed }">
            <v-stepper-step
              step="1"
              :complete="step > 1"
              :rules="[() => valid]"
            >
              Cadastro da Ficha
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="step > 2">
              Informações do Personagem
            </v-stepper-step>

            <v-expansion-panels v-model="panel">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-app-bar dark absolute>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                  </v-app-bar>
                </v-expansion-panel-header>
                <v-expansion-panel-content style="overflow-y: auto">
                  <ficha-info
                    ref="fichaInfo"
                    :meritPoints="data.meritPoints"
                    :statusPoints="data.statusPoints"
                    :proficiencyPoints="data.proficiencyPoints"
                    :valorPoints="calculateValorPoints()"
                    class="mt-5"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-stepper-header>
        </client-only>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              style="position: relative"
            >
              <v-row>
                <v-col cols="12" lg="6" sm="12">
                  <v-text-field
                    v-model="data.name"
                    :counter="maxCharsName"
                    :rules="nameRules"
                    label="Nome *"
                  />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-combobox
                    v-model="data.currentClass"
                    :items="classes"
                    :rules="classRules"
                    label="Classe *"
                  />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-text-field v-model="data.hp" label="HP" :rules="hpRules" />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-text-field
                    v-model="data.maxHp"
                    label="Max HP"
                    :rules="hpMaxRules"
                  />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-text-field v-model="data.sp" label="SP" :rules="spRules" />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-text-field
                    v-model="data.maxSp"
                    label="Max SP"
                    :rules="spMaxRules"
                  />
                </v-col>
                <v-col cols="12" lg="4" sm="12">
                  <v-text-field v-model="data.level" label="Level" />
                </v-col>
                <v-col cols="12" lg="4" sm="12">
                  <v-text-field v-model="data.exp" label="EXP" />
                </v-col>
                <v-col cols="12" lg="4" sm="12">
                  <v-text-field v-model="data.funds" label="Fundos" />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-combobox
                    v-model="data.alignment"
                    :items="alignments"
                    :rules="alignmentRules"
                    label="Personalidade *"
                  />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-combobox
                    v-model="data.principle"
                    :items="principles"
                    :rules="principleRules"
                    label="Principio *"
                  />
                </v-col>
                <v-col cols="12">
                  <h2 class="text-center">Parâmetros</h2>
                </v-col>
                <template v-for="(attribute, i) in data.parameters">
                  <v-col :key="i" cols="12" lg="4" md="6" sm="12">
                    <parameters
                      :maxHp="data.maxHp"
                      :maxSp="data.maxSp"
                      :attribute="attribute"
                      :playerLevel="data.level"
                      :statusPoints="data.statusPoints"
                      :meritPoints="data.meritPoints"
                      :negativeTraits="data.negativeTraits"
                      :proficiencyPoints="data.proficiencyPoints"
                      :defaultProficiencyPoints="defaultProficiencyPoints"
                      :defaultStatusPoints="defaultStatusPoints"
                      v-on:updateMaxHp="data.maxHp = $event"
                      v-on:updateMaxSp="data.maxSp = $event"
                      v-on:updateParameters="data.parameters[i] = $event"
                      v-on:updateStatusPoints="data.statusPoints = $event"
                      v-on:updateMeritPoints="data.meritPoints = $event"
                      v-on:updateProficiencyPoints="
                        data.proficiencyPoints = $event
                      "
                    ></parameters>
                  </v-col>
                </template>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" sm="12">
                  <v-combobox
                    v-model="data.stratagems"
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
                <v-col cols="12" lg="4" sm="12">
                  <v-combobox
                    v-model="data.negativeTraits"
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
                <v-col cols="12" lg="4" sm="12">
                  <v-combobox
                    v-model="data.martialSkills"
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
                    v-model="data.specialTechniques"
                    :items="specialTechniques"
                    :rules="specialTechniquesRules"
                    item-text="name"
                    chips
                    label="Técnicas Especiais"
                    multiple
                  >
                    <template v-slot:selection="{ item, index }">
                      <v-chip
                        close
                        :color="item.rarity"
                        @click:close="
                          data.specialTechniques =
                            data.specialTechniques.filter((e, i) => i !== index)
                        "
                      >
                        <span>{{ item.name }}</span>
                      </v-chip>
                    </template>
                  </v-combobox>
                </v-col>
                <v-col cols="12">
                  <h2 class="text-center">Origens Secretas</h2>
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-combobox
                    v-model="data.secretOrigins.content.origins"
                    label="Escolha suas Origens:"
                    multiple
                    chips
                    deletable-chips
                    :items="Object.keys(secretOrigins)"
                    :rules="secretOriginRule"
                    @change="
                      data.proficiencyPoints = data.secretOrigins.content.origins.length * 2
                      defaultProficiencyPoints = data.proficiencyPoints
                    "
                  />
                </v-col>
                <v-col cols="12" lg="6" sm="12">
                  <v-select
                    v-model="data.secretOrigins.content.category"
                    label="Escolha a subcategoria:"
                    :items="selectedOriginsItems"
                    item-text="name"
                    item-value="name"
                    class="custom-field"
                  />
                </v-col>
              </v-row>
              <template v-for="(item, key) in data.noblePhantasms">
                <noble-phantasm
                  :np="item"
                  :data="dataNoblePhantasms"
                  :index="key"
                  :key="key"
                  :valorPoints="data.valorPoints"
                  :valorCap="capValorPoints"
                  :playerId="data.id"
                  v-on:updateValorPoints="data.valorPoints = $event"
                  v-on:updateValorCap="capValorPoints = $event"
                ></noble-phantasm>
              </template>
              <v-row>
                <v-col cols="12">
                  <v-dialog
                    v-model="data.loading"
                    max-width="200"
                    class="loader"
                  >
                    <v-card>
                      <v-card-text class="loader--body">
                        <span class="d-block loader--body--text"
                          >Carregando...</span
                        >
                        <v-progress-circular
                          :size="70"
                          :width="7"
                          color="cyan darken-1"
                          indeterminate
                          class="text-center"
                        ></v-progress-circular>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-dialog
                    v-model="registerDialog"
                    max-width="200"
                    class="loader"
                  >
                    <v-card>
                      <v-card-text class="loader--body">
                        <span class="d-block loader--body--text">{{
                          registerMessage
                        }}</span>
                        <v-progress-circular
                          :size="70"
                          :width="7"
                          color="cyan darken-1"
                          indeterminate
                          class="text-center"
                        ></v-progress-circular>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="meritsDialog" max-width="400">
                    <v-card>
                      <v-card-title class="headline">
                        Então você é um ixxxpertinho?!
                      </v-card-title>
                      <v-card-text>
                        Tentando gastar mais pontos de méritos do que realmente
                        tem? Vai assistir a live do
                        <a
                          href="https://twitch.tv/cebolaolunar"
                          target="_blank"
                          style="font-size: 17px"
                        >
                          Cebolão Lunar </a
                        >. Garanto que é mais produtivo do que tentar burlar o
                        sistema.
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="meritsDialog = false"> Sair </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn
                    v-if="data.noblePhantasms.length > 0"
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
                    style="margin-bottom: 80px; margin-top: 80px"
                    @click="validateAndGo()"
                  >
                    Próximo
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form
              ref="extraInfosForm"
              @submit.prevent="validate()"
              lazy-validation
              v-model="extraInfosValid"
              style="position: relative"
              class="extraInfos"
            >
              <v-row>
                <v-col cols="12">
                  <v-container class="text-center">
                    <v-row>
                      <v-col cols="12" class="noPaddingBottom">
                        <h2>Aparência</h2>
                        <v-file-input
                          v-model="data.extraInfos.referenceImages"
                          placeholder="Suba suas imagens de refência do personagem"
                          label="Imagens de Referência"
                          class="noPaddingTop"
                          accept="image/png, image/jpeg, image/gif"
                          multiple
                          persistent-hint
                          hint="Segure CTRL para selecionar múltiplos arquivos"
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
                        <v-text-field
                          v-model="data.extraInfos.species"
                          :counter="maxCharsSpecies"
                          :rules="speciesRules"
                          label="Espécie"
                          class="noPaddingTop"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-select
                          v-model="data.extraInfos.sex"
                          :items="sexs"
                          label="Sexo"
                          class="noPaddingTop"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-combobox
                          v-model="data.extraInfos.height"
                          :items="generateHeights(10)"
                          label="Altura"
                          item-text="formattedUnit"
                          item-value="unit"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-combobox
                          v-model="data.extraInfos.weight"
                          :items="generateWeights(500)"
                          label="Peso"
                          item-text="formattedWeight"
                          item-value="unit"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-text-field
                          v-model="data.extraInfos.locality"
                          :counter="maxCharsLocality"
                          :rules="localityRules"
                          label="Local de origem"
                        />
                      </v-col>
                      <v-col cols="12" lg="3" sm="12">
                        <v-combobox
                          v-model="data.extraInfos.age"
                          :items="generateAges(5000)"
                          item-text="formattedUnit"
                          item-value="unit"
                          label="Idade"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-combobox
                          v-model="data.extraInfos.bloodType"
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
                              v-model="data.extraInfos.birthday"
                              label="Data de Nascimento"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            ref="picker"
                            v-model="data.extraInfos.birthday"
                            min="0001-01-01"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12" class="noPaddingBottom">
                        <h2>Informações Pessoais</h2>
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="data.extraInfos.addressSelfAs"
                          :counter="maxCharsSelfDenomination"
                          :rules="selfDenominationRules"
                          label="Autodenominação"
                          class="noPaddingTop"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="data.extraInfos.talents"
                          :counter="maxCharsTalents"
                          :rules="talentsRules"
                          label="Talentos"
                          class="noPaddingTop"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="data.extraInfos.likes"
                          :counter="maxCharsLikes"
                          :rules="likesOfRules"
                          label="Gosta de"
                          placeholder="Insira brevemente o que seu personagem gosta"
                        />
                      </v-col>
                      <v-col cols="12" lg="6" sm="12">
                        <v-text-field
                          v-model="data.extraInfos.dislikes"
                          :counter="maxCharsDislikes"
                          :rules="dislikesOfRules"
                          label="Não gosta de"
                          placeholder="Insira brevemente o que seu personagem NÃO gosta"
                        />
                      </v-col>
                      <v-col cols="12" class="noPaddingBottom">
                        <h2>História & Background</h2>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="data.extraInfos.abstract"
                          :counter="maxCharsAbstract"
                          :rules="abstractRules"
                          label="Resumo"
                          outlined
                          placeholder="Insira brevemente um resumo da história do personagem"
                        />
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <historia-ficha
                          v-for="(item, i) in data.extraInfos.stories"
                          :absolute="true"
                          :extraInfos="item"
                          :key="i"
                          :stories="data.extraInfos.stories"
                          v-on:updateStories="data.extraInfos.stories = $event"
                        >
                        </historia-ficha>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col cols="12">
                  <div class="text-center">
                    <v-btn class="mr-4" @click="step = 1"> Voltar </v-btn>
                    <v-dialog
                      v-if="hasPointsNotSpent"
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
                          Você ainda possui pontos não distruídos e caso não
                          sejam distribuídos <strong>serão perdidos</strong>.
                          Desejar continuar mesmo assim?
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
                            @click="
                              dialog = false
                              validate()
                            "
                          >
                            Sim
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-btn
                      v-if="!hasPointsNotSpent"
                      :disabled="!valid"
                      color="green darken-1"
                      class="mr-4"
                      type="submit"
                    >
                      Enviar
                    </v-btn>
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
import dataNP from '../mock/np'
import dataStratagems from '../mock/stratagems'
import dataMartialSkills from '../mock/martialSkills'
import dataSpecialTechniques from '../mock/specialTechniques'
import dataNegativeTraits from '../mock/negativeTraits'
let interval
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  mounted() {
    this.body = document.body.getBoundingClientRect()
    this.data.proficiencyPoints = this.data.secretOrigins.content.origins.length * 2
  },

  computed: {
    hasPointsNotSpent() {
      return (
        this.data.meritPoints > 0 ||
        this.calculateValorPoints() > 0 ||
        this.data.statusPoints > 0 ||
        this.data.proficiencyPoints > 0
      )
    },

    selectedOriginsItems() {
      if (this.data.secretOrigins.content) {
        const { origins } = this.data.secretOrigins.content
        if (origins.length > 0) {
          return origins.flatMap(e => this.secretOrigins[e])
        }
      }
      return []
    }
  },

  data: (instance) => ({
    step: 1,
    panel: [],
    fixed: false,
    content: '',
    registerMessage: 'ENVIANDO',
    sexs: ['Masculino', 'Feminino'],
    bloodTypes: [
      'A',
      'A+',
      'B',
      'A-',
      'B',
      'B+',
      'B-',
      'AB',
      'AB+',
      'AB-',
      'O',
      'O+',
      'O-',
    ],
    maxCharsName: 45,
    maxCharsSpecies: 40,
    maxCharsSelfDenomination: 100,
    maxCharsTalents: 100,
    maxCharsLikes: 100,
    maxCharsDislikes: 100,
    maxCharsAbstract: 1000,
    maxCharsLocality: 50,
    valid: true,
    dialog: false,
    toggle: false,
    registerDialog: false,
    meritsDialog: false,
    extraInfosValid: true,
    firstTimeValors: true,
    firstTimeStratagems: true,
    firstTimeMartialSkills: true,
    firstTimeSpecialTechs: true,
    firstTimeNegativeTraits: true,
    // isNegative: false,
    date: null,
    menu: false,
    response: {},
    capMerits: 3,
    capMeritsStratagems: 3,
    capMeritsNegativeTraits: 3,
    capValorPoints: 5,
    defaultMerits: 4,
    defaultStatusPoints: 1,
    defaultValorPoints: 5,
    defaultProficiencyPoints: 1,
    alignments: ['Bom', 'Neutro', 'Maligno'],
    principles: ['Leal', 'Neutro', 'Caótico'],
    attributes: ['STR', 'AGI', 'MAN', 'END', 'LUK', 'NP'],
    backupStratagems: [],
    backupNegativeTraits: [],
    backupMartialSkills: [],
    backupSpecialTechniques: [],
    selectedSecretOrigins: [],
    classes: [
      'Archer',
      'Assassin',
      'Caster (Brasão Magico)',
      'Caster (Magia Branca)',
      'Berserker',
      'Foreigner',
      'Lancer',
      'Avenger',
      'Saber',
      'Shielder',
    ].sort(),
    secretOrigins: {
      'Coração de Dragão': [
        {
          name: 'Sangue do Dragão Vermelho',
        },
        {
          name: 'Sangue do Dragão Negro',
        },
        {
          name: 'Sangue do Dragão Branco',
        },
      ],
      'Fera Selvagem': [
        {
          name: 'Behemoth',
        },
        {
          name: 'Fenrir',
        },
      ],
      'Natureza Demoniaca': [
        {
          name: 'Diabo',
        },
        {
          name: 'Mara',
        },
        {
          name: 'Oni',
        },
        {
          name: 'Divindade',
        },
      ],
    },
    nameRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        v.length <= instance.maxCharsName ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsName} caracteres`,
    ],
    hpRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        v <= instance.data.maxHp ||
        'Seu HP não pode ser maior do que seu HP máximo',
    ],
    spRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        v <= instance.data.maxSp ||
        'Seu SP não pode ser maior do que seu SP máximo',
    ],
    hpMaxRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        v >= instance.data.hp ||
        'Seu HP máximo não pode ser menor do que seu HP',
    ],
    spMaxRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        v >= instance.data.sp ||
        'Seu SP máximo não pode ser menor do que seu SP',
    ],
    classRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) => instance.classes.includes(v) || 'Esta classe não existe',
    ],
    alignmentRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) => instance.alignments.includes(v) || 'Esta personalidade não existe',
    ],
    principleRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) => instance.principles.includes(v) || 'Este principio não existe',
    ],
    stratagemsRules: [
      (v) =>
        v.filter((el) => !el.name).length < 1 ||
        'Há pelo menos um estratagema inválido',
      (v) => instance.validateMaxPoints(v, instance.capMeritsStratagems),
    ],
    negativeTraitsRules: [
      (v) =>
        v.filter((el) => !el.name).length < 1 ||
        'Há pelo menos uma caracteristica negativa inválida',
      (v) => instance.validateMaxPoints(v, instance.capMeritsNegativeTraits),
    ],
    martialSkillsRules: [
      (v) =>
        v.filter((el) => !el.name).length < 1 ||
        'Há pelo menos uma habilidade marcial inválida',
      (v) => instance.validateMaxPoints(v, instance.capMerits),
    ],
    specialTechniquesRules: [
      (v) =>
        v.filter((el) => !el.name).length < 1 ||
        'Há pelo menos uma técnica especial inválida',
      (v) => instance.validateMaxPoints(0, instance.data.meritPoints),
    ],
    speciesRules: [
      (v) =>
        v.length <= instance.maxCharsSpecies ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsSpecies} caracteres`,
    ],
    selfDenominationRules: [
      (v) =>
        v.length <= instance.maxCharsSelfDenomination ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsSelfDenomination} caracteres`,
    ],
    likesOfRules: [
      (v) =>
        v.length <= instance.maxCharsLikes ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsLikes} caracteres`,
    ],
    dislikesOfRules: [
      (v) =>
        v.length <= instance.maxCharsDislikes ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsDislikes} caracteres`,
    ],
    localityRules: [
      (v) =>
        v.length <= instance.maxCharsLocality ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsLocality} caracteres`,
    ],
    talentsRules: [
      (v) =>
        v.length <= instance.maxCharsTalents ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsTalents} caracteres`,
    ],
    abstractRules: [
      (v) =>
        v.length <= instance.maxCharsAbstract ||
        `Este campo excedeu o limite máximo de: ${instance.maxCharsAbstract} caracteres`,
    ],
    secretOriginRule: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) => v.length > 0 || 'Você deve ao menos selecionar uma Origem Secreta'
    ],
    dataNoblePhantasms: dataNP,
    stratagems: dataStratagems,
    bStratagems: instance.data.stratagems,
    bMartialSkills: instance.data.martialSkills,
    bNegativeTraits: instance.data.negativeTraits,
    bSpecialTechniques: instance.data.specialTechniques,
    negativeTraits: dataNegativeTraits,
    martialSkills: dataMartialSkills,
    specialTechniques: dataSpecialTechniques,
  }),
  methods: {
    handleScroll(e) {
      const bodyTop = this.body.top
      const el = this.$refs.fichaInfo.$el

      if (el) {
        const { bottom } = el.getBoundingClientRect()
        if (window.scrollY > bodyTop - (bottom + 72) && window.scrollY != 0) {
          this.fixed = true
        } else {
          this.fixed = false
        }
      }
    },

    calculateValorPoints() {
      if (this.data.valorPoints.length > 0) {
        return this.calculateValorsFromArray(this.data.valorPoints)
      }

      return 0
    },

    animateMessage(msg) {
      let i = 0
      this.registerMessage = msg

      clearInterval(interval)
      interval = setInterval(() => {
        if (i < 3) {
          this.registerMessage = this.registerMessage + '.'
          i++
        } else {
          i = 0
          this.registerMessage = msg
        }
      }, 450)
    },

    removeItem(index) {
      this.data.extraInfos.referenceImages.splice(index, 1)
      this.data.extraInfos.referenceImages = [
        ...this.data.extraInfos.referenceImages,
      ]
    },

    generateAges(limit) {
      return Array.from(
        (function* () {
          let u = 'ano'
          for (let i = 1; i <= limit; i++) {
            const unit = i
            const formattedUnit = `${unit} ${u}`
            yield {
              formattedUnit,
              unit,
            }

            if (i == 1) {
              u = u + 's'
            }
          }
        })()
      )
    },

    generateHeights(limit) {
      return Array.from(
        (function* () {
          for (let i = 1; i <= limit; i += 0.01) {
            const unit = i.toFixed(2)
            const formattedUnit = `${unit.replace('.', ',')} m`
            yield {
              formattedUnit,
              unit,
            }
          }
        })()
      )
    },

    generateWeights(limit) {
      return Array.from(
        (function* () {
          for (let weight = 1; weight <= limit; weight++) {
            const formattedWeight = `${weight} kg`
            yield {
              formattedWeight,
              unit: weight,
            }
          }
        })()
      )
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
      const { meritPoints, noblePhantasms } = this.data
      if (noblePhantasms.length >= 1) {
        if (meritPoints < 1) {
          this.meritsDialog = true
          return
        }
      }

      this.data.noblePhantasms.push({ merits: 1 })
      this.data.valorPoints.push(this.defaultValorPoints)

      if (noblePhantasms.length > 1) {
        this.data.meritPoints -= 1
      }
    },

    removeNoblePhantasm() {
      this.data.noblePhantasms.pop()
      this.data.valorPoints.pop()

      if (this.data.noblePhantasms.length > 0) {
        this.data.meritPoints += 1
      }
    },

    async validate() {
      try {
        if (this.$refs.form.validate()) {
          const params = this.data.parameters || []

          // const valorPoints = this.calculateValorPoints()
          const formData = new FormData()
          const { referenceImages } = this.data.extraInfos

          this.animateMessage('ENVIANDO')
          this.registerDialog = true

          if (referenceImages) {
            for (const ref of referenceImages) {
              formData.append('referenceImages', ref)
            }
          }

          const { origins, category } = this.data.secretOrigins.content
          const { id, token } = this.$auth.user
          const { data } = await this.$axios.post(
            '/api/player',
            {
              id: this.data.id || null,
              name: this.data.name,
              job: this.data.currentClass,
              level: this.data.level,
              exp: this.data.exp,
              funds: this.data.funds,
              meritPoints: 0,
              statusPoints: 0,
              proficiencyPoints: 0,
              alignment: this.data.alignment,
              principle: this.data.principle,
              attributes: params,
              stratagems: this.data.stratagems,
              negativeTraits: this.data.negativeTraits,
              martialSkills: this.data.martialSkills,
              specialTechniques: this.data.specialTechniques,
              noblePhantasms: this.data.noblePhantasms,
              valorPoints: 0,
              userId: this.data.userId || id,
              extraInfos: this.data.extraInfos,
              hp: this.data.hp,
              sp: this.data.sp,
              maxHp: this.data.maxHp,
              maxSp: this.data.maxSp,
              secretOrigins: {
                content: JSON.stringify({
                  origins,
                  category
                }),
                player_id: id
              }
            },
            {
              headers: {
                Authorization: token,
              },
            }
          )

          this.response = {
            status: data.statusMessage,
            text: data.data,
          }

          if (referenceImages && data.statusMessage != 'error') {
            this.animateMessage('ENVIANDO AS FOTOS')

            const uploadResponse = await this.$axios({
              method: 'post',
              url: `/api/upload/${data.playerId}`,
              data: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token,
              },
            })

            if (uploadResponse.statusMessage != 'success') {
              this.response = {
                status: data.statusMessage,
                text: data.data,
              }
            }
          }

          this.registerDialog = false
          goTo(0)
        } else {
          this.dialog = false
          this.step = 1
        }
      } catch (err) {
        console.log(err)
        this.registerDialog = false
        clearInterval(interval)
      }
    },

    excludeItem(src, element) {
      return src.filter((e) => element.name != e.name)
    },

    calculateMeritsFromArray: (data) =>
      data.map((el) => el.merits).reduce((acc, merit) => acc + merit),
    calculateValorsFromArray: (data) =>
      data.map((el) => el).reduce((acc, valor) => acc + valor),

    validateMaxPoints(v, cap) {
      let validation =
        v.length > 0 && this.calculateMeritsFromArray(v) > cap
          ? `A soma dos méritos ultrapassam o máximo de ${cap} pontos de méritos`
          : true

      if (this.data.meritPoints < 0) {
        validation = 'Você não pode gastar mais pontos de mérito do que possui.'
      }

      return validation || true
    },

    decideMeritsOperation(data, backup) {
      if (data && backup) {
        if (backup.length > data.length) {
          const tmpData = data.map((el) => el.name)
          let diff = backup.filter((el) => !tmpData.includes(el.name))

          this.incrementMerits(diff[0])
          return data
        }

        const tmpData = backup.map((el) => el.name)
        const diff = data.filter((el) => !tmpData.includes(el.name))
        this.decrementMerits(diff[0])
        return data
      }
    },

    decideMeritsOperationNegativeTraits(data, backup) {
      if (data && backup) {
        if (backup.length > data.length) {
          const tmpData = data.map((el) => el.name)
          let diff = backup.filter((el) => !tmpData.includes(el.name))

          this.decrementMerits(diff[0])
          return data
        }

        const tmpData = backup.map((el) => el.name)
        const diff = data.filter((el) => !tmpData.includes(el.name))
        this.incrementMerits(diff[0])
        return data
      }
    },

    incrementMerits(removedItem) {
      if (!removedItem || typeof removedItem !== 'object') {
        return
      }

      this.data.meritPoints += removedItem.merits
    },

    decrementMerits(addedItem) {
      if (!addedItem || typeof addedItem !== 'object') {
        return
      }

      this.data.meritPoints -= addedItem.merits
    },

    save(date) {
      this.$refs.menu.save(date)
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    'data.stratagems'(stratagems) {
      if (this.firstTimeStratagems) {
        this.firstTimeStratagems = false
        this.backupStratagems = this.bStratagems
      }

      this.backupStratagems = this.decideMeritsOperation(
        stratagems,
        this.backupStratagems
      )
    },
    'data.martialSkills'(martialSkills) {
      if (this.firstTimeMartialSkills) {
        this.firstTimeMartialSkills = false
        this.backupMartialSkills = this.bMartialSkills
      }

      this.backupMartialSkills = this.decideMeritsOperation(
        martialSkills,
        this.backupMartialSkills
      )
    },
    'data.specialTechniques'(specialTechniques) {
      if (this.firstTimeSpecialTechs) {
        this.firstTimeSpecialTechs = false
        this.backupSpecialTechniques = this.bSpecialTechniques
      }

      this.backupSpecialTechniques = this.decideMeritsOperation(
        specialTechniques,
        this.backupSpecialTechniques
      )
    },
    'data.negativeTraits'(negativeTraits) {
      if (this.firstTimeNegativeTraits) {
        this.firstTimeNegativeTraits = false
        this.backupNegativeTraits = this.bNegativeTraits
      }

      this.backupNegativeTraits = this.decideMeritsOperationNegativeTraits(
        negativeTraits,
        this.backupNegativeTraits
      )
    },
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
}
</script>
<style>
.v-application .grey.lighten-4 {
  background-color: #303030 !important;
}
.v-stepper__header.mobile {
  margin-bottom: 50px;
}
.v-stepper__header {
  margin-bottom: 120px;
}
.v-stepper__header.fixed {
  margin-bottom: 0;
  padding-bottom: 220px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 3;
}
.v-stepper__header.fixed .ficha-info {
  margin-top: 0 !important;
  top: -25px;
}
.v-stepper__header.mobile.fixed {
  margin-bottom: 0;
  padding-bottom: 0 !important;
}
.custom-field .v-select__slot {
  min-height: 42px;
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
.loader--body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loader--body--text {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
</style>