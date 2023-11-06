console.log("hello");


let contact=document.querySelector("#contact");
let blog=document.querySelector("#blog");
let portfolio=document.querySelector("#portfolio");
let about=document.querySelector("#about");
// document.querySelector(".contact-link").addEventListener("click",()=>{
//     contact.scrollIntoView({behavior: "smooth"});
    
// });
let navLinks=document.querySelectorAll(".nav-link");
navLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
    //    console.log(link.innerHTML);
        if(link.innerHTML=="Contact"){
            contact.scrollIntoView({behavior:"smooth"});
        
        }else if(link.innerHTML=="Blog"){
            blog.scrollIntoView({behavior:"smooth"});
        }else if(link.innerHTML=="Portfolio"){
            portfolio.scrollIntoView({behavior:"smooth"});
        }else if(link.innerHTML=="About"){
            about.scrollIntoView({behavior:"smooth"});
        }
    })

})
