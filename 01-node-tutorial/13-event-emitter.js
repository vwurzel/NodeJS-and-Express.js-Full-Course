const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received user ${name} and ID ${id}`)
})

customEmitter.on('response', () => {
    console.log(`Other logic`)
})
customEmitter.emit('response', 'Vinicius', 12)