const EventEmitter = require("events");

const customEmitter = new EventEmitter();

let studentAge = 21;

setInterval(() => {
    customEmitter.emit('meeting',  'Anna', 'New York', studentAge)
}, 1000);

customEmitter.on('meeting', (name, location, age)=>{
    console.log(`This is ${name}. She is ${age} years old and she is from ${location}.`)
    studentAge++;
    customEmitter.emit('msg', `Next year, ${name} will be ${studentAge} years old.`);
});

customEmitter.on('msg', (newMsg) => {
    console.log(`Notice: ${newMsg}`);
});
