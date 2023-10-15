console.log('Person1 : Shows Ticket');
console.log('Person2: shows ticket');


async function preMovie(){
    const wifeBringTicket = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    });

    const getPopcorn = new Promise((resolve , reject)=>{
        resolve(`got popcorn`);
    })
    const getCoke = new Promise((resolve , reject)=>{
        resolve(`got Coke`);
    })
    
    let ticket =  await wifeBringTicket;
    console.log('i have ticket');
    console.log('we should go in');
    console.log('i am hungry');

   let [popcorn , coke] = await Promise.all([getPopcorn,getCoke])

   console.log(`${popcorn} , ${coke}`);

    
    return ticket;
}

preMovie();
console.log('person4:shows ticket');