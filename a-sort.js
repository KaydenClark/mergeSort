const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const findStart = (start) => {
    let newAlphabet = []
    for(i = 0; i < alphabet.length; i++){
        if(alphabet[i] == start){ // checks to see if the current object matches the input
            let endHalf = alphabet.slice(0, i)  //devides the array by the input
            let frontHalf = alphabet.slice(i, 26) //second half of the devide that starts with the input
            frontHalf.push(endHalf) // adds the front half of the alphabet behind the input's half
            newAlphabet.push(frontHalf.join()) // places the new alphabet that starts with the input into the array
        } //if statement that checks the array object to input
    } //for loop
    return newAlphabet.join().split(',') // merges the two arrays from earlier and takes out the commas that sperates them. then returns it
} // whole function scope

// console.log(alphabet.length)

// console.log(findStart('y'))

var exports = module.exports = {findStart}
