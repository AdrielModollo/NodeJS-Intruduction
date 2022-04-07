const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você', message)
}) //once ouve somente uma única vez

ev.emit('saySomething', "Adriel")
ev.emit('saySomething', "Marina")
ev.emit('saySomething', "Luna")
