const pool = {
    0: 'r-level',
    1: 'sr-level',
    2: 'ssr-level'
}
//Weighted Random Number Generation
//1 roll R 82%; SR 15%; SSR 3%;
// In a 10 roll, the last item is 97%SR/3%SSR

function randoCard (){
    const keys = Object.keys(pool).length
    const randoInt = Math.floor(Math.random() * keys)
    const getCard = pool[randoInt];
    console.log(getCard);
}

randoCard();
// console.log(randoCard);

//make API call to database
//if no database need to create database
//need to get the rates of the items
//create rate ups according the banner
//create single pull & 10pull
//10pull need to have gauaranteed SR+
//track how much crystals were spent
//track sparks