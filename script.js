// const arr = [5 , 6 , 8 , 9 , 3 , 2, 4 , 7 , 1];



// function double(x) {
//     return x*2;
// }

//const output = arr.map(triple);

// console.log(output);


// function triple(x) {
//     return x*3;
// }

//console.log(output);



// function binary (x)
// {
//     return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output)


// function isEven(x){
//     return x % 2 === 0 ;
// }


// const output = arr.filter(isEven)

// console.log(output);

// function isOdd(x){
//     return x % 2 ;
// }

// const output = arr.filter(isOdd);

// console.log(output);

// function greaterThan5(x){
//     return x > 5 ;
// }

// const lessThan4 = arr.filter((x) =>  x < 4 );

// console.log(lessThan4);


// const output = arr.map((x) => x*3);

// console.log(output);


// Reduce 

const user = [
{name : "sant", age : 22},
{name : "rahul", age : 22},
{name : "rahul", age : 28},
{name : "harsh", age : 20},
{name : "sweta", age : 24},
];


const output = user.reduce(function (acc , user){
  if(acc[user.name]){
    (acc[user.name]) = ++ (acc[user.name])
  }
  else{
    (acc[user.name]) = 1
  }
  return acc;
}, {})

console.log(output);

















