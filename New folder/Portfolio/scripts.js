window.onload = function(){
    document.body.style.visibility = "hidden";
    document.getElementById('loader').style.visibility="visible";
 myvar =    setTimeout(displayLoader,2000);
}

function displayLoader(){
    document.body.style.visibility= "visible";
    document.getElementById('loader').style.display="none";

}

var arrow = document.getElementById("next-arrow");
var services = document.getElementById("services");
arrow.addEventListener("click",()=>{
    window.scrollBy(0,600);
})
