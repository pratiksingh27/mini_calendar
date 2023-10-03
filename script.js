const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

let today = new Date();
// console.log(today);

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const val = today.getDate();

// if(val<10){
//     date.innerHTML="0" + val;  // if the number is less than ten, add a zero in front of it to make sure that
// }
// else{
//     date.innerHTML = val;
// }

date.innerHTML = (today.getDate()<10 ? "0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

