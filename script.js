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
