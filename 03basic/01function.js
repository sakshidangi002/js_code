// basic function define
//function addnum(num1,num2){
//    return num1+num2
//}
//
//const result=addnum(2,5)
//console.log(result)


//function mylist(...num1){ // use of rest operator
//    return num1 
//}
//console.log(mylist(200,500,600));


// how to pass object in function

const user={
 username:"sakshi",
 price:399
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleobject(user)

handleobject({
   username:"sakshi",
   price:233
})


// how to pass array in function
//const myarry=[200,400,600]
//
//function myfunction(getarray){
//    return getarray[1]
//
//}
//console.log(myfunction(myarry));
