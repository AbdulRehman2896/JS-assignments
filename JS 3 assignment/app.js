var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "Black", price: 50000, quantity: 5 },
      { id: 2, color: "Red", price: 50000, quantity: 1 },
      { id: 3, color: "Silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "Black", price: 50000, quantity: 5 },
      { id: 2, color: "Red", price: 76000, quantity: 1 },
      { id: 3, color: "Silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Hamza",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: false,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Faze",
        rating: 3.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "Black", price: 75000, quantity: 5 },
      { id: 2, color: "Red", price: 70000, quantity: 3 },
    ],
    reviews: [
      {
        id: 1,
        user: "Nomi",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.0,
        title: "Very Good Product",
        comments: "It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];


//------------------------------------------------------------------

//console.log(products[0].reviews[1].comments)
/*var prodid = +prompt("write product id for products")
for (i = 0;i<products.length;i++){
  if (prodid === products[i].id){
    console.log(products[i])
  }
 } 
//------------------------------------------------------------------


for (a = 0;a<products.length;a++){
  console.log(products[a].title)
}
//----------------------------------------------------------------


//var color = +prompt("write product id for colors")
for(b = 0;b < products[0].variations.length;b++){
  console.log(products[0].variations[b].color)
}

//----------------------------------------------------------------


var sum = 0;
for (i = 0 ;i < products[0].variations.length;i++){
  sum = sum + products[0].variations[i].quantity
}
console.log(sum)


//----------------------------------------------------------------


for (j=0;j<products.length;j++){
for (i = 0;i<products[j].variations.length;i++){
if (products[j].variations[i].quantity <2){
  console.log(products[j].title)
}
}
}


//----------------------------------------------------------------


var high1 = 0;
var high2 = 0;
var high3 = 0;
//for (i =0;i< products[i].reviews.length;i++){
for(h = 0;h < products[0].reviews.length;h++){
 high1 = high1 + products[0].reviews[h].rating
}
var avg1 = high1 /products[0].reviews.length
//----------
for(j = 0;j < products[1].reviews.length;j++){
 high2 = high2 + products[1].reviews[j].rating
}
var avg2 = high2 /products[1].reviews.length
for(k = 0;k < products[2].reviews.length;k++){
 high3 = high3 + products[2].reviews[k].rating
}
var avg3 = high3 /products[2].reviews.length
console.log(avg1)
console.log(avg2)
console.log(avg3)

if(avg1>avg2 && avg1>avg3){
  console.log("Highest Rated Product: "+products[0].title)
}
else if (avg3>avg2 && avg3>avg1){
  console.log("Highest Rated Product: "+products[1].title)
}
else if (avg2>avg1 && avg2>avg3){
  console.log("Highest Rated Product: "+products[2].title)
}

//-------------------------------------------------------------

//console.log(products[2].reviews.length)
for(j=0;j<products.length;j++){
for(i=0;i<products[j].reviews.length;i++){
if(products[j].reviews[i].status===true){
  console.log(products[j].reviews[i])
}}}

//-------------------------------------------------------------

var max1 =0;
var color1 =0;
for(s=0;s<products[0].variations.length;s++){
  if(products[0].variations[s].price>max1){
    max1 = products[0].variations[s].price
    color1 = products[0].variations[s].color
  }}
console.log("Product "+ products[0].id + " = "+ products[0].title 
    + " - "+color1+" ("+max1+")")
var max2 =0;
var color2 =0;
for(i=0;i<products[1].variations.length;i++){
  if(products[1].variations[i].price>max2){
    max2 = products[1].variations[i].price
    color2 = products[2].variations[i].color
  }}
console.log("Product "+ products[1].id + " = "+ products[1].title 
    + " - "+color2+" ("+max2+")")
var max3 =0;
var color3 =0;
for(u=0;u<products[2].variations.length;u++){
  if(products[2].variations[u].price>max3){
    max3 = products[2].variations[u].price
    color3 = products[2].variations[u].color
   }
  }
     console.log("Product "+ products[2].id + " = "+ products[2].title 
    + " - "+color3+" ("+max3+")")*/

//-------------------------------------------------------------



var tsum = 0;
for (f =0;f<;f++){
  for(r=0;r<;r++){
    tsum = tsum + 
  }
}


