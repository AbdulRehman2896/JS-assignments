


/*
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true,
       number : 4
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true,
       number : 9
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false,
       number : 8
   }]
var sum = 0 ;
for (i=0;i<library.length;i++){
    console.log(library[i].author)
    
}

var total = 200
var grade =  +prompt("type your marks")
var perc = (grade/total)*100
console.log(perc + "%")
if (100 > perc && perc >= 90){
    console.log("you got A grade")
}
else if ( 90 > perc  && perc >= 80){
    console.log("you got B grade")
}
else if (80 > perc && perc >= 70){
    console.log("you got C grade")
}
else if (70 > perc  && perc >= 60){
    console.log("you got D grade")
}
else if (perc < 60){
    console.log("you got F grade")
}
else{
    console.log("invalid number")
    
}

var whet = +prompt()
console.log(whet + "°C")
var fahre = (whet*9/5)+32
console.log("temperature in Fahrenheit is  "+fahre+"° F")

var Us = +prompt("dollars")
var pak = Us * 104
console.log(pak + "pkr")

var num = 7
for (i=1;i<11;i++){
    console.log(num*i)
    
}

var total = 500
var mark = +prompt("write your marks")
var perc = (mark/total)*100
console.log(perc + "%")

for (a=11 ; a>=0;a){
    console.log(a*6)
}

var tre = true

if (tre)
{
    console.log("good")
}
else{
    console.log("bad")
}


var num = 56
var num1 = 55
for (a=0;a<6;a++){
    if (num == num1){
        console.log(a)
    }
    else {
       console.log("erre") 
    }
}

for (i= 0; i<2;i++ )
{
    for (a = 0 ; a<3 ;a++){
        console.log(a,i)
    }
}

var products = [
{
    id: 101,
    title: "Airpods",
    variations: [
      { color: "blue", price: 2000, quantity: 4, },
      { color: "black", price: 3000, quantity: 2 },
      { color: "white", price: 4000, quantity: 6 },
      { color: "pink", price: 5000, quantity: 8 },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { color: "blue", price: 5000, quantity: 2 },
      { color: "black", price: 6000, quantity: 1 },
      { color: "white", price: 8000, quantity: 5 },
    ],
  },
  {
    id: 103,
    title: "Laptop",
    variations: [
      { color: "blue", price: 500, quantity: 10 },
      { color: "black", price: 1000, quantity: 2 },
      { color: "white", price: 1500, quantity: 3 }
      ]}]
   //console.log(products)
    // console.log(products[2].variations[2].quantity)
sum = 0;
var avg = 0
for(i=0;i< products.length ; i++)
{
    for(j=0;j < products[i].variations.length;j++){
    sum += products[i].variations[j].price;
        }
    }

//console.log(products[2].variations.length)
console.log(sum)


console.log("product  "+products[0].id+"  =  " + sum )*/

