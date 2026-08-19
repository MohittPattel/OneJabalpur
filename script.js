// Simple mobile menu toggle and year injection
document.addEventListener('DOMContentLoaded',function(){
  var btn=document.getElementById('navToggle');
  var nav=document.getElementById('siteNav');
  if(btn && nav){
    btn.addEventListener('click',function(){
      nav.classList.toggle('open');
    });
  }
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
});
