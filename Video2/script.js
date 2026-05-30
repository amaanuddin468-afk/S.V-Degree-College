window.addEventListener("scroll", function(){

let header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "#00154d";
}
else{
header.style.background = "#002366";
}

});

console.log("S.V Degree College Website Loaded");