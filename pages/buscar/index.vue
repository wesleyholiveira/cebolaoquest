<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form method="GET" ref="form" lazy-validation v-model="valid">
          <div class="database">
            <!-- <h1>DATABASE</h1> -->
            <v-row justify="center">
              <v-col cols="12" lg="4" sm="12">
                <v-combobox
                  v-model="searchBy"
                  label="Buscar por:"
                  name="searchBy"
                  :items="searchByLabel"
                  @change="
                    randomizedColors.push(randomizeColor())
                    updateItemSearch()
                  "
                />
              </v-col>
              <v-col
                cols="12"
                lg="4"
                sm="12"
                v-show="searchBy && searchBy.length > 3"
              >
                <v-combobox
                  v-model="itemSearch"
                  name="itemSearch"
                  :label="searchBy"
                  :items="dataSearchOrdered"
                  item-text="name"
                  small-chips
                  multiple
                  clearable
                  @click:clear="resetColors()"
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip @click.stop="handleGotoCard(index)">
                      <span>{{ item.name }}</span>
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
              <v-col
                cols="12"
                lg="4"
                sm="12"
                v-show="searchBy && itemSearch && itemSearch.length > 0"
              >
                <v-row justify="center">
                  <v-col cols="12" lg="8" sm="12">
                    <v-select
                      v-model="orderBy"
                      name="orderBy"
                      label="Ordenar por:"
                      :items="
                        orderByItems.filter(
                          (i) => i.name == searchBy || i.name == 'General'
                        )
                      "
                      item-text="title"
                      item-value="key"
                      @change="updateItemSearch()"
                    />
                  </v-col>
                  <v-col cols="12" lg="4" sm="12">
                    <v-select
                      v-model="orderByModifierText"
                      name="orderByModifier"
                      label="Ordem:"
                      :items="['ASC', 'DESC']"
                      @change="updateItemSearch()"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-form>
      </v-col>
      <v-col cols="12">
        <v-breadcrumbs
          :items="itemSearchBreadcrumb"
          divider="/"
          class="text-center justify-center"
        >
          <template v-slot:item="{ item }">
            <v-btn
              text
              :color="ColorLuminance(randomizedColors[item.index], 1)"
              @click="handleGotoCard(item.index)"
              >{{ item.text }}</v-btn
            >
          </template>
        </v-breadcrumbs>
        <div v-if="visibleCards">
          <v-card
            v-for="(item, i) in itemSearch"
            :key="i"
            :color="randomizedColors[i]"
            class="mb-10 card-effects"
            :id="`card-${i + 1}`"
          >
            <v-card-title class="text-h5">{{ item.name }}</v-card-title>

            <v-card-subtitle v-html="item.effect" class="subtitle--effect"></v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Custo: {{ item.merits || item.valors || item.cost }}&nbsp;
                <small style="color: #f6f6f6">
                  <span v-if="item.merits"> méritos </span>
                  <span v-if="item.valors"> valors </span>
                  <span v-if="item.cost"> PE<small>s</small> </span>
                </small>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="database">
          <v-tooltip bottom v-model="tooltip">
            <template v-slot:activator="{ attrs }">
              <v-btn
                v-bind="attrs"
                :disabled="!valid"
                @click="onSubmit"
                color="green darken-1"
                class="mr-4"
                type="submit"
              >
                Copiar URL
              </v-btn>
            </template>
            <span>URL copiada com sucesso</span>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import goTo from 'vuetify/es5/services/goto'

import stratagems from '~/mock/stratagems'
import negativeTraits from '~/mock/negativeTraits'
import martialSkills from '~/mock/martialSkills'
import specialTechniques from '~/mock/specialTechniques'
import np from '~/mock/np'
import spells from '~/mock/spells'

