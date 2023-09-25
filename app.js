const acordion=document.querySelectorAll(".head_div");




acordion.forEach(item=>{
    item.addEventListener("click", function ani(){
        let img1=item.children[1];
        let text1=item.children[0];
        img1.classList.toggle("icon_style");
        text1.classList.toggle("color")
    let text=item.nextElementSibling;
    text.classList.toggle("text_style")
    
    })
})

