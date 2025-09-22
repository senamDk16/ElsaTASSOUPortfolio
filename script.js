const btnMenu = document.getElementById("btnMenu")
const navMobile = document.getElementById("navMobile")
const itemMenuMobile = document.querySelectorAll("#navMobile a")


btnMenu.addEventListener("click",()=>{
    if(btnMenu.ariaExpanded == "false" ){
        btnMenu.ariaExpanded = "true"
        navMobile.classList.remove("translate-x-full")
    }
    else{
        btnMenu.ariaExpanded = "false"
        navMobile.classList.add("translate-x-full")
    }
})

itemMenuMobile.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(btnMenu.ariaExpanded == "true"){
            btnMenu.ariaExpanded = "false"
            navMobile.classList.add("translate-x-full")
        }
    })
})