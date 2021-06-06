<template>
  <v-tooltip bottom v-model="show">
    <template v-slot:activator="{ attrs }">
      <v-btn
        v-bind="attrs"
        depressed
        color="cyan darken-4"
        @click.stop="
          disabled = true
          copyURLToClipboard(playerId)
        "
      >
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </template>
    <span>URL copiada com sucesso</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    playerId: String,
  },

  data: () => ({
    show: false,
  }),

  methods: {
    copyURLToClipboard(id) {
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

      el.value = `${process.env.baseURL}/profile/${id}`
      document.body.appendChild(el)
      el.focus()
      el.select()

      console.log(document.execCommand('copy'))
      document.body.removeChild(el)

      this.show = true
      setTimeout(() => (this.show = false), 1500)
    },
  },
}
</script>