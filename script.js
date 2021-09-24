
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