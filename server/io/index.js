export default function (socket, io) {

  return Object.freeze({
    whenUserEnter(user) {
      const msg = `<strong>${user}</strong> entrou na sessão.`

      // systemMessages.push(msg)
      io.of('index').emit('data', msg)
    },

    send({ username, message }) {
      io.of('index').emit('data', `<strong>${username}:</strong> ${message}`)
    },

    userTyping({ username, typing }) {
      socket.broadcast.emit('typing', {
        username,
        typing
      })
    }
  })
}