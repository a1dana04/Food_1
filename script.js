const modal = document.querySelector(".modal")
const btnl = document.querySelector(".btn-l")
const close = document.querySelector(".modal h5")
const modalone = document.querySelector(".modalone")


btnl.addEventListener("click", () => {
  modalone.style.display = "block"
    
    modal.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
})

close.addEventListener("click", () => {
  
    modalone.style.display = 'none'

    modal.style.transform = "scale(0.1)"
})






