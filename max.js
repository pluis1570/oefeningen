/*max:
  maak een functie die het grootste getal teruggeeft.
  (zonder..)
  bvb:
    max(10, 20) ==> 20
    max(0, 0) ==> 0
    max(-50, 20) ==> 20
    */
function max( x, y ) {
if (x < y){
return y
} else {            
return x
}
}
          
console.log(max(0,1))
console.log(max(10,20))
console.log(max(11,15))