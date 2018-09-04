/*
palindroom
  Ga na of een woord een palindroom is.
  bvb:
    palindroom('pap') ==> true
    palindroom('neen') ==> true
    palindroom('meetsysteem') ==> true
    palindroom('mlsdvmlsn') ==> false

    */


function palindroom (word){
    for(var i=0 ; i < word.length ; i = i + 1){
        var currentLetter = word[i]
        var correspondingLetter = word[word.length -i -1]
    }
        if(currentLetter != correspondingLetter){
            return false
        }else (currentLetter = correspondingLetter)
            return true
        
    }

console.log(palindroom('pap'))
console.log(palindroom('neen'))
console.log(palindroom('meetsysteem')) 
console.log(palindroom('mlsdvmlsn'))
