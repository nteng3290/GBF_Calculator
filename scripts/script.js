//lists
const pool = [
    'R', 'SR', 'SSR'
]
//probability
const weight = [
    0.82, 0.15, 0.03
]
//Weighted Random Number Generation
//1 roll R 82%; SR 15%; SSR 3%;
// In a 10 roll, the last item is 97%SR/3%SSR
const weightedList = function(pool, weight){
    const weighed_list = [];
    
    //rewrite as forEach

    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
        var multiples = weight[i] * 100;
         
        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighed_list.push(pool[i]);
        }
    }
     
    return weighed_list;
}

var weighed_list = weightedList(pool, weight);
console.log(weighed_list);


//Puls random card from the weighted list
function randoCard (){
    const randoInt = Math.floor(Math.random() * weighed_list.length)
    const getCard = weighed_list[randoInt];
    console.log(randoInt, getCard);
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