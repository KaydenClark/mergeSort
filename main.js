const findStart = require('./a-sort')

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
    }
}

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
}

const newArray = () => {
    const theArray = []
    for(i = 0; theArray.length < 100; i ++){
        theArray.push(Math.floor(Math.random() * 101))
    }
    // console.log(theArray)
    return theArray //returns the new array 
}

console.log(mergeSort(newArray()))
console.log(findStart('y'))