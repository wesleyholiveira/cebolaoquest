export default function (socket, io) {
  return Object.freeze({
    whenUserEnter(user) {
      io.of('overlay').emit('data', user)
    },
  })
}