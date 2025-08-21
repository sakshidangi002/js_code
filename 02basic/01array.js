const my_arr=[0,1,2,3,4]
//console.log(my_arr[1])

//************* array methods**************//
//my_arr.push(5) 
//my_arr.push(6)// add the value at the end
//my_arr.pop() // remove the value at end
//my_arr.unshift(7) // add value ate start and shift other value
//my_arr.shift() // remove the unshift value
//console.log(my_arr.includes(9))
//console.log(my_arr.indexOf(9))
//
//const new_arr=my_arr.join() // join array into new varibale and also convert into string
//console.log(my_arr);
//console.log(new_arr);



// ---slice splice--- //

console.log(my_arr)
const myn1=my_arr.slice(1,4) // return copy of section arrya
console.log(myn1)
console.log("A" ,my_arr)

const myn2=my_arr.splice(1,4) // remove the element from the array
console.log(myn2)
console.log("A" ,my_arr)
