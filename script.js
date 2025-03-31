const Buttons= document.querySelectorAll(".button");
const body= document.querySelector("body")

Buttons.forEach((buttton)=>{
    // console.log(buttton);
    buttton.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id==='grey') {
            body.style.backgroundColor= e.target.id
        }
        if (e.target.id==='white') {
            body.style.backgroundColor= e.target.id
        }
        if (e.target.id==='blue') {
            body.style.backgroundColor= e.target.id
        }
        if (e.target.id==='yellow') {
            body.style.backgroundColor= e.target.id
        }
    })
})