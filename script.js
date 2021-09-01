window.onload = init
function init() {
    document.querySelectorAll('.a').forEach(elem =>{
        elem.addEventListener('click', function(){
            document.querySelectorAll('.a').forEach(elem =>{
                elem.style.fontWeight = "lighter"
                elem.style.textDecoration = "none"
            })
            elem.style.fontWeight = "bold"
            elem.style.textDecoration = "underline 2px"
            $("#menu-btn").prop('checked', false);
        })
    })
}
window.onscroll = function() {
    myFunction()
    
};

function myFunction(){
    var container = document.querySelector(".container");
   
    if (window.pageYOffset < container.offsetTop ) {
        document.querySelector(".nav_pc").style.backgroundColor="rgb(17, 112, 37)"
        document.querySelector(".nav_pc").style.backgroundImage = "none"
    }
    else
    {
        document.querySelector(".nav_pc").style.backgroundImage = "url('menu.jpg')"
    }
    setHref("accueil", "background")
    setHref("practice", "pratique")
    setHref("therapy", "therapie")
    setHref("cabi", "cabinet")
    setHref("cont", "contact")

}

function setHref(idhref, idcontainer){
    if (window.pageYOffset >= document.getElementById(idcontainer).offsetTop ) {
        document.querySelectorAll('.a').forEach(elem =>{
            elem.style.fontWeight = "lighter"
            elem.style.textDecoration = "none"
        })
        document.getElementById(idhref).style.fontWeight = "bold"
        document.getElementById(idhref).style.textDecoration = "underline 2px"
    }
}