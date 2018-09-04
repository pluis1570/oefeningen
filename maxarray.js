function maxArray (a){
    var biggestNumber = a[0];
    for ( var i = 1; i < a.length; i = i+1 ){
        //console.log (i)
        if (a[i] > biggestNumber){
             biggestNumber = a[i]
        }
    }
    return biggestNumber
 }
  
  console.log(maxArray(0,1,5,9,22,54))
  console.log(maxArray(10,20,88,125))
  console.log(maxArray(-11,-15,-23,-25,55,-45))