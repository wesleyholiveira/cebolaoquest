export default function (socket, io) {

  return Object.freeze({
    whenUserEnter(user) {
      io.of('index').emit('data', {
        username: user,
        type: 'system'
      })
    },

    send({ username, message }) {
      io.of('index').emit('data', {
        username,
        message,
        type: null
      })
    },

    userTyping({ username, typing }) {
      socket.broadcast.emit('typing', {
        username,
        typing,
        type: null
      })
    },

    roll({ username, dices }) {
      io.of('index').emit('data', {
        username,
        dices,
        type: 'roll'
      })
    },
  })
}