const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu!  ${chapolin.name} colorado`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')

/*const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você', message)
}) //once ouve somente uma única vez

ev.emit('saySomething', "Adriel")
ev.emit('saySomething', "Marina")
ev.emit('saySomething', "Luna")
*/