// ######### scroll effect #########
let contact=document.querySelector("#contact");
let blog=document.querySelector("#blog");
let portfolio=document.querySelector("#portfolio");
let about=document.querySelector("#about");

let navLinks=document.querySelectorAll(".nav-link");
navLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        if(link.innerHTML=="Contact"){
            contact.scrollIntoView({behavior:"smooth"});
        }else if(link.innerHTML=="Blog"){
            blog.scrollIntoView({behavior:"smooth"});
        }else if(link.innerHTML=="Portfolio"){
            portfolio.scrollIntoView({behavior:"smooth"});
        }else if (link.innerHTML=="About"){
            about.scrollIntoView({behavior:"smooth"});
        }
    })
})
