export default function (socket, io) {
  return Object.freeze({
    whenUserEnter(username) {
      io.of('overlay').emit('data', {
        username,
        type: 'connect'
      })
    },

    disconnect(username) {
      io.of('overlay').emit('data', {
        username,
        type: 'disconnect'
      })
    },
  })
}