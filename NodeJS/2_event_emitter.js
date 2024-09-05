const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  // on is used to add a callback function that's going 
  // to be executed when the event is triggered
  console.log('started');
});
eventEmitter.emit('start'); // emit is used to trigger event

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});
eventEmitter.emit('start', 23);

start3 = (start, end) => {
  console.log(`started from ${start} to ${end}`);
}
eventEmitter.on('start', start3);
eventEmitter.emit('start', 1, 100);

console.log(eventEmitter.eventNames())
eventEmitter.setMaxListeners(4)
console.log(eventEmitter.getMaxListeners())
console.log(eventEmitter.listenerCount('start'))
console.log(eventEmitter.listeners('start'))
console.log(eventEmitter.off('start', start3)) //lias for removeListener
console.log(eventEmitter.listeners('start'))
eventEmitter.once('start', () => console.log('once'));
console.log(eventEmitter.listeners('start'))
eventEmitter.prependListener('start', () => console.log('start1'))
console.log(eventEmitter.listeners('start'))
eventEmitter.removeAllListeners('start');
console.log(eventEmitter.listeners('start'))


// The EventEmitter object also exposes several other methods to interact with events, like
// once(): add a one-time listener
// removeListener() / off(): remove an event listener from an event
// removeAllListeners(): remove all listeners for an event
