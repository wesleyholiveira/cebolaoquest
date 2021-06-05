<template>
  <v-container class="chat-container" fluid>
    <v-row>
      <v-col style="padding: 0">
        <div class="chat-messages" ref="chat">
          <div v-for="(msg, i) in messages" :key="i">
            <pre v-if="msg.type && msg.type == 'system'" class="chat--pre">
              <strong>{{msg.username}}</strong> entrou na sessão.
            </pre>
            <span
              v-if="msg.type && msg.type == 'roll'"
              class="chat--roll"
              v-html="formatRollMessage(msg)"
            ></span>
            <pre
              v-if="!msg.type"
              class="chat--pre"
            ><strong>{{msg.username}}:</strong> {{msg.message}}</pre>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="chat--input-group">
          <div class="chat--field">
            <v-form @submit.prevent="sendMessage" ref="form">
              <v-textarea
                v-model="message"
                rounded
                auto-grow
                rows="5"
                row-height="10"
                background-color="#40444B"
                hint="Segure o SHIFT para quebrar linha"
                class="chat--input--textarea"
                v-on:focus="socket.emit('typing', { username, typing: false })"
                v-on:blur="socket.emit('typing', { username, typing: false })"
                v-on:keyup="writing($event)"
                v-on:keydown.13="sendMessage($event)"
                ref="chatMessage"
              ></v-textarea>
              <span class="chat--typing" v-if="usersTyping">{{
                usersTyping
              }}</span>
              <div class="chat--buttons">
                <v-dialog
                  v-model="dialog"
                  max-width="230"
                  @click:outside="resetDices()"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dice-6</v-icon>
                    </v-btn>
                  </template>
                  <v-card class="chat--buttons--card">
                    <v-badge
                      :content="getDice('d6')"
                      :value="getDice('d6')"
                      overlap
                      small
                    >
                      <v-btn icon @click="dices.d6.push(generateRNG(1, 6))">
                        <v-icon>mdi-dice-d6-outline</v-icon>
                      </v-btn>
                    </v-badge>
                    <v-badge
                      :content="getDice('d8')"
                      :value="getDice('d8')"
                      color="red darken-1"
                      overlap
                      small
                    >
                      <v-btn icon @click="dices.d8.push(generateRNG(1, 8))">
                        <v-icon>mdi-dice-d8-outline</v-icon>
                      </v-btn>
                    </v-badge>
                    <v-badge
                      :content="getDice('d10')"
                      :value="getDice('d10')"
                      color="cyan"
                      overlap
                      small
                    >
                      <v-btn icon @click="dices.d10.push(generateRNG(1, 10))">
                        <v-icon>mdi-dice-d10-outline</v-icon>
                      </v-btn>
                    </v-badge>
                    <v-badge
                      :content="getDice('d12')"
                      :value="getDice('d12')"
                      color="green darken-1"
                      overlap
                      small
                    >
                      <v-btn icon @click="dices.d12.push(generateRNG(1, 12))">
                        <v-icon>mdi-dice-d12-outline</v-icon>
                      </v-btn>
                    </v-badge>
                    <v-badge
                      :content="getDice('d20')"
                      :value="getDice('d20')"
                      color="yellow darken-3"
                      overlap
                      small
                    >
                      <v-btn icon @click="dices.d20.push(generateRNG(1, 20))">
                        <v-icon>mdi-dice-d20-outline</v-icon>
                      </v-btn>
                    </v-badge>
                    <v-card-actions>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-btn
                              block
                              color="green"
                              @click="
                                socket.emit('roll', {
                                  username,
                                  dices,
                                })
                                resetDices()
                                dialog = false
                              "
                              >ROLL!</v-btn
                            >
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-btn block depressed @click="resetDices()"
                              >RESETAR</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-form>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let timeout
