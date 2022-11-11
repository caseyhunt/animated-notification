document.getElementById("trigger").addEventListener("click", notify);

function notify(){
  console.log("notify");
  for(i=0; i< document.querySelectorAll(".notification").length; i++){
  console.log(document.querySelectorAll(".notification")[i].classList.toggle("notification-change"));
}
}
