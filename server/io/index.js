export default function (socket, io) {

  return Object.freeze({
    whenUserEnter(user) {

      // systemMessages.push(msg)
      io.of('index').emit('data', {
        username: user,
        system: true
      })
    },

    send({ username, message }) {
      io.of('index').emit('data', {
        username,
        message,
        system: false
      })
    },

    userTyping({ username, typing }) {
      socket.broadcast.emit('typing', {
        username,
        typing
      })
    }
  })
}