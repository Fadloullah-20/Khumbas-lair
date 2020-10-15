/*let randDecimal = Math.random();
let randNum = randDecimal *5; 
let randInt = Math.floor(randNum);
console.log('randDecimal', randDecimal);
console.log('randNum', randInt);
console.log('randInt', randInt);*/
/*
function rand() {let r1 = Math.floor((Math.random()*10));
let r2 = Math.floor((Math.random()*10));
let set = r1 +r2;
console.log('Random number #1',r1);
console.log('Random number #2',r2);
console.log('Sum',set);};

rand();
rand(); */
/*
let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];

let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let ranD= days[Math.floor((Math.random()*8))];

let ranR= reactions[Math.floor((Math.random()*6))];
console.log('Your lucky day:',ranD);
console.log(ranR);
//console.log(days);
//console.log(reactions); */


function ran() {
    let min = 37
    let max = 54
    let ranD= Math.floor(Math.random() *(+max- +min)) + min;
    console.log(ranD);};

ran();
ran();
ran();
ran();
ran();
ran();
ran();

