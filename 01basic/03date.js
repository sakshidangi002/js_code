let my_date=new Date()
//console.log(my_date.toString());
//console.log(my_date.toISOString());
//console.log(my_date.toDateString()); // date
//console.log(my_date.toLocaleDateString()); // date and time
//console.log(my_date.toLocaleString());
//console.log(my_date.toUTCString()); // day date time
// month start with 0

console.log(my_date.getDate());
console.log(my_date.getDay());
console.log(my_date.getFullYear());

my_date.toLocaleDateString('default',{
    weekday:"long"
})