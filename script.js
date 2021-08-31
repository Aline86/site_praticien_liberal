window.onload = init
function init() {
    document.querySelectorAll('.a').forEach(elem =>{
        console.log(elem)
        elem.addEventListener('click', function(){
            $("#menu-btn").prop('checked', false);
        })
    })
}
