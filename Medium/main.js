var months =new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

var month =prompt("Plese enter a number between 1 and 12");

if(month >12 || month <1){
    alert("The number given is invalid");
}
else{
    console.log(`The month corresponding to ${month} is ${months[month-1]}`);
}