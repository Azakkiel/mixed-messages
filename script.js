const outputMessage = () =>{
    const messages ={
    food : ['goulash ', 'body milk ', 'grain '],
    verbs : ['eat ', 'love ', 'despise '],
    subst : ['i ', 'you ', 'we '],
    }
    const randomFood = messages.food[Math.floor(Math.random()*messages.food.length)];
    const randomSubst = messages.subst[Math.floor(Math.random()*messages.subst.length)];
    const randomVerb = messages.verbs[Math.floor(Math.random()*messages.verbs.length)];
    const message = randomFood + randomSubst + randomVerb;

    console.log(message);
};
outputMessage();