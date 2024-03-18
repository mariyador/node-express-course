const EventEmitter = require("events");

const customEmitter = new EventEmitter();

let age = { value: 21 };

setInterval(() => {
    customEmitter.emit('meeting', 'Anna', 'New York', age)
}, 1000);

customEmitter.on('meeting', (name, location, age)=>{
    console.log(`This is ${name}. She is ${age.value} years old and she is from ${location}.`)
    age.value++;
    customEmitter.emit('msg', `Next year, ${name} will be ${age.value} years old.`);
});

customEmitter.on('msg', (newMsg) => {
    console.log(`Notice: ${newMsg}`);
});
