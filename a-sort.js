const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const findStart = (start) => {
    let newAlphabet = []
    for(i = 0; i < alphabet.length; i++){
        if(alphabet[i] == start){
            let endHalf = alphabet.slice(0, i)
            let frontHalf = alphabet.slice(i, 26)
            newAlphabet.join(frontHalf)
            newAlphabet.join(endHalf)
        }
    }
    console.log(newAlphabet)
}

// console.log(alphabet.length)

console.log(findStart('y'))
