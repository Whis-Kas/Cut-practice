(function(){
    let navpage=document.querySelectorAll(".nav_page");
    let navbar=document.querySelector(".navbar");
    let nav_content=document.querySelector(".nav_content");
    console.log(navpage);
    for(let i=0;i<navpage.length;i++)
    {
    navpage[i].addEventListener("click",function(e){
        console.log(e.target);
        resetpage(i);

    });
    }
    navbar.addEventListener("click",function(e){
        console.log(!nav_content.style.display);
        if(!nav_content.style.display||nav_content.style.display=="none"){
            nav_content.style.display="block";
        }
        else{
            nav_content.style.display="none";
        }
    });
    function resetpage(el){
        let page=document.querySelectorAll(".page");
        let nav=document.querySelectorAll(".nav_page");
        for(let i=0;i<page.length;i++){
            if(i==el)
            {
                page[i].style.display="block";
                nav[i].classList.add("nav_active");
            }
            else{
                page[i].style.display="none";
                nav[i].classList.remove("nav_active");
            }
        }
    }
    resetpage(0);
})();
