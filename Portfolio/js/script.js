var div_img = document.getElementById("div_img");
var div_info = document.getElementById("div_info");
div_img.addEventListener("mouseover", function() 
{
    div_info.style.visibility="visible";
});
div_img.addEventListener("mouseleave", function() 
{
    div_info.style.visibility="hidden";

});
window.addEventListener("load", function () 
{
    var year = 2000;
    var today = new Date();
    var current_year = today.getFullYear();
    document.getElementById("age").innerHTML=current_year-year;
});
function change_bg(bg,event) 
{
 event.target.style.background = bg;
}

function email(event)
{
  var text=event.target.value;
  const emailreg = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{1,6})$/;
  if (!emailreg.test(text))
  alert("Your email format is incorrect.\nIt should be like (---@---.---) ");

}
const overlay = document.querySelector("#overlay");
document.addEventListener("DOMContentLoaded", () => {
  overlay.style.display="block";
});
setTimeout(() => {
  overlay.style.display="none";
}, 3000);