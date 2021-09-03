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
    if(document.querySelector('.docto2') !=  undefined)
    {
        if(window.pageYOffset >= document.querySelector('.docto2').offsetTop + 50)
        {
            document.querySelector('.docto2').style.display = "none"
        }
        else
        {
            document.querySelector('.docto2').style.display = "block"
        }
        
    }
};

function myFunction(){
    var container = document.querySelector(".container");
    setHref("accueil", "background")
    setHref("practice", "pratique")
    setHref("therapy", "therapie")
    setHref("cabi", "cabinet")
    setHref("cont", "contact")
}

function setHref(idhref, idcontainer){
    if (window.pageYOffset + 10 >= document.getElementById(idcontainer).offsetTop) {
        document.querySelectorAll('.a').forEach(elem =>{
            elem.style.fontWeight = "lighter"
            elem.style.textDecoration = "none" 
           
        })
        document.getElementById(idhref).style.fontWeight = "bold"
        document.getElementById(idhref).style.textDecoration = "underline 2px"
    }
}