export default {
  data() {
    return {
      username: '',
      messages: [],
      message: '',
      typing: [],
      dialog: false,
      dices: {
        d6: [],
        d8: [],
        d10: [],
        d12: [],
        d20: [],
      },
    }
  },

  computed: {
    usersTyping() {
      const typing = this.typing.filter((e) => e != this.username)
      if (typing) {
        if (typing.length > 0) {
          let verb = 'está'
          if (typing.length > 1) {
            verb = 'estão'
          }

          return `${typing.join(', ')} ${verb} digitando...`
        }
      }
    },
  },

  mounted() {
    const { username } = this.$auth.user

    this.username = username
    this.socket = this.$nuxtSocket({
      channel: '/index',
      reconnection: false,
    })

    this.socket.emit('whenUserEnter', username)

    this.socket.on('data', (res) => {
      this.messages.push(res)
      setTimeout(() => (this.$refs['chat'].scrollTop += 99999), 30)
    })

    this.socket.on('typing', (res) => {
      if (res.typing) {
        this.typing.push(res.username)
      } else {
        if (this.typing.length > 0) {
          this.typing = this.typing.filter((e) => e != res.username)
        }
      }
    })
  },

  methods: {
    generateRNG(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    getDice(diceKey) {
      const d = this.dices[diceKey]
      if (d) {
        return d.length
      }

      return 0
    },

    formatRollMessage(data) {
      const { username, dices } = data
      let msg = `${username} rolou `

      for (const k of Object.keys(dices)) {
        const values = dices[k]

        if (values.length > 0) {
          msg = `${msg}<strong>${
            values.length
          }x${k.toUpperCase()}</strong> (${values}), `
        }
      }

      return msg.substring(0, msg.lastIndexOf(','))
    },

    resetDices() {
      this.dices = {
        d6: [],
        d8: [],
        d10: [],
        d12: [],
        d20: [],
      }
    },

    sendMessage(event) {
      if (!event.shiftKey && this.message && this.message.trim().length > 0) {
        event.preventDefault()

        this.socket.emit('send', {
          username: this.username,
          message: this.message,
        })

        this.message = null
        this.socket.emit('userTyping', {
          username: this.username,
          typing: false,
        })
      }
    },

    writing(event) {
      if (event) {
        if (event.keyCode != 13) {
          if (!this.typing.includes(this.username)) {
            this.typing.push(this.username)
            this.socket.emit('userTyping', {
              username: this.username,
              typing: true,
            })
          }

          if (timeout != undefined) clearTimeout(timeout)
          timeout = setTimeout(() => {
            this.socket.emit('userTyping', {
              username: this.username,
              typing: false,
            })
            this.typing = this.typing.filter((e) => e != this.username)
          }, 1000)
        }
      }
    },
  },
}
</script>

<style>
.myContainer {
  margin-top: 50px;
  padding-bottom: 0px;
}
.chat--field .v-textarea textarea {
  max-width: 92%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.chat--field .v-text-field__details {
  margin-top: 5px;
  margin-left: 10px;
}
</style>

<style scoped>
.chat-container {
  height: 100%;
  background-color: #36393f;
  position: relative;
}
.chat-container .chat-messages {
  max-height: calc(100vh - 180px);
  overflow-y: auto;
}
.chat-messages .chat--roll {
  width: 100%;
  font-size: 14px;
  font-style: italic;
  display: block;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
}
.chat-messages .chat--pre {
  padding: 12px;
  word-break: break-word;
  white-space: pre-line;
  word-wrap: break-word;
}
.chat-container .chat--input-group {
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 15px;
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;
}
.chat--input-group .chat--field {
  width: 100%;
  position: relative;
}
.chat--input-group .chat--typing {
  font-size: 0.8rem;
  margin-left: 10px;
}
.chat--field .chat--buttons {
  height: 50px;
  padding-left: 5px;
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  align-items: center;
}
.chat--buttons--dialog {
  width: auto;
}
.chat--buttons--card {
  padding: 15px;
}
</style>