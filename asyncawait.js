console.log("person1: show ticket");
console.log("person2: show ticket");


const preMovie = async() => {
    const promiseWifeBringingTic = new Promise ((resolve, reject) => {
        setTimeout(() => resolve('ticket'),3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve,reject) => resolve(`butter`));
    const getCoke = new Promise((resolve,reject) => resolve(`coke`));

    let [popcorn,butter,coke] = await Promise.all([getPopcorn,addButter,getCoke])

   // let ticket = await promiseWifeBringingTic;
    console.log(`wife: i have ${ticket}`);
    console.log('hus: we should go in');
    console.log('wife: i am hungry');

   // let popcorn = await getPopcorn;
    console.log(`hus: i got some ${popcorn}`);
    console.log('hus: we should go in');
    console.log('wife: i want buttet');

   // let butter = await addButter;
    console.log(`hus: i got some ${butter}`);
    console.log('wife: i want coke');

   // let coke = await getCoke;

    return ticket;
}

preMovie().then((m)=> console.log(`person3: show ${ticket}`));

console.log("person4: show ticket");
console.log("person5: show ticket");