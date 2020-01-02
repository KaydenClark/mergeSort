// const findStart = require('./a-sort')

const mergeSort = (array) => {
    let length = array.length
    //check to see if it can be split
    if (length < 2){
        return array
    }else{
    //find the middle of the array
    const middle = Math.floor(length / 2)
    //split the array in two
    const leftSide = array.slice(0, middle)
    const rightSide = array.slice(middle, length)
    //recure untill finnished
    return merge(mergeSort(leftSide), mergeSort(rightSide))
    } //if else statement
} // whole function scope

const merge = (left, right) => {
    const mergedArray = []
    while(left.length && right.length) {
        //finds the lower value
        if(left[0] <= right[0]){
            mergedArray.push(left.shift()) //adds the first of the left value
        }else{
            mergedArray.push(right.shift()) //adds the first of right value
        }
    } //checks if the array is empty 
    while(left.length){
        mergedArray.push(left.shift())
    } // merges the left array
    while(right.length){
        mergedArray.push(right.shift())
    } //merges the right array
    return mergedArray // returns the array value
} // whole function scope

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

const newArray = () => {
    const theArray = []
    for(i = 0; theArray.length < 100; i ++){
        theArray.push(Math.floor(Math.random() * 101))
    }
    // console.log(theArray)
    return theArray //returns the new array 
} // whole function scope

console.log(mergeSort(newArray()))
console.log(findStart('e'))