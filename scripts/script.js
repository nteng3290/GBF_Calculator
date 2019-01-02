//page elements
const soloyolo = document.getElementById('soloyolo');
const roll10 = document.getElementById('roll-your-life-away');

//lists
const pool = [
    'R', 'SR', 'SSR'
]
//probability
const weight = [
    0.82, 0.15, 0.03
]
const rateUp = [
    0, 0.97, 0.03
]
//Weighted Random Number Generation
//1 roll R 82%; SR 15%; SSR 3%;
// In a 10 roll, the last item is 97%SR/3%SSR
const weightedList = function(pool, weight){
    const weighed_list = [];
    // Loop over weights
    for (let i = 0; i < weight.length; i++) {
        const multiples = weight[i] * 100;
         
        // Loop over the list of items
        for (let j = 0; j < multiples; j++) {
            weighed_list.push(pool[i]);
        }
    }
     
    return weighed_list;
}

const weighed_list = weightedList(pool, weight);

//Puls random card from the weighted list
function randoCard (){
    const randoInt = Math.floor(Math.random() * weighed_list.length)
    const getCard = weighed_list[randoInt];
    console.log(randoInt, getCard);
    //print weighed_list ten times

}

function tenRoll(){
    roll10.addEventListener('click', function(){
        //Runs the function get rando card 10 times
        for (let i = 0; i < 10; i++) randoCard(i);
        console.log("Is clicked");
    })
    
}

tenRoll();

// console.log(randoCard);


//make API call to database
//if no database need to create database
//need to get the rates of the items
//create rate ups according the banner
//create single pull & 10pull
//10pull need to have gauaranteed SR+
//track how much crystals were spent
//track sparks