const outputMessage = () =>{
    const messages ={
    food : ['goulash ', 'body milk ', 'grain '],
    verbs : ['eat ', 'love ', 'despise '],
    subst : ['i ', 'you ', 'we '],
    }
    const message = messages.subst[Math.floor(Math.random()*messages.subst.length)] + messages.verbs[Math.floor(Math.random()*messages.verbs.length)] + messages.food[Math.floor(Math.random()*messages.food.length)];
    console.log(message);
};
outputMessage();