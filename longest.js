/* 
langste woord
  Geef het langste woord in een lijst terug.
  bvb:
    longest([ "find", "the", "longest", "word" ]) ==> "longest"
    */
   function longest (words) {
    var longestWord =words[0]

    for (var i=1; i<words.length; i= i+1){
    var word= words[i]
    if(word.length > longestWord.length){
        longestWord = word
    }
}
    return longestWord
 }
console.log(longest(["a","bb"]))
console.log(longest(["aaa","bb"]))
console.log(longest(["a","b"]))
console.log(longest([ "find", "the", "longer", "word" ]))