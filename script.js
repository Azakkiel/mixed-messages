let messageComponentsFood = ['goulash ', 'body milk ', 'grain '];
let messageComponentsVerbs = ['eat ', 'love ', 'despise '];
let messageComponentsSubst = ['i ', 'you ', 'we '];
const outputMessage = () =>{
    const message = messageComponentsSubst[Math.floor(Math.random()*messageComponentsSubst.length)] + messageComponentsVerbs[Math.floor(Math.random()*messageComponentsVerbs.length)] + messageComponentsFood[Math.floor(Math.random()*messageComponentsFood.length)];
    console.log(message);
};
outputMessage();