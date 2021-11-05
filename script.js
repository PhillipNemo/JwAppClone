
let bottomNav  = document.getElementById("bottom-nav")
let toggleStatus = 1;

function toggleNav() {

  if (toggleStatus == 1){
    bottomNav.style.left="0";
    toggleStatus = 0 ;
  } 
  else{
    bottomNav.style.left="-100%";
     toggleStatus = 1;
   }
}


let currentDate = document.getElementById('date');
//getting dates

// days
let d = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()];

//months
let month = new Array(12)
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let m = month[d.getMonth()];


currentDate.innerHTML = ` ${n}, ${m} ${d.getDay()} >`;
