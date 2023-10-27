function view_nav() 
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
  {
    x.className += " responsive";
  } else 
  {
    x.className = "topnav";
  }
}

function submit_form(event) 
{
  event.preventDefault();
  var from=document.querySelector("#first_select").options[first_select.selectedIndex].innerHTML;
  var to=document.querySelector("#second_select").options[second_select.selectedIndex].innerHTML;
  var date=document.querySelector("#date").value;
if(from=="" || to==""||date=="")
  alert("Check your data");
else
alert("Details your trip \n"+"From: "+from+"\nTo: "+to+"\nOn: "+date);
}
function change_selecetor(event)
{
  var second_select = document.querySelector('#second_select');
  second_select.options[0].selected=true;
  var first_index=event.target.selectedIndex;
  for (let i = 1; i <second_select.options.length; i++) 
  second_select.options[i].disabled=false;
  second_select.options[first_index].disabled=true;
}
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