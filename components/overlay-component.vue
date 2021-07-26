<template>
  <v-container class="overlay">
    <v-row
      class="overlay--container"
      v-for="player in players"
      :key="player.id"
    >
      <v-col class="overlay--col">
        <section class="overlay--stats">
          <div class="overlay--stats-group">
            <figure class="overlay--stats-figure">
              <img
                :src="player.imgURL"
                width="70"
                height="70"
                class="overlay--stats-img"
              />
            </figure>
            <aside class="overlay--stats-aside">
              <p class="headline" style="float: left; padding-left: 5px">HP:</p>
              <span style="float: right; padding-right: 5px"
                >{{ player.hp }} / {{ player.max_hp }}</span
              >
              <progress
                :value="player.hp"
                :max="player.max_hp"
                class="overlay--bar overlay--hp-bar"
              />
              <p class="headline" style="float: left; padding-left: 5px">SP:</p>
              <span style="float: right; padding-right: 5px"
                >{{ player.sp }} / {{ player.max_sp }}</span
              >
              <progress
                :value="player.sp"
                :max="player.max_sp"
                class="overlay--bar overlay--sp-bar"
              />
            </aside>
          </div>
          <footer class="overlay--bottom-infos">
            <div class="overlay--bottom-infos--username">
              <span>{{ player.username }}</span>
            </div>
            <div class="overlay--bottom-infos--bursts">
              <v-btn text v-for="(attr, i) in player.attributes" :key="i">
                <v-icon>{{ attr.attrIcon }}</v-icon>
                <span>{{ attributes.indexOf(attr.attrRank.replace('+', '')) }}</span>
              </v-btn>
            </div>
          </footer>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    players: Array,
  },

  data() {
    return {
      attributes: ['D', 'C', 'B', 'A', 'S'],
    }
  },

  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/overlay',
    })

    this.socket.on('data', (player) => {
      const { id } = player
      if (this.players.filter((player) => player.id == id).length < 1) {
        this.players.push(player)
      }
    })
  },
}
</script>

<style>
html,
body {
  overflow: hidden;
  background: transparent;
}
</style>

<style scoped>
.overlay {
  direction: rtl;
}
.overlay .overlay--container {
  font-family: 'Roboto', sans-serif;
  font-size: 0.95rem;
  position: relative;
}
.overlay--container .overlay--col {
}
.overlay--col .overlay--stats {
  width: 280px;
  color: #fff;
  border: 5px solid #f8df00;
  background-color: #15a7b4;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 7px;
  direction: ltr;
}
.overlay--stats .overlay--stats-group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.overlay--stats-group .overlay--stats-figure {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 5px solid #f8df00;
  border-radius: 50px;
}
.overlay--stats-figure .overlay--stats-img {
  border-radius: 50px;
  border: 3px solid #07eaff;
  width: 70px;
  height: 70px;
}
.overlay--stats-aside {
  top: -5px;
  position: relative;
}
.overlay--stats .overlay--bottom-infos {
  text-transform: uppercase;
}
.overlay--bottom-infos > .overlay--bottom-infos--username {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  display: block;
  background-color: #0c5d65;
  padding: 8px;
}
.overlay--bar {
  height: 15px;
  appearance: none;
  -webkit-appearance: none;
}
.overlay--bar.overlay--hp-bar::-webkit-progress-bar {
  background-color: #e2e2e2;
  border-radius: 10px;
}
.overlay--bar.overlay--hp-bar::-webkit-progress-value {
  background-color: #209f5a;
  /* box-shadow: 0px -2px 0px #076833; */
  border-radius: 10px;
}
.overlay--bar.overlay--sp-bar::-webkit-progress-bar {
  background-color: #e2e2e2;
  /* box-shadow: 1px 0px 5px #999; */
  border-radius: 10px;
}
.overlay--bar.overlay--sp-bar::-webkit-progress-value {
  background-color: #204c9f;
  /* box-shadow: 0px -2px 0px #0a2c6b; */
  border-radius: 10px;
}
.headline {
  font-size: 14px;
  text-shadow: 1px 1px 1px #000;
  font-weight: bold;
}
</style>