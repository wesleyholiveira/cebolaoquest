<template>
  <v-container fluid>
    <v-row justify="end">
      <v-col>{{username}} asdasd</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'none',
  auth: false,

  data() {
    return {
      webgl: false,
      username: '',
    }
  },

  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/overlay',
    })

    this.socket.on('data', (res) => this.username = res)
  },
}
</script>

<style>
</style>