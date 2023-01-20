
// $(function(){
//     $("button").on({
//         mouseover:function(){
//             $(this).css({
//                 left:(Math.random()*200)+"px",
//                 top:(Math.random()*200)+"px",
//             });
//         }
//     });
// });
const button = document.getElementById('button')
const OFFSET = 100

button.addEventListener('click', () => {
    alert('woooooow really!')
    window.close()

})

document.addEventListener('mousemove' ,(e) => {
    const x = e.pageX
    const y = e.pageY
    console.log(x, y)
    const buttonBox = button.getBoundingClientRect()
    const hotizontalDistanacfrom = distancefromceneter(button.x, x, 
    buttonBox.width) 
    const verticalDistanacfrom = distancefromceneter(button.x, x, 
        buttonBox.height)
    const hotizontaloffset = buttonBox.width / 2 + OFFSET
    const verticaloffset = buttonBox.height / 2 + OFFSET
    if (Math.abs(hotizontalDistanacfrom) <= hotizontaloffset && Math.abs (verticalDistanacfrom) <= (verticaloffset) {
        setButtonPosition(
            buttonBox.x + hotizontaloffset / hotizontalDistanacfrom * 10
            ,buttonBox.y + verticaloffset / verticalDistanacfrom * 10
        )
        
    } 
    
    

})
function setButtonPosition(top, left) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = button.getBoundingClientRect()

    if(disstanceFromCenter(left, windowBox.left, buttonBox.height) < 0) {
        left = windowBox.right - button.width - OFFSET
    }

    button.style.top  = '${top}px'
    button.style.left = '${left}px'
}

function disstanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}
