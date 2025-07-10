document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("name").addEventListener("keyup",function(){
    document.getElementById("greet").textContent="Hello "+document.getElementById("name").value;
  });
    
});