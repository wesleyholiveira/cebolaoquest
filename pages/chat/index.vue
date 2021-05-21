<template>
  <div>
    {{messageRxd}}
    <v-btn @click="getMessage">Enviar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageRxd: '',
      socket: null,
    }
  },

  mounted() {
    this.socket = this.$nuxtSocket({ channel: '/index', reconnection: false })
  },

  methods: {
    getMessage() {
      console.log(this.socket)
    },
  },
}
</script>