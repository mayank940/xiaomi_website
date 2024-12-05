
let supportBox = document.querySelectorAll(".supportBox");
let sbutton = document.querySelectorAll(".sbutton");

let mpDivs = document.querySelectorAll(".mpDivs")
let mpText = document.querySelector(".mpText");
let mpDiv1Learn = document.querySelector(".mpDiv1Learn");


// slidebar2 click effect
sbutton.forEach((element)=>{
    element.addEventListener("click",()=>{
        sbutton.forEach((ele)=>{
            ele.classList.remove("clicked")
        })
        element.classList.add("clicked")
    })
})

// mp divs hover effect

mpDivs.forEach((element)=>{
    element.addEventListener("mouseover",()=>{
        element.firstElementChild.style.scale = "1.1";
        element.childNodes[5].classList.add("mpDivsTextHover");
        element.lastElementChild.classList.add("mpDivsHover");
    })
    element.addEventListener("mouseout",()=>{
        element.firstElementChild.style.scale = "1";
        element.childNodes[5].classList.remove("mpDivsTextHover");
        element.lastElementChild.classList.remove("mpDivsHover");
    })
})

mpText.addEventListener("mouseover", ()=>{
    mpDiv1Learn.classList.add("mpDiv1Hover")
})

mpText.addEventListener("mouseout", ()=>{
    mpDiv1Learn.classList.remove("mpDiv1Hover")
})

// support section hover effect

supportBox.forEach((element)=>{
    element.addEventListener("mouseover",()=>{
        element.classList.add("sHover");
        element.firstElementChild.classList.add("sHover");
    })

    element.addEventListener("mouseout",()=>{
        element.classList.remove("sHover");
        element.firstElementChild.classList.remove("sHover");
    })

})