export default {
  auth: false,

  head() {
    const title = `Cebolão Quest Busca - ${this.searchBy}`
    const content = `As ${
      this.searchBy
    } que estão sendo procuradas são: ${this.itemSearch
      .map((i) => i.name)
      .join(',')}`
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content,
        },
      ],
    }
  },

  async fetch() {
    const { searchBy, itemSearch, orderBy, orderByModifier } = this.$route.query

    if (searchBy && itemSearch && orderBy) {
      this.searchBy = decodeURIComponent(searchBy)
      this.itemSearch = decodeURIComponent(itemSearch)
        .split(',')
        .flatMap((e) => this.data[searchBy].filter((i) => i.name == e))
      this.orderBy = decodeURIComponent(orderBy)

      this.orderByModifierText = orderByModifier
      this.orderByModifier = orderByModifier == 'ASC' ? 1 : -1
      this.itemSearch = this.itemSearch.sort((a, b) =>
        a[orderBy] > b[orderBy] ? this.orderByModifier : -this.orderByModifier
      )
    }
  },

  data: () => ({
    randomizedColors: [],
    tooltip: false,
    valid: false,
    ignoreColor: false,
    visibleCards: true,
    backupItem: [],
    searchBy: '',
    itemSearch: [],
    orderBy: 'name',
    orderByModifierText: 'ASC',
    orderByModifier: 1,
    data: {
      'Características Negativas': negativeTraits.sort((a, b) =>
        a.name > b.name ? 1 : -1
      ),
      Estratagemas: stratagems.sort((a, b) => (a.name > b.name ? 1 : -1)),
      'Fantasmas Nobres': np.valorSkills
        .concat(
          np.type
            .filter((npType) => npType.valorSkills.length > 0)
            .flatMap((type) => type.valorSkills)
        )
        .sort((a, b) => (a.name > b.name ? 1 : -1)),
      Feitiços: spells.sort((a, b) => (a.name > b.name ? 1 : -1)),
      'Habilidades Marciais': martialSkills.sort((a, b) =>
        a.name > b.name ? 1 : -1
      ),
      'Técnicas Especiais': specialTechniques.sort((a, b) =>
        a.name > b.name ? 1 : -1
      ),
    },
    orderByItems: [
      {
        name: 'General',
        title: 'Título',
        key: 'name',
      },
      {
        name: 'Características Negativas',
        title: 'Méritos',
        key: 'merits',
      },
      {
        name: 'Estratagemas',
        title: 'Méritos',
        key: 'merits',
      },
      {
        name: 'Habilidades Marciais',
        title: 'Méritos',
        key: 'merits',
      },
      {
        name: 'Técnicas Especiais',
        title: 'Méritos',
        key: 'merits',
      },
      {
        name: 'Fantasmas Nobres',
        title: 'Valors',
        key: 'valors',
      },
      {
        name: 'Feitiços',
        title: 'PEs',
        key: 'cost',
      },
    ],
    searchByRules: [(v) => !!v || 'Este campo é obrigatório'],
    itemSearchRules: [(v) => !!v || 'Este campo é obrigatório'],
    orderByRules: [(v) => !!v || 'Este campo é obrigatório'],
  }),

  computed: {
    searchByLabel() {
      return Object.keys(this.data)
    },

    dataSearchOrdered() {
      if (this.searchBy) {
        return this.data[this.searchBy].sort((a, b) =>
          a['name'] > b['name'] ? this.orderByModifier : -this.orderByModifier
        )
      }

      return []
    },

    itemSearchBreadcrumb() {
      const { itemSearch } = this
      if (itemSearch && itemSearch.length > 0) {
        return itemSearch.map((i, index) => ({
          text: i.name,
          disabled: false,
          index,
        }))
      }

      return []
    },
  },

  methods: {
    randomizeColor(brightness = -0.5) {
      const result = (Math.random() * 0xffffff) << 0
      return this.ColorLuminance('#' + result.toString(16), brightness)
    },

    ColorLuminance(hex, lum) {
      // validate hex string
      hex = String(hex).replace(/[^0-9a-f]/gi, '')
      if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      }
      lum = lum || 0

      // convert to decimal and change luminosity
      var rgb = '#',
        c,
        i
      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16)
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
        rgb += ('00' + c).substr(c.length)
      }

      return rgb
    },

    copyURLToClipboard(url) {
      try {
        const el = document.createElement('textarea')

        el.style.position = 'fixed'
        el.style.top = 0
        el.style.left = 0

        el.style.width = '2em'
        el.style.height = '2em'

        el.style.padding = 0

        el.style.border = 'none'
        el.style.outline = 'none'
        el.style.boxShadow = 'none'
        el.style.background = 'transparent'

        el.value = url
        document.body.appendChild(el)
        el.focus()
        el.select()

        console.log(document.execCommand('copy'))
        document.body.removeChild(el)
      } catch (err) {
        console.error('Erro ao copiar a URL', err)
      }
    },

    updateItemSearch() {
      this.orderByModifier = 1
      if (this.orderByModifierText != 'ASC') {
        this.orderByModifier = -1
      }

      this.itemSearch = this.itemSearch.sort((a, b) => {
        if (a[this.orderBy] && b[this.orderBy]) {
          return a[this.orderBy] > b[this.orderBy]
            ? this.orderByModifier
            : -this.orderByModifier
        }
        return 0
      })

      this.ignoreColor = true
    },

    resetColors() {
      this.randomizedColorsCard = []
    },

    handleGotoCard(index) {
      const el = document.querySelector(`#card-${index + 1}`)
      if (el) {
        goTo(el.getBoundingClientRect().top + window.scrollY)
      }
    },

    onChangeRandomizeColors() {
      this.randomizedColors = this.itemSearch.map(() => this.randomizeColor())
    },

    onSubmit() {
      const { form } = this.$refs

      if (form.validate()) {
        this.tooltip = true
        const itensSearch = this.itemSearch.map((e) => e.name)
        const queryString = `searchBy=${encodeURIComponent(
          this.searchBy
        )}&itemSearch=${encodeURIComponent(
          itensSearch
        )}&orderBy=${encodeURIComponent(this.orderBy)}&orderByModifier=${
          this.orderByModifierText
        }`

        this.copyURLToClipboard(
          `${process.env.baseURL}${this.$route.path}?${queryString}`
        )
        setTimeout(() => (this.tooltip = false), 1500)
        return
      }

      this.valid = false
    },
  },

  watch: {
    itemSearch: function (item) {
      if (!this.ignoreColor) {
        if (
          item.slice(0, item.length - 1).length == this.backupItem.length &&
          item.length > this.backupItem.length
        ) {
          this.randomizedColors.push(this.randomizeColor())
        } else {
          this.onChangeRandomizeColors()
        }
      }

      this.ignoreColor = false
      this.backupItem = item
    },
  },
}
</script>

<style>
.database .v-select.v-select--chips .v-select__selections,
.database .v-input__slot {
  min-height: 32px;
}
.card-effects .subtitle--effect strong {
  color: cyan !important;
}
.card-effects .subtitle--effect i {
  color: rgb(255, 163, 25) !important;
}
</style>

<style scoped>
.database {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>