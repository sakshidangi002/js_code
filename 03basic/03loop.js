// using for in loop

//const arr=[2,3,4,5]
//for(const i in arr){
//    console.log(`value in array ${i}`)
//}


// for in loop in object to print key
const myobj={
    name:"sakshi",
    age:78,
    location:"mohali"
}

for(const i in myobj){
    console.log(i)
}

// for in loop for object to print value

//const myobj1={
//    name:"sakshi",
//    age:78,
//    location:"mohali"
//}
//
//for(const i in myobj1){
//    console.log(myobj1[i])
//}


// filters
/*const num=[1,2,3,4,5,6,7,8,9]
const mynum=num.filter(num=>(num>6))
console.log(mynum)

const mynum2=num.map(num=>(num+10))
console.log(mynum2)*/


// changing
//const num=[1,2,3,4,5,6,7,8,9]
//const newnum=num
//            .map(num=>(num*10))
//            .map(num=>(num+1))
//            .filter(num=>(num>=40))
//console.log(newnum)     


//reducer

const app=[2,5,6,8]
const result=app.reduce((acc,val)=>acc+val,1)
console.log(result);

