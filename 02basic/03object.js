// object literals

const mysm=Symbol("key1") 

const jsUser={
    name:"sakshi",
    [mysm]:"mykey1", // how to add symbol into object
    age:18,
    location:"mohali",
    email:"abc@gmail.com",
    isLoggedin:false,
    last_loginday:["monday"]
}

console.log(jsUser.email); // how to access object
console.log(jsUser["email"])
console.log(jsUser[mysm]) // how to access the symbol in object

Object.freeze(jsUser)// use to freeze the object not change any value