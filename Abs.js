/*absolute waarde:
  maak een functie die de absolute waarde van een getal teruggeeft.
  (zonder gebruik te maken van Math.abs)
  bvb:
    abs(-1) ==> 1
    abs(0) ==> 0
    abs(1) ==> 1*/

function abs ( i ){
    if ( i >= 0 ){
return i

 } else{
return i * -1
}
}
console.log(abs(0))
console.log(abs(-1))
console.log(abs(1))