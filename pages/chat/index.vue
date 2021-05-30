<template>
  <v-container class="chat-container" fluid>
    <v-row>
      <v-col>
        <div class="chat-messages">
          <span v-for="(msg, i) in messages" :key="i">
            <pre v-if="msg.system"><strong>{{msg.username}}</strong> entrou na sessão.</pre>
            <pre v-if="!msg.system"><strong>{{msg.username}}:</strong> {{msg.message}}</pre>
          </span>
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
                v-on:keypress="writing($event)"
                v-on:keyup.13="sendMessage($event)"
                ref="chatMessage"
              ></v-textarea>
              <span class="chat--typing" v-if="typing.length > 0">{{
                usersTyping
              }}</span>
              <div class="chat--buttons">
                <v-btn icon>
                  <v-icon>mdi-dice-6</v-icon>
                </v-btn>
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
    }
  },

  computed: {
    usersTyping() {
      const typing = this.typing.filter(e => e != this.username)
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

    this.socket.on('data', (res) => this.messages.push(res))

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
    sendMessage(event) {
      if (!event.shiftKey && this.message && this.message.trim().length > 0) {
        this.socket.emit(
          'send',
          {
            username: this.username,
            message: this.message,
          },
          () => {
            this.message = null
            this.socket.emit('userTyping', {
              username: this.username,
              typing: false,
            })
          }
        )
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
          timeout = setTimeout(
            () => {
              this.socket.emit('userTyping', {
                username: this.username,
                typing: false,
              })
              this.typing = this.typing.filter(e => e != this.username)
            },
            1000
          )
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
  max-height: calc(100vh - 160px);
  overflow-y: auto;
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
</style>