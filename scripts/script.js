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
const rateUpWeight = [
    0, 0.97, 0.03
]
//Weighted Random Number Generation
//1 roll R 82%; SR 15%; SSR 3%;
const weightedList = function(pool, weight){
    const weighedList = [];
    // Loop over weights
    for (let i = 0; i < weight.length; i++) {
        const multiples = weight[i] * 100;
        
        // Loop over the list of items
        for (let j = 0; j < multiples; j++) {
            weighedList.push(pool[i]);
        }
    }
    return weighedList;
}

// In a 10 roll, the last item is 97%SR/3%SSR
//Rate ups on 10 roll, last occurence is guaranteed SR and above
const rateUp = function(pool, rateUpWeight){
    const weighedList = [];
    // Loop over weights
    for (let i = 0; i < rateUpWeight.length; i++) {
        const multiples = rateUpWeight[i] * 100;
         
        // Loop over the list of items
        for (let j = 0; j < multiples; j++) {
            weighedList.push(pool[i]);
        }
    } 
    return weighedList;
}

const weighedList = weightedList(pool, weight);
const rateUpList =rateUp(pool,rateUpWeight);

//Pulls random card from the weighted list
function randoCard (){
    const randoInt = Math.floor(Math.random() * weighedList.length)
    const getCard = weighedList[randoInt];
    console.log(randoInt, getCard);
}

function singleRoll(){
    soloyolo.addEventListener('click', function(){
        //Runs the function rando card 1 time
        randoCard();
    })
}

function tenRoll(){
    roll10.addEventListener('click', function(){
        //Runs the function get rando card 10 times
        //the last occurence should have different rates
        for (let i = 0; i < 9; i++) randoCard(i);
    })
    
}
function appLoad(){
    tenRoll();
    singleRoll();
}

appLoad();

// console.log(randoCard);


//make API call to database
//if no database need to create database
//need to get the rates of the items
//create rate ups according the banner
//create single pull & 10pull
//10pull need to have gauaranteed SR+
//track how much crystals were spent
//track sparks