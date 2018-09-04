/*driehoeksgetal
  maak een functie die een driehoeksgetal berekent.
  doe dit met behulp van een for loop.
  https://nl.wikipedia.org/wiki/Driehoeksgetal
  bvb:
    driehoek(6) ==> 6 */
function driehoek (n){
    var totaal = 0
    for (var i = 0; i <= n ; i = i+1){
        totaal = totaal + i 
    

    console.log(i) 
}
return totaal
}
console.log(driehoek(3)) 
console.log(driehoek(1))//1
console.log(driehoek(5))//15
console.log(driehoek(6))//21