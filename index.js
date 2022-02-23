/*document.querySelector('.cross').style.display="none";
document.querySelector('.hamburger').addEventListener("click",()=>{
  console.log("clicked")
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
  {
    document.querySelector('.hamburger').style.display="inline";
    document.querySelector('.cross').style.display="none";
  }
  else{
    document.querySelector('.hamburger').style.display="none";
    document.querySelector('.cross').style.display="inline";
  }
})*/
console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo'); if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
{
document.querySelector('.ham').style.display = 'inline' 
document.querySelector('.cross').style.display = 'none'
 }
else{
document.querySelector('.ham').style.display= 'none'
setTimeout(()=>{
document.querySelector('.cross').style.display = 'inline'
},350);
}
})
