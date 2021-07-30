<template>
  <div>
    <overlay-component :players="prepareValues.slice(0, 4)" left />
    <overlay-component :players="prepareValues.slice(4, prepareValues.length)" right />
  </div>
</template>

<script>
export default {
  layout: 'none',
  auth: false,

  data() {
    return {
      players: [],
    }
  },

  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/overlay',
    })

    this.socket.on('data', (player) => {
      const p = this.players.filter(preiyar => preiyar.name != player.name)
      if (p.length >= 0) {
        p.push(player)
        this.players = p
      }
    })
  },

  computed: {
    prepareValues() {
      return this.players.map(player => {

        if (!player.img) {
          player.imgURL = 'https://i.imgur.com/wkP4s82.png'
        } else {
          player.imgURL = `${process.env.baseURL}/uploads/${player.img}`
        }

        return player
      }).sort((a, b) => (a.username > b.username) ? 1 : -1)
    }
  },
}
</script>

<style>
html,
body {
  overflow: hidden;
  background: transparent;
  font-family: 'Roboto', sans-serif;
}
</style>