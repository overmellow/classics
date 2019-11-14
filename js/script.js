jQuery(document).ready(function(){
    window.onscroll = function() { myFunction()};
    var navbar = document.getElementById("main-menu");
//    var sticky = navbar.offsetTop;
    function myFunction() {
//        console.log(window.pageYOffset)
        if (window.pageYOffset >= 100) {
            navbar.classList.remove("transparent"); 
        } else {
            navbar.classList.add("transparent");
        }
//        var adminnavbar = document.getElementById("admin-menu");
//        if(adminnavbar != null){
//        if(adminnavbar != null && $('#admin-menu').css('display') == 'block'){
//            if (window.pageYOffset + 28 >= sticky) {
//                navbar.classList.add("fixed-top-admin-navbar-exist")
//            } else {
//                navbar.classList.remove("fixed-top-admin-navbar-exist");
//            }
//        } else {
//            if (window.pageYOffset > sticky) {
//                navbar.classList.add("fixed-top")
//            } else {
//                navbar.classList.remove("fixed-top");
//            } 
//        }   
    }    
    
    myFunction();       
});


