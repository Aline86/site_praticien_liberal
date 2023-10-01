window.onload = init
function init() {
    hover_under_after_click()
    document.querySelectorAll('.a').forEach(elem =>{
        elem.addEventListener('click', function(e){
            
            if(e.target.id == "therapy"){
                corners(".englobetherapie");
             
            }
            if(e.target.id == "practice"){
                corners(".englobe");
              
            }
            document.querySelectorAll('.a').forEach(elem =>{
                elem.style.fontWeight = "lighter"
                elem.style.textDecoration = "none"
            })
            elem.style.fontWeight = "bold"
            elem.style.textDecoration = "underline 1.5px"
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
function corners(container){
    if(document.querySelector(container).classList.contains("initiate")){
    
        document.querySelectorAll(".initiate").forEach(element => {
            element.classList.remove("initiate");
        });
    }
    else 
    {
        document.querySelector(container).classList.add("initiate")
    } 
    
}
function hover_under_after_click(){
    document.querySelectorAll('.a').forEach(elem =>{
        elem.addEventListener('mouseenter', function(){
            if(elem.style.textDecoration == "underline 1.5px" && elem.style.textDecoration != "none")
            {
                elem.classList.remove('underline')   
            }
            else {
                elem.classList.add('underline')
            } 
        })
    })
}
function myFunction(){
    var container = document.querySelector(".container");
    if(document.getElementById("pratique").offsetTop >= window.pageYOffset)
    {
        document.querySelectorAll('.a').forEach(elem =>{
            elem.style.fontWeight = "lighter"
            elem.style.textDecoration = "none" 
        }) 
    }
    setHref("practice", "pratique")
    setHref("therapy", "therapie")
    setHref("cabi", "cabinet")
    setHref("cont", "contact")
}

function setHref(idhref, idcontainer){
  
    if (window.pageYOffset + 10 >= document.getElementById(idcontainer).offsetTop ) {
       
        document.querySelectorAll('.a').forEach(elem =>{
            elem.style.fontWeight = "lighter"
            elem.style.textDecoration = "none" 
        })
        document.getElementById(idhref).style.fontWeight = "bold"
        document.getElementById(idhref).style.textDecoration = "underline 1.5px"   
    }
}
$( document ).ready(function() {
    hover_under_after_click()
    document.querySelector(".absolute").addEventListener("click", function(){
        document.querySelectorAll(".initiate").forEach(element => {
            element.classList.remove("initiate");
        });
    }) 
});