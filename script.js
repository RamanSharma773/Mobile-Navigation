
const image=document.querySelectorAll('.image')
const listItems=document.querySelectorAll('nav ul li')

listItems.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideAllImage()
        hideAllItems()
    })
})
function hideAllImage(){
    image.forEach(image => image.classList.remove('show'))
}

function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
}