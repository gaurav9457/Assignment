let display=document.getElementById("popupDiv");
function login() {
    console.log("script");
    
    display.style.display='block';
   // document.body.style.overflow='hidden';
}

function closePopup(){
    //let display=document.getElementById("popupDiv");
    display.style.display='none';
   // document.body.style.overflow='auto';
}
window.onclick = function(e) {
   // let display=document.getElementById("popupDiv");
    if (e.target == display) {
        display.style.display = "none";
        //document.body.style.overflow='auto';
    }
